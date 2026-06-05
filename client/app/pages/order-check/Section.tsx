import { useLocation } from "react-router";
import styled from "@emotion/styled";
import { Button } from "../../commons/styles/Button";
import { formatToKoreanPrice } from "../../commons/utils";

export default function Section() {
  const { totalItems, totalQuantity, totalPrice } = useLocation().state;
  return (
    <SectionLayout>
      <Title>주문 확인</Title>
      <SubText>
        총 {totalItems}종류의 상품 {totalQuantity}개를 주문합니다.
      </SubText>
      <SubText>최종 결제 금액을 확인해 주세요.</SubText>
      <TotalPriceLabel>총 결제 금액</TotalPriceLabel>
      <TotalPrice>{formatToKoreanPrice(totalPrice)}</TotalPrice>
      <Button type="button" disabled={true}>
        결제하기
      </Button>
    </SectionLayout>
  );
}

const SectionLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
`;

const SubText = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 12px;
`;

const TotalPriceLabel = styled.p`
  margin: 1.5rem 0;
  font-weight: 700;
  font-size: 16px;
`;

const TotalPrice = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 24px;
`;
