import styled from "@emotion/styled";
import AllItemCheckbox from "./AllItemCheckbox";
import ShoppingCartItemList from "./ShoppingCartItemList";
import CartManager from "../CartManager";
import { CartItemsProps, OnChangeAllSelected } from "../types";

export default function ShoppingCartItemGroup({
  cartItems,
  updateItem,
  removeItem,
  onChangeSelected,
  onChangeAllSelected,
  selectedItemId,
}: CartItemsProps & { onChangeAllSelected: OnChangeAllSelected }) {
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
