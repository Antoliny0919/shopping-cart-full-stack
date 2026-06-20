import { useLocation } from "react-router";
import { useState } from "react";
import styled from "@emotion/styled";
import { FixedButton } from "../../../commons/styles/Button";
import OrderItemList from "./OrderItemList";
import Checkbox from "../../../commons/components/Checkbox";
import OrderSummary from "./OrderSummary";
import Info from "../../../commons/images/info.svg?react";
import CouponSelectModal from "./CouponSelectModal";

export default function Section() {
  const { totalItems, totalQuantity, totalPrice } = useLocation().state;
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);
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

  function onClose() {
    setIsCouponModalOpen(false);
  }

  return (
    <SectionLayout>
      <Title>주문 확인</Title>
      <SubText>
        총 {totalItems}종류의 상품 {totalQuantity}개를 주문합니다.
      </SubText>
      <SubText>최종 결제 금액을 확인해 주세요.</SubText>
      <OrderItemList items={items}></OrderItemList>
      <CouponApplyButton onClick={() => setIsCouponModalOpen(true)}>
        쿠폰 적용
      </CouponApplyButton>
      <CouponSelectModal isOpen={isCouponModalOpen} onClose={onClose} />
      <DeliveryOption>
        <p>배송 정보</p>
        <Checkbox
          labelText={"제주도 및 도서 산간 지역"}
          checked={false}
          onChange={() => {}}
        ></Checkbox>
      </DeliveryOption>
      <SubText className="icon-text">
        <Info aria-label="정보" />총 주문 금액이 100,000원 이상일 경우 무료
        배송됩니다.
      </SubText>
      <OrderSummary
        price={70000}
        couponDiscount={-6000}
        deliveryFee={6000}
        totalPrice={70000}
      ></OrderSummary>
      <FixedButton type="button" disabled={true}>
        결제하기
      </FixedButton>
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

  .icon-text {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 8px;
  }
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
  color: #333333bf;
  border: solid #333333bf 1px;
  border-radius: 5px;
  width: 100%;
  max-width: 768px;
`;

const DeliveryOption = styled.div`
  padding: 2rem 0;
  p {
    font-weight: 700;
    font-size: 16px;
  }
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
