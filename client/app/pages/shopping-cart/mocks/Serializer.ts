import { CART_ITEM_QUANTITY_RULE } from "../constants";

export const CartItemSerializer = {
  validate(quantity: number) {
    if (
      quantity < CART_ITEM_QUANTITY_RULE.MIN ||
      quantity > CART_ITEM_QUANTITY_RULE.MAX
    ) {
      throw new Error("수량은 1 이상 99 이하여야 합니다.");
    }
  },
};
