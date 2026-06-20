import { useLocation } from "react-router";
import styled from "@emotion/styled";
import { Button } from "../../../commons/styles/Button";
import OrderItemList from "./OrderItemList";

export default function Section() {
  const { totalItems, totalQuantity, totalPrice } = useLocation().state;
  const items = [
    {
      product_id: "123",
      quantity: 2,
      product: {
        name: "상품이름A",
        price: 35000,
        thumbnail: "/chicken.png",
      },
    },
    {
      product_id: "456",
      quantity: 5,
      product: {
        name: "상품이름B",
        price: 50000,
        thumbnail: "/pizza.jpg",
      },
    },
  ];
  return (
    <SectionLayout>
      <Title>주문 확인</Title>
      <SubText>
        총 {totalItems}종류의 상품 {totalQuantity}개를 주문합니다.
      </SubText>
      <SubText>최종 결제 금액을 확인해 주세요.</SubText>
      <OrderItemList items={items}></OrderItemList>
      <CouponApplyButton>쿠폰 적용</CouponApplyButton>
      <Button type="button" disabled={true}>
        결제하기
      </Button>
    </SectionLayout>
  );
}

const SectionLayout = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.5rem;
  margin-bottom: 4rem;
  overflow: scroll;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
`;

const SubText = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 12px;
  margin: 2px 0;
`;

const CouponApplyButton = styled.button`
  background-color: transparent;
  font-weight: 700;
  padding: 1rem 0;
  font-size: 16px;
  text-align: center;
  margin: 8px 0;
  color: #333333bf;
  border: solid #333333bf 1px;
  border-radius: 5px;
  width: 100%;
  max-width: 768px;
`;

// const TotalPriceLabel = styled.p`
//   margin: 1.5rem 0;
//   font-weight: 700;
//   font-size: 16px;
// `;

// const TotalPrice = styled.p`
//   margin: 0;
//   font-weight: 700;
//   font-size: 24px;
// `;
