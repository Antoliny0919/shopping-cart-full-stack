import styled from "@emotion/styled";
import ShoppingCartItem from "./ShoppingCartItem";
import { CartItemsProps } from "../types";

export default function ShoppingCartItemList({
  cartItems,
  updateItem,
  removeItem,
  onChangeSelected,
}: CartItemsProps) {
  return (
    <ShoppingCartItemListContainer>
      {cartItems.map(({ product_id, quantity, product }) => {
        return (
          <ShoppingCartItem
            key={product_id}
            itemId={product_id}
            name={product.name}
            price={product.price}
            initialQuantity={quantity}
            updateItem={updateItem}
            removeItem={removeItem}
            onChangeSelected={onChangeSelected}
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
