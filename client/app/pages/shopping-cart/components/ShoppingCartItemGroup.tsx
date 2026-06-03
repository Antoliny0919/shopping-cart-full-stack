import styled from "@emotion/styled";
import Checkbox from "../../../commons/components/Checkbox";
import ShoppingCartItemList from "./ShoppingCartItemList";

export default function ShoppingCartItemGroup() {
  return (
    <ShoppingCartItemGroupContainer>
      <Checkbox labelText={"전체선택"} />
      <ShoppingCartItemList />
    </ShoppingCartItemGroupContainer>
  );
}

const ShoppingCartItemGroupContainer = styled.div``;
