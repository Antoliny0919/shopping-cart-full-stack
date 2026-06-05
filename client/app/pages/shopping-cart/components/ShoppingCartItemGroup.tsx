import styled from "@emotion/styled";
import AllItemCheckbox from "./AllItemCheckbox";
import ShoppingCartItemList from "./ShoppingCartItemList";
import CartManager from "../CartManager";
import { CartItem } from "../types";

interface Props {
  cartItems: CartItem[];
  updateItem: (itemId: string, body: { quantity: number }) => void;
  removeItem: (itemId: string) => void;
  onChangeSelected: (checked: boolean, id: string) => void;
  onChangeAllSelected: (allCartItemsId: string[]) => void;
  selectedItemId: string[] | null;
}

export default function ShoppingCartItemGroup({
  cartItems,
  updateItem,
  removeItem,
  onChangeSelected,
  onChangeAllSelected,
  selectedItemId,
}: Props) {
  const cartManager = new CartManager(selectedItemId, cartItems);

  return (
    <ShoppingCartItemGroupContainer>
      <AllItemCheckbox
        labelText={"전체선택"}
        checked={cartManager.allItemsSelected}
        onChangeAllSelected={onChangeAllSelected}
        allItemsId={cartManager.allItemsId}
      />
      <ShoppingCartItemList
        cartItems={cartItems}
        updateItem={updateItem}
        removeItem={removeItem}
        onChangeSelected={onChangeSelected}
        selectedItemId={selectedItemId}
      />
    </ShoppingCartItemGroupContainer>
  );
}

const ShoppingCartItemGroupContainer = styled.div``;
