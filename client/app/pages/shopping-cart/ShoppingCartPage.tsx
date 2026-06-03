import styled from "@emotion/styled";
import ShoppingCartNavigation from "./components/ShoppingCartNavigation";
import ShoppingCartSection from "./components/ShoppingCartSection";

export default function ShoppingCartPage() {
  return (
    <ShoppingCartPageContainer>
      <ShoppingCartNavigation />
      <ShoppingCartSection />
    </ShoppingCartPageContainer>
  );
}

const ShoppingCartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;
