import styled from "@emotion/styled";
import Info from "../../../commons/images/info.svg?react";
import ShoppingCartItemGroup from "./ShoppingCartItemGroup";

export default function ShoppingCartSection() {
  return (
    <ShoppingCartSectionContainer>
      <h2 className="title">장바구니</h2>
      <p className="sub-text">현재 2종류의 상품이 담겨있습니다.</p>
      <ShoppingCartItemGroup />
      <p className="sub-text icon-text">
        <Info aria-label="정보" />총 주문 금액이 100,000원 이상일 경우 무료
        배송됩니다.
      </p>
    </ShoppingCartSectionContainer>
  );
}

const ShoppingCartSectionContainer = styled.section`
  padding: 1.5rem;
  .title {
    font-size: 24px
    font-weight: 700
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
