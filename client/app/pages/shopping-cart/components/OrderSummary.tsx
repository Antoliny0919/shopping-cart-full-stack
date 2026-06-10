import styled from "@emotion/styled";
import { formatToKoreanPrice } from "../../../commons/utils";
import { PriceSummary } from "../domain/CartPricing";

export default function OrderSummary({
  orderSummary,
}: {
  orderSummary: PriceSummary;
}) {
  return (
    <OrderSummaryContainer>
      <ShoppingCartOrderSummaryList>
        <div className="receipt-item">
          <dt>주문 금액</dt>
          <dd>{formatToKoreanPrice(orderSummary.price)}</dd>
        </div>
        <div className="receipt-item">
          <dt>배송비</dt>
          <dd>{formatToKoreanPrice(orderSummary.delivery)}</dd>
        </div>
      </ShoppingCartOrderSummaryList>
      <ShoppingCartOrderSummaryResult>
        <div className="receipt-item">
          <dt>총 결제 금액</dt>
          <dd>{formatToKoreanPrice(orderSummary.totalPrice)}</dd>
        </div>
      </ShoppingCartOrderSummaryResult>
    </OrderSummaryContainer>
  );
}

const OrderSummaryContainer = styled.div`
  width: 100%;
`;

const ShoppingCartOrderSummaryList = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-top: 1px solid #0000001a;
  padding: 1.5rem 0;
  margin: 0;
  .receipt-item {
    display: flex;
    justify-content: space-between;

    dt {
      font-weight: 700;
      font-style: Bold;
      font-size: 16px;
    }
    dd {
      font-weight: 700;
      font-style: Bold;
      font-size: 24px;
    }
  }
`;

const ShoppingCartOrderSummaryResult = styled(ShoppingCartOrderSummaryList)``;
