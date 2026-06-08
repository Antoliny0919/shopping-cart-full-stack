import styled from "@emotion/styled";
import { useNavigate } from "react-router";
import Info from "../../../commons/images/info.svg?react";
import Checkbox from "../../../commons/components/Checkbox";
import CartItemList from "./CartItemList";
import OrderSummary from "./OrderSummary";
import CartSummary from "../domain/CartSummary";
import CartManager from "../domain/CartManager";
import { CartPricing } from "../domain/CartPricing";
import { Button } from "../../../commons/styles/Button";
import { SelectedItemsLocalStorage } from "../storages/SelectedItemsStorage";
import useCartItems from "../hooks/useCartItems";
import useCartItemSelected from "../hooks/useCartItemSelected";
import Loading from "./Loading";
import { useEffect, useEffectEvent } from "react";

export default function Section() {
  const navigate = useNavigate();
  const storage = new SelectedItemsLocalStorage();

  const {
    items: cartItems,
    fetchStatus,
    removeItem,
    updateItem,
  } = useCartItems();

  const {
    selectedItemId,
    initSelectedItemId,
    onChangeSelected,
    onChangeAllSelected,
  } = useCartItemSelected(storage);

  const cartManager = new CartManager(selectedItemId, cartItems);
  const summary = new CartSummary(cartManager.selectedCartItems, CartPricing);

  const onDelete = (itemId: string) => {
    removeItem(itemId);
    // 아이템이 선택된 상태로 제거되면 선택상태또한 제거됩니다.
    onChangeSelected(false, itemId);
  };

  const goToOrderCheckPage = () => {
    navigate("/cart/check/", {
      state: {
        totalItems: summary.totalItems,
        totalQuantity: summary.totalQuantity,
        totalPrice: summary.grandTotal,
      },
    });
  };

  const allSelect = useEffectEvent(() => {
    if (selectedItemId === null) {
      initSelectedItemId(cartItems.map((item) => item.product_id));
    }
  });

  useEffect(
    function isFirstVisit() {
      if (fetchStatus === "success") {
        allSelect();
      }
    },
    [fetchStatus],
  );

  return (
    <SectionLayout>
      {fetchStatus === "loading" && <Loading />}
      {fetchStatus === "success" && (
        <>
          <Header>
            <Title>장바구니</Title>
            {cartItems.length > 0 && (
              <SubText>
                현재 {cartItems.length}종류의 상품이 담겨있습니다.
              </SubText>
            )}
          </Header>
          {cartItems.length ? (
            <>
              <Checkbox
                checked={cartManager.allItemsSelected}
                labelText={"전체선택"}
                onChange={() => onChangeAllSelected(cartManager.allItemsId)}
              ></Checkbox>
              <CartItemList
                cartItems={cartItems}
                updateItem={updateItem}
                onDelete={onDelete}
                onChangeSelected={onChangeSelected}
                selectedItemId={selectedItemId}
              />
              <SubText className="icon-text">
                <Info aria-label="정보" />총 주문 금액이 100,000원 이상일 경우
                무료 배송됩니다.
              </SubText>
              <OrderSummary
                total={summary.total}
                delivery={summary.delivery}
                grandTotal={summary.grandTotal}
              />
            </>
          ) : (
            <EmptyCart>
              <p>장바구니에 담은 상품이 없습니다.</p>
            </EmptyCart>
          )}
          <Button
            disabled={!Boolean(summary.totalItems)}
            onClick={goToOrderCheckPage}
          >
            주문 확인
          </Button>
        </>
      )}
      {fetchStatus === "error" && <div>error..</div>}
    </SectionLayout>
  );
}

const Header = styled.div`
  margin: 2rem 0;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 12px 0;
`;

const SubText = styled.p`
  font-weight: 500;
  font-size: 12px;
`;

const SectionLayout = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.5rem;
  margin-bottom: 4rem;
  overflow: scroll;

  .icon-text {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

const EmptyCart = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
