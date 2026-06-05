import styled from "@emotion/styled";
import { useNavigate } from "react-router";
import Info from "../../../commons/images/info.svg?react";
import AllItemCheckbox from "./AllItemCheckbox";
import ShoppingCartItemList from "./ShoppingCartItemList";
import OrderSummary from "./OrderSummary";
import CartAggregate from "../CartAggregate";
import CartManager from "../CartManager";
import { CartPricing } from "../CartPricing";
import { Button } from "../../../commons/styles/Button";
import { SelectedItemLocalStorage } from "../storages/selected-item-storage";
import useCartItems from "../hooks/useCartItems";
import useCartItemSelected from "../hooks/useCartItemSelected";
import Loading from "./Loading";

export default function Section() {
  const navigate = useNavigate();
  const storage = new SelectedItemLocalStorage();

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

  if (fetchStatus === "success" && selectedItemId === null) {
    initSelectedItemId(cartItems.map((item) => item.product_id));
  }

  const cartManager = new CartManager(selectedItemId, cartItems);
  const aggregate = new CartAggregate(
    cartManager.selectedCartItems,
    CartPricing,
  );

  const goToOrderCheckPage = () => {
    navigate("/cart/check/", {
      state: {
        totalItems: aggregate.totalItems,
        totalQuantity: aggregate.totalQuantity,
        totalPrice: aggregate.grandTotal,
      },
    });
  };

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
              <AllItemCheckbox
                labelText={"전체선택"}
                checked={cartManager.allItemsSelected}
                onChangeAllSelected={onChangeAllSelected}
                allItemsId={cartManager.allItemsId}
              />
              <ShoppingCartItemList
                cartItems={cartItems}
                updateItem={updateItem}
                removeItem={removeItem}
                onChangeSelected={onChangeSelected}
                selectedItemId={selectedItemId}
              />
              <SubText className="icon-text">
                <Info aria-label="정보" />총 주문 금액이 100,000원 이상일 경우
                무료 배송됩니다.
              </SubText>
              <OrderSummary
                total={aggregate.total}
                delivery={aggregate.delivery}
                grandTotal={aggregate.grandTotal}
              />
            </>
          ) : (
            <EmptyCart>
              <p>장바구니에 담은 상품이 없습니다.</p>
            </EmptyCart>
          )}
          <Button
            disabled={!Boolean(aggregate.totalItems)}
            onClick={goToOrderCheckPage}
          ></Button>
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
