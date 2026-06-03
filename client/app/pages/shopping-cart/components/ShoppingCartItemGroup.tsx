import styled from "@emotion/styled";
import Checkbox from "../../../commons/components/Checkbox";
import ShoppingCartItemList from "./ShoppingCartItemList";
import { CartItem } from "../types";

export default function ShoppingCartItemGroup({
  cartItems,
}: {
  cartItems: CartItem[];
}) {
  return (
    <ShoppingCartItemGroupContainer>
      <Checkbox labelText={"전체선택"} />
      <ShoppingCartItemList cartItems={cartItems} />
    </ShoppingCartItemGroupContainer>
  );
}

const ShoppingCartItemGroupContainer = styled.div``;
