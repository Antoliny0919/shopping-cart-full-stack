import styled from "@emotion/styled";
import AllItemCheckbox from "./AllItemCheckbox";
import ShoppingCartItemList from "./ShoppingCartItemList";
import { CartItemsProps, OnChangeAllSelected } from "../types";

export default function ShoppingCartItemGroup({
  cartItems,
  updateItem,
  removeItem,
  onChangeSelected,
  onChangeAllSelected,
  selectedItemId,
}: CartItemsProps & { onChangeAllSelected: OnChangeAllSelected }) {
  const allItemsId = cartItems.map((item) => item.product_id);
  const isAllChecked =
    allItemsId.length > 0 && allItemsId.every((id) => selectedItemId?.includes(id));

  return (
    <ShoppingCartItemGroupContainer>
      <AllItemCheckbox
        labelText={"전체선택"}
        checked={isAllChecked}
        onChangeAllSelected={onChangeAllSelected}
        allItemsId={allItemsId}
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
