import { useState } from "react";

const CART_ITEM_QUANTITY_RULE = {
  MAX: 99,
  MIN: 1,
  STEP: 1,
};

function useCartItemQuantity(
  initialQuantity: number,
  itemId: string,
  updateItem: (itemId: string, body: { quantity: number }) => void,
) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const canIncrease = quantity < CART_ITEM_QUANTITY_RULE.MAX;
  const canDecrease = quantity > CART_ITEM_QUANTITY_RULE.MIN;

  function increase() {
    if (!canIncrease) return;
    const newQuantity = quantity + CART_ITEM_QUANTITY_RULE.STEP;
    updateItem(itemId, { quantity: newQuantity });
    setQuantity((prev) => prev + CART_ITEM_QUANTITY_RULE.STEP);
  }

  function decrease() {
    if (!canDecrease) return;
    const newQuantity = quantity - CART_ITEM_QUANTITY_RULE.STEP;
    updateItem(itemId, { quantity: newQuantity });
    setQuantity((prev) => prev - CART_ITEM_QUANTITY_RULE.STEP);
  }

  return { quantity, increase, decrease, canIncrease, canDecrease };
}

export default useCartItemQuantity;
