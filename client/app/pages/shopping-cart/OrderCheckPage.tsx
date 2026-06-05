import styled from "@emotion/styled";
import Navigation from "../order-check/Navigation";
import Section from "../order-check/Section";

export default function OrderCheckPage() {
  return (
    <OrderCheckPageContainer>
      <Navigation />
      <Section />
    </OrderCheckPageContainer>
  );
}

const OrderCheckPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;
