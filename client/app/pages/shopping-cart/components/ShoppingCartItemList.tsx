import styled from "@emotion/styled";
import ShoppingCartItem from "./ShoppingCartItem";
import { CartItem } from "../types";

export default function ShoppingCartItemList({
  cartItems,
  handleDeleteCartItem,
}: {
  cartItems: CartItem[];
  handleDeleteCartItem: (itemId: string) => void;
}) {
  return (
    <ShoppingCartItemListContainer>
      {cartItems.map(({ product_id, quantity, product }) => {
        return (
          <ShoppingCartItem
            key={product_id}
            itemId={product_id}
            name={product.name}
            price={product.price}
            quantity={quantity}
            handleDeleteCartItem={handleDeleteCartItem}
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
