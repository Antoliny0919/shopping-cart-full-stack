import styled from "@emotion/styled";
import ShoppingCartNavigation from "./components/ShoppingCartNavigation";
import Section from "../order-check/Section";

export default function ShoppingCartPage() {
  return (
    <ShoppingCartPageContainer>
      <ShoppingCartNavigation />
      <Section />
    </ShoppingCartPageContainer>
  );
}

const ShoppingCartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;
