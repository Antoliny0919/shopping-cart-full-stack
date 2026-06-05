import styled from "@emotion/styled";
import ShoppingCartItem from "./ShoppingCartItem";
import { CartItemsProps } from "../types";

export default function ShoppingCartItemList({
  cartItems,
  updateItem,
  removeItem,
  onChangeSelected,
  selectedItemId,
}: CartItemsProps) {
  return (
    <ShoppingCartItemListContainer>
      {cartItems.map(({ product_id, quantity, product }) => {
        return (
          <ShoppingCartItem
            key={product_id}
            itemId={product_id}
            checked={selectedItemId?.includes(product_id) ?? false}
            name={product.name}
            price={product.price}
            thumbnail={product.thumbnail}
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
