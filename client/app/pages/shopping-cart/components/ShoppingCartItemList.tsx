import styled from "@emotion/styled";
import ShoppingCartItem from "./ShoppingCartItem";
import { CartItem, handleUpdateCartItemType } from "../types";

export default function ShoppingCartItemList({
  cartItems,
  handleDeleteCartItem,
  handleUpdateCartItem,
}: {
  cartItems: CartItem[];
  handleDeleteCartItem: (itemId: string) => void;
  handleUpdateCartItem: handleUpdateCartItemType;
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
            initialQuantity={quantity}
            handleDeleteCartItem={handleDeleteCartItem}
            handleUpdateCartItem={handleUpdateCartItem}
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
