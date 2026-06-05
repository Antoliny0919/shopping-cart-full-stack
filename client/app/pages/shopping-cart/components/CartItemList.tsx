import styled from "@emotion/styled";
import ShoppingCartItem from "./ShoppingCartItem";
import { CartItem } from "../types";

interface Props {
  cartItems: CartItem[];
  updateItem: (itemId: string, body: { quantity: number }) => void;
  removeItem: (itemId: string) => void;
  onChangeSelected: (checked: boolean, id: string) => void;
  selectedItemId: string[] | null;
}

export default function CartItemList({
  cartItems,
  updateItem,
  removeItem,
  onChangeSelected,
  selectedItemId,
}: Props) {
  return (
    <ItemListLayout>
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
    </ItemListLayout>
  );
}

const ItemListLayout = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  width: 100%;
`;
