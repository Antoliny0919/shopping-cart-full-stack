import styled from "@emotion/styled";
import ShoppingCartNavigation from "./components/ShoppingCartNavigation";
import ShoppingCartSection from "./components/ShoppingCartSection";

export default function ShoppingCartPage() {
  return (
    <MobileAppView>
      <ShoppingCartNavigation />
      <ShoppingCartSection />
    </MobileAppView>
  );
}

const MobileAppView = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;
