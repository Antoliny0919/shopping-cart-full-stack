import styled from "@emotion/styled";
import { getCartItems } from "../api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Info from "../../../commons/images/info.svg?react";
import ShoppingCartItemGroup from "./ShoppingCartItemGroup";
import ShoppingCartOrderSummary from "./ShoppingCartOrderSummary";
import OrderCheckButton from "./OrderCheckButton";
import { CartItem } from "../types";
import { CartPricing } from "../CartPricing";
import { FetchStatus } from "../../../commons/types";
import ShoppingCartSectionSkeleton from "./ShoppingCartSectionSkeleton";

export default function ShoppingCartSection() {
  const navigate = useNavigate();

  const [fetchStatus, setFetchStatus] = useState<FetchStatus>("idle");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const goToOrderCheckPage = () => {
    const pricing = new CartPricing(cartItems);
    navigate("/cart/check/", {
      state: {
        totalItems: cartItems.length,
        totalQuantity: cartItems.reduce((acc, item) => acc + item.quantity, 0),
        totalPrice: pricing.total,
      },
    });
  };

  const fetchCartItems = async () => {
    setFetchStatus("loading");
    try {
      const items = await getCartItems();
      setCartItems(items);
      setFetchStatus("success");
    } catch {
      setFetchStatus("error");
    }
  };

  useEffect(function initialCartItems() {
    fetchCartItems();
    return;
  }, []);

  return (
    <ShoppingCartSectionContainer>
      {fetchStatus === "loading" && <ShoppingCartSectionSkeleton />}
      {fetchStatus === "success" && (
        <>
          <ShoppingCartSectionHeader itemCount={cartItems.length} />
          <ShoppingCartSectionContent
            cartItems={cartItems}
            goToOrderCheck={goToOrderCheckPage}
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
}: {
  cartItems: CartItem[];
  goToOrderCheck: () => void;
}) {
  const pricing = new CartPricing(cartItems);

  return (
    <>
      {cartItems.length ? (
        <>
          <ShoppingCartItemGroup cartItems={cartItems} />
          <p className="sub-text icon-text">
            <Info aria-label="정보" />총 주문 금액이 100,000원 이상일 경우 무료
            배송됩니다.
          </p>
          <ShoppingCartOrderSummary
            total={pricing.total}
            delivery={pricing.delivery}
            grandTotal={pricing.grandTotal}
          />
        </>
      ) : (
        <ShoppingCartNoItemsContent>
          <p>장바구니에 담은 상품이 없습니다.</p>
        </ShoppingCartNoItemsContent>
      )}
      <OrderCheckButton
        disabled={!Boolean(cartItems.length)}
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
