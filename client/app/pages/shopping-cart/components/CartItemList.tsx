import styled from "@emotion/styled";
import CartItem from "./CartItem";
import { CartItem as CartItemType } from "../types";

interface Props {
  cartItems: CartItemType[];
  onUpdateQuantity: (
    itemId: string,
    body: { quantity: number },
  ) => void | Promise<void>;
  onDeleteItem: (itemId: string) => void;
  onChangeSelected: (checked: boolean, id: string) => void;
  selectedItemId: string[] | null;
}

export default function CartItemList({
  cartItems,
  onUpdateQuantity,
  onDeleteItem,
  onChangeSelected,
  selectedItemId,
}: Props) {
  return (
    <ItemListLayout>
      {cartItems.map(({ product_id, quantity, product }) => {
        return (
          <CartItem
            key={product_id}
            itemId={product_id}
            checked={selectedItemId?.includes(product_id) ?? false}
            product={product}
            quantity={quantity}
            onUpdateQuantity={onUpdateQuantity}
            onDeleteItem={onDeleteItem}
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
