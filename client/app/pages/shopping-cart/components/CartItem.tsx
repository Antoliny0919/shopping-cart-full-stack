import styled from "@emotion/styled";
import Minus from "../../../commons/images/minus.svg?react";
import Plus from "../../../commons/images/plus.svg?react";
import { formatToKoreanPrice } from "../../../commons/utils";
import useCartItemQuantity from "../hooks/useCartItemQuantity";
import Checkbox from "../../../commons/components/Checkbox";

interface Props {
  itemId: string;
  name: string;
  price: number;
  thumbnail: string;
  initialQuantity: number;
  checked: boolean;
  updateItem: (itemId: string, body: { quantity: number }) => void;
  removeItem: (itemId: string) => void;
  onChangeSelected: (checked: boolean, id: string) => void;
}

export default function CartItem({
  itemId,
  name,
  price,
  thumbnail,
  initialQuantity,
  checked,
  updateItem,
  removeItem,
  onChangeSelected,
}: Props) {
  const { quantity, increase, decrease, canIncrease, canDecrease } =
    useCartItemQuantity(initialQuantity, itemId, updateItem);

  return (
    <CartItemLayout>
      <div className="wrapper">
        <Header>
          <Checkbox
            checked={checked}
            onChange={() => onChangeSelected(!checked, itemId)}
          />
          <button className="item-delete" onClick={() => removeItem(itemId)}>
            삭제
          </button>
        </Header>
        <Content>
          <img
            className="thumbnail"
            src={`${import.meta.env.VITE_API_BASE_URL}${thumbnail}`}
            alt="상품 이미지"
          />
          <Info>
            <p className="name">{name}</p>
            <p className="price">{formatToKoreanPrice(price)}</p>
            <Quantity>
              <button
                type="button"
                aria-label="수량 감소"
                onClick={decrease}
                disabled={!canDecrease}
              >
                <Minus />
              </button>
              <p className="quantity">{quantity}</p>
              <button
                type="button"
                aria-label="수량 증가"
                onClick={increase}
                disabled={!canIncrease}
              >
                <Plus />
              </button>
            </Quantity>
          </Info>
        </Content>
      </div>
    </CartItemLayout>
  );
}

const CartItemLayout = styled.li`
  list-style: none;
  display: flex;
  gap: 1rem;
  width: 100%;
  border-top: 1px solid #0000001a;

  .wrapper {
    width: 100%;
  }
`;

const Header = styled.div`
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

const Content = styled.div`
  display: flex;
  gap: 12px;

  img.thumbnail {
    height: 112px;
    width: 112px;
    border-radius: 8px;
  }
`;

const Info = styled.div`
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

const Quantity = styled.div`
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
