import styled from "@emotion/styled";
import ShoppingCartNavigation from "./components/ShoppingCartNavigation";

export default function ShoppingCartPage() {
  return (
    <MobileAppView>
      <ShoppingCartNavigation />
    </MobileAppView>
  );
}

const MobileAppView = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;
