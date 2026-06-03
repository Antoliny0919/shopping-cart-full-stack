import { useLocation } from "react-router";
import styled from "@emotion/styled";

export default function OrderCheckSection() {
  const { totalItems, totalQuantity, totalPrice } = useLocation().state;
  return (
    <OrderCheckSectionContainer>
      <h2 className="title">주문 확인</h2>
      <p className="order-summary-sub-text">
        총 {totalItems}종류의 상품 {totalQuantity}개를 주문합니다.
      </p>
      <p className="order-summary-sub-text">최종 결제 금액을 확인해 주세요.</p>
      <p className="total-price-title">총 결제 금액</p>
      <p className="total-price">{totalPrice.toLocaleString("ko-KR")}원</p>
    </OrderCheckSectionContainer>
  );
}

const OrderCheckSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  p {
    margin: 0;
  }

  .title,
  .total-price {
    font-weight: 700;
    font-size: 24px;
  }

  .order-summary-sub-text {
    font-weight: 500;
    font-size: 12px;
  }

  .total-price-title {
    font-weight: 700;
    font-size: 16px;
    margin: 1.5rem 0;
  }
`;
