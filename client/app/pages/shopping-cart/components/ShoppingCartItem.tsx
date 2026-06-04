import styled from "@emotion/styled";
import Checkbox from "../../../commons/components/Checkbox";
import NikeWhiteShoes from "../images/nike-white-shoes.png";
import Minus from "../../../commons/images/minus.svg?react";
import Plus from "../../../commons/images/plus.svg?react";

interface ShoppingCartItemProps {
  itemId: string;
  name: string;
  price: number;
  quantity: number;
  handleDeleteCartItem: (itemId: string) => void;
}

export default function ShoppingCartItem({
  itemId,
  name,
  price,
  quantity,
  handleDeleteCartItem,
}: ShoppingCartItemProps) {
  return (
    <ShoppingCartItemContainer>
      <div className="wrapper">
        <ShoppingCartItemHeader>
          <Checkbox />
          <button
            className="item-delete"
            onClick={() => handleDeleteCartItem(itemId)}
          >
            삭제
          </button>
        </ShoppingCartItemHeader>
        <ShoppingCartItemBody>
          <img className="thumbnail" src={NikeWhiteShoes} />
          <ShoppingCartItemInfo>
            <p className="name">{name}</p>
            <p className="price">{price.toLocaleString("ko-KR")}원</p>
            <ShoppingCartItemQuantity>
              <button type="button">
                <Minus />
              </button>
              <p className="quantity">{quantity}</p>
              <button type="button">
                <Plus />
              </button>
            </ShoppingCartItemQuantity>
          </ShoppingCartItemInfo>
        </ShoppingCartItemBody>
      </div>
    </ShoppingCartItemContainer>
  );
}

const ShoppingCartItemContainer = styled.li`
  list-style: none;
  display: flex;
  gap: 1rem;
  width: 100%;
  border-top: 1px solid #0000001a;

  .wrapper {
    width: 100%;
  }
`;

const ShoppingCartItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  width: 100%;

  button.item-delete {
    border: 1px solid #0000001a;
    background-color: #ffffff;
    border-radius: 4px;
    font-size: 12px;
  }
`;

const ShoppingCartItemBody = styled.div`
  display: flex;
  gap: 12px;

  img.thumbnail {
    height: 112px;
    width: 112px;
    border-radius: 8px;
  }
`;

const ShoppingCartItemInfo = styled.div`
  padding: 4px 0;
  .name {
    font-weight: 500;
    font-size: 12px;
    margin: 4px 0;
  }

  .price {
    font-weight: 700;
    font-style: Bold;
    font-size: 24px;
    margin-top: 0;
  }

  .quantity {
    font-weight: 500;
    font-size: 12px;
  }
`;

const ShoppingCartItemQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  button {
    display: flex;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 8px;
    border: 1px solid #0000001a;
    background: transparent;
    outline: none;
  }
`;
