import styled from "@emotion/styled";
import ShoppingCartItem from "./ShoppingCartItem";

export default function ShoppingCartItemList() {
  return (
    <ShoppingCartItemListContainer>
      <ShoppingCartItem name={"상품이름A"} price={35000} quantity={2} />
      <ShoppingCartItem name={"상품이름B"} price={25000} quantity={2} />
    </ShoppingCartItemListContainer>
  );
}

const ShoppingCartItemListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  width: 100%;
`;
