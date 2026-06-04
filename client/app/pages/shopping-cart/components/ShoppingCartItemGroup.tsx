import styled from "@emotion/styled";
import Checkbox from "../../../commons/components/Checkbox";
import ShoppingCartItemList from "./ShoppingCartItemList";
import { CartItem, handleUpdateCartItemType } from "../types";

export default function ShoppingCartItemGroup({
  cartItems,
  handleDeleteCartItem,
  handleUpdateCartItem,
}: {
  cartItems: CartItem[];
  handleDeleteCartItem: (itemId: string) => void;
  handleUpdateCartItem: handleUpdateCartItemType;
}) {
  return (
    <ShoppingCartItemGroupContainer>
      <Checkbox labelText={"전체선택"} />
      <ShoppingCartItemList
        cartItems={cartItems}
        handleDeleteCartItem={handleDeleteCartItem}
        handleUpdateCartItem={handleUpdateCartItem}
      />
    </ShoppingCartItemGroupContainer>
  );
}

const ShoppingCartItemGroupContainer = styled.div``;
