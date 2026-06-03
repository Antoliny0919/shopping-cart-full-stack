import styled from "@emotion/styled";
import ShoppingCartItem from "./ShoppingCartItem";
import { CartItem } from "../types";

export default function ShoppingCartItemList({
  cartItems,
}: {
  cartItems: CartItem[];
}) {
  return (
    <ShoppingCartItemListContainer>
      {cartItems.map(({ product_id, quantity, product }) => {
        return (
          <ShoppingCartItem
            key={product_id}
            name={product.name}
            price={product.price}
            quantity={quantity}
          />
        );
      })}
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
