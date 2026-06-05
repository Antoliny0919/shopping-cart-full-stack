import { CartItem } from "../types";
import { PricingStrategy } from "./CartPricing";

class CartSummary {
  private pricing: PricingStrategy;

  constructor(
    private items: CartItem[],
    PricingClass: new (items: CartItem[]) => PricingStrategy,
  ) {
    this.pricing = new PricingClass(items);
  }

  get totalItems() {
    return this.items.length;
  }

  get totalQuantity() {
    return this.items.reduce((acc, item) => acc + item.quantity, 0);
  }

  get total() {
    return this.pricing.total;
  }

  get delivery() {
    return this.totalItems ? this.pricing.delivery : 0;
  }

  get grandTotal() {
    return this.pricing.grandTotal;
  }
}

export default CartSummary;
