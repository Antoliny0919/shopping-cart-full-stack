import styled from "@emotion/styled";
import Checkbox from "../../../commons/components/Checkbox";

export default function ShoppingCartItemList() {
  return (
    <ShoppingCartItemListContainer>
      <Checkbox labelText={"전체선택"} />
    </ShoppingCartItemListContainer>
  );
}

const ShoppingCartItemListContainer = styled.div``;
