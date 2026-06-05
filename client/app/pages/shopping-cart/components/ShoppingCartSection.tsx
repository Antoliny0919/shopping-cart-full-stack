import styled from "@emotion/styled";
import { useNavigate } from "react-router";
import Info from "../../../commons/images/info.svg?react";
import ShoppingCartItemGroup from "./ShoppingCartItemGroup";
import ShoppingCartOrderSummary from "./ShoppingCartOrderSummary";
import OrderCheckButton from "./OrderCheckButton";
import { CartItemsProps, OnChangeAllSelected } from "../types";
import CartAggregate from "../CartAggregate";
import CartManager from "../CartManager";
import { CartPricing } from "../CartPricing";
import { SelectedItemLocalStorage } from "../storages/selected-item-storage";
import useCartItems from "../hooks/useCartItems";
import useCartItemSelected from "../hooks/useCartItemSelected";
import ShoppingCartSectionSkeleton from "./ShoppingCartSectionSkeleton";

export default function ShoppingCartSection() {
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

  const goToOrderCheckPage = () => {
    const cartManager = new CartManager(selectedItemId, cartItems);
    const aggregate = new CartAggregate(
      cartManager.selectedCartItems,
      CartPricing,
    );
    navigate("/cart/check/", {
      state: {
        totalItems: aggregate.totalItems,
        totalQuantity: aggregate.totalQuantity,
        totalPrice: aggregate.grandTotal,
      },
    });
  };

  return (
    <ShoppingCartSectionContainer>
      {fetchStatus === "loading" && <ShoppingCartSectionSkeleton />}
      {fetchStatus === "success" && (
        <>
          <ShoppingCartSectionHeader itemCount={cartItems.length} />
          <ShoppingCartSectionContent
            cartItems={cartItems}
            goToOrderCheck={goToOrderCheckPage}
            updateItem={updateItem}
            removeItem={removeItem}
            onChangeSelected={onChangeSelected}
            onChangeAllSelected={onChangeAllSelected}
            selectedItemId={selectedItemId}
          />
        </>
      )}
      {fetchStatus === "error" && <div>error..</div>}
    </ShoppingCartSectionContainer>
  );
}

export function ShoppingCartSectionHeader({
  itemCount,
}: {
  itemCount: number;
}) {
  return (
    <div className="heading">
      <h2 className="title">장바구니</h2>
      {itemCount > 0 && (
        <p className="sub-text">현재 {itemCount}종류의 상품이 담겨있습니다.</p>
      )}
    </div>
  );
}

export function ShoppingCartSectionContent({
  cartItems,
  goToOrderCheck,
  updateItem,
  removeItem,
  onChangeSelected,
  onChangeAllSelected,
  selectedItemId,
}: CartItemsProps & {
  goToOrderCheck: () => void;
  onChangeAllSelected: OnChangeAllSelected;
}) {
  const cartManager = new CartManager(selectedItemId, cartItems);
  const aggregate = new CartAggregate(
    cartManager.selectedCartItems,
    CartPricing,
  );

  return (
    <>
      {cartItems.length ? (
        <>
          <ShoppingCartItemGroup
            cartItems={cartItems}
            updateItem={updateItem}
            removeItem={removeItem}
            onChangeSelected={onChangeSelected}
            onChangeAllSelected={onChangeAllSelected}
            selectedItemId={selectedItemId}
          />
          <p className="sub-text icon-text">
            <Info aria-label="정보" />총 주문 금액이 100,000원 이상일 경우 무료
            배송됩니다.
          </p>
          <ShoppingCartOrderSummary
            total={aggregate.total}
            delivery={aggregate.delivery}
            grandTotal={aggregate.grandTotal}
          />
        </>
      ) : (
        <ShoppingCartNoItemsContent>
          <p>장바구니에 담은 상품이 없습니다.</p>
        </ShoppingCartNoItemsContent>
      )}
      <OrderCheckButton
        disabled={!Boolean(aggregate.totalItems)}
        onClick={goToOrderCheck}
      />
    </>
  );
}

const ShoppingCartSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.5rem;
  margin-bottom: 4rem;
  overflow: scroll;

  .heading {
    margin: 2rem 0;
  }

  .title {
    font-size: 24px;
    font-weight: 700;
    margin: 12px 0;
  }

  .sub-text {
    font-weight: 500;
    font-size: 12px;
  }

  .icon-text {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

const ShoppingCartNoItemsContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
