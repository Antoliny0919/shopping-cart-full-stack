import { CART_ITEM_QUANTITY_RULE } from "../constants";

function useCartItemQuantity(
  quantity: number,
  itemId: string,
  updateItem: (itemId: string, body: { quantity: number }) => void,
) {
  const canIncrease = quantity < CART_ITEM_QUANTITY_RULE.MAX;
  const canDecrease = quantity > CART_ITEM_QUANTITY_RULE.MIN;

  function increase() {
    if (!canIncrease) return;
    updateItem(itemId, {
      quantity: quantity + CART_ITEM_QUANTITY_RULE.STEP,
    });
  }

  function decrease() {
    if (!canDecrease) return;
    updateItem(itemId, {
      quantity: quantity - CART_ITEM_QUANTITY_RULE.STEP,
    });
  }

  return { increase, decrease, canIncrease, canDecrease };
}

export default useCartItemQuantity;
