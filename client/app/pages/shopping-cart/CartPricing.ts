import { CartItem } from "./types";
import { PricingStrategy } from "./CartAggregate";

const FREE_DELIVERY_THRESHOLD = 100_000;
const DELIVERY_FEE = 3_000;

export class CartPricing implements PricingStrategy {
  constructor(private items: CartItem[]) {}

  get total() {
    return this.items.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0,
    );
  }

  get delivery() {
    return this.total >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  }

  get grandTotal() {
    return this.total + this.delivery;
  }
}
