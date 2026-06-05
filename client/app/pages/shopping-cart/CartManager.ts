import { CartItem } from "./types";

class CartManager {
  constructor(
    private selectedItemId: string[] | null,
    private cartItems: CartItem[],
  ) {
    this.selectedItemId = selectedItemId;
    this.cartItems = cartItems;
  }

  get selectedCartItems() {
    const selectedItemId = this.selectedItemId;
    if (selectedItemId) {
      return this.cartItems.filter((item) =>
        selectedItemId.includes(item.product_id),
      );
    }
    return [];
  }
}

export default CartManager;
