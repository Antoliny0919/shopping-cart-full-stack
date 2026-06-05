import styled from "@emotion/styled";
import Minus from "../../../commons/images/minus.svg?react";
import Plus from "../../../commons/images/plus.svg?react";
import { formatToKoreanPrice } from "../../../commons/utils";
import { CartItemsProps } from "../types";
import useCartItemQuantity from "../hooks/useCartItemQuantity";
import ItemCheckbox from "./ItemCheckbox";

interface ShoppingCartItemProps extends Pick<
  CartItemsProps,
  "updateItem" | "removeItem" | "onChangeSelected"
> {
  itemId: string;
  name: string;
  price: number;
  thumbnail: string;
  initialQuantity: number;
  checked: boolean;
}

export default function ShoppingCartItem({
  itemId,
  name,
  price,
  thumbnail,
  initialQuantity,
  checked,
  updateItem,
  removeItem,
  onChangeSelected,
}: ShoppingCartItemProps) {
  const { quantity, increase, decrease, canIncrease, canDecrease } =
    useCartItemQuantity(initialQuantity, itemId, updateItem);

  return (
    <ShoppingCartItemContainer>
      <div className="wrapper">
        <ShoppingCartItemHeader>
          <ItemCheckbox
            itemId={itemId}
            checked={checked}
            onChangeSelected={onChangeSelected}
          />
          <button className="item-delete" onClick={() => removeItem(itemId)}>
            삭제
          </button>
        </ShoppingCartItemHeader>
        <ShoppingCartItemBody>
          <img
            className="thumbnail"
            src={`${import.meta.env.VITE_API_BASE_URL}${thumbnail}`}
            alt="상품 이미지"
          />
          <ShoppingCartItemInfo>
            <p className="name">{name}</p>
            <p className="price">{formatToKoreanPrice(price)}</p>
            <ShoppingCartItemQuantity>
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
