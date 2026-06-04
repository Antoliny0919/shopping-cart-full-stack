import styled from "@emotion/styled";
import Checkbox from "../../../commons/components/Checkbox";
import ShoppingCartItemList from "./ShoppingCartItemList";
import { CartItemsProps } from "../types";

export default function ShoppingCartItemGroup({
  cartItems,
  updateItem,
  removeItem,
}: CartItemsProps) {
  return (
    <ShoppingCartItemGroupContainer>
      <Checkbox labelText={"전체선택"} />
      <ShoppingCartItemList
        cartItems={cartItems}
        updateItem={updateItem}
        removeItem={removeItem}
      />
    </ShoppingCartItemGroupContainer>
  );
}

const ShoppingCartItemGroupContainer = styled.div``;
