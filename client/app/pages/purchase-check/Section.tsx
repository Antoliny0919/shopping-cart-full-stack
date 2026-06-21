import styled from "@emotion/styled";

export default function Section() {
  return (
    <SectionLayout>
      <Title>결제 확인</Title>
      <SubText>총 1종류의 상품 2개를 주문했습니다.</SubText>
      <SubText>최종 결제 금액을 확인해 주세요.</SubText>

      <MiddleTitle>총 결제 금액</MiddleTitle>
      <TotalPrice>70,000원</TotalPrice>
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
  font-weight: 500;
  font-size: 12px;
  margin: 2px 0;
`;

const MiddleTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
`;

const TotalPrice = styled.p`
  font-weight: 700;
  font-size: 24px;
  margin: 4px 0;
`;
