import styled from "@emotion/styled";
import ShoppingCartNavigation from "./components/ShoppingCartNavigation";
import CartSection from "./components/CartSection";

export default function ShoppingCartPage() {
  return (
    <ShoppingCartPageContainer>
      <ShoppingCartNavigation />
      <CartSection />
    </ShoppingCartPageContainer>
  );
}

const ShoppingCartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;
