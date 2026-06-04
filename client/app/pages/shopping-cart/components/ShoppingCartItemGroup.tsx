import styled from "@emotion/styled";
import Checkbox from "../../../commons/components/Checkbox";
import ShoppingCartItemList from "./ShoppingCartItemList";
import { CartItem } from "../types";

export default function ShoppingCartItemGroup({
  cartItems,
  handleDeleteCartItem,
}: {
  cartItems: CartItem[];
  handleDeleteCartItem: (itemId: string) => void;
}) {
  return (
    <ShoppingCartItemGroupContainer>
      <Checkbox labelText={"전체선택"} />
      <ShoppingCartItemList
        cartItems={cartItems}
        handleDeleteCartItem={handleDeleteCartItem}
      />
    </ShoppingCartItemGroupContainer>
  );
}

const ShoppingCartItemGroupContainer = styled.div``;
