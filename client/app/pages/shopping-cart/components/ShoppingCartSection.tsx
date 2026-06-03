import styled from "@emotion/styled";
import { useNavigate } from "react-router";
import Info from "../../../commons/images/info.svg?react";
import ShoppingCartItemGroup from "./ShoppingCartItemGroup";
import ShoppingCartOrderSummary from "./ShoppingCartOrderSummary";
import OrderCheckButton from "./OrderCheckButton";

export default function ShoppingCartSection() {
  const navigate = useNavigate();

  const goToOrderCheckPage = () => {
    navigate("/cart/check/", {
      state: {
        totalItems: 2,
        totalQuntity: 4,
        totalPrice: 120000,
      },
    });
  };

  return (
    <ShoppingCartSectionContainer>
      <div className="heading">
        <h2 className="title">장바구니</h2>
        <p className="sub-text">현재 2종류의 상품이 담겨있습니다.</p>
      </div>
      <ShoppingCartItemGroup />
      <p className="sub-text icon-text">
        <Info aria-label="정보" />총 주문 금액이 100,000원 이상일 경우 무료
        배송됩니다.
      </p>
      <ShoppingCartOrderSummary />
      <OrderCheckButton onClick={goToOrderCheckPage} />
    </ShoppingCartSectionContainer>
  );
}

const ShoppingCartSectionContainer = styled.section`
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
