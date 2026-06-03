import styled from "@emotion/styled";
import OrderCheckNavigation from "./components/OrderCheckNavigation";
import OrderCheckSection from "./components/OrderCheckSection";

export default function OrderCheckPage() {
  return (
    <OrderCheckPageContainer>
      <OrderCheckNavigation />
      <OrderCheckSection />
    </OrderCheckPageContainer>
  );
}

const OrderCheckPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;
