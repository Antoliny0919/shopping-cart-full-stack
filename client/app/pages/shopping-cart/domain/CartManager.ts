import { CartItem } from "../types";

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

  get allItemsId() {
    return this.cartItems.map((item) => item.product_id);
  }

  get allItemsSelected() {
    return (
      this.allItemsId.length > 0 &&
      this.allItemsId.every((id) => this.selectedItemId?.includes(id))
    );
  }
}

export default CartManager;
