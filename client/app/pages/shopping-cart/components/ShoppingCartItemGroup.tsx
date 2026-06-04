import styled from "@emotion/styled";
import ItemCheckbox from "./ItemCheckbox";
import ShoppingCartItemList from "./ShoppingCartItemList";
import { CartItemsProps } from "../types";

export default function ShoppingCartItemGroup({
  cartItems,
  updateItem,
  removeItem,
  onChangeSelected,
}: CartItemsProps) {
  return (
    <ShoppingCartItemGroupContainer>
      <ItemCheckbox
        itemId={"null"}
        labelText={"전체선택"}
        onChangeSelected={onChangeSelected}
      />
      <ShoppingCartItemList
        cartItems={cartItems}
        updateItem={updateItem}
        removeItem={removeItem}
        onChangeSelected={onChangeSelected}
      />
    </ShoppingCartItemGroupContainer>
  );
}

const ShoppingCartItemGroupContainer = styled.div``;
