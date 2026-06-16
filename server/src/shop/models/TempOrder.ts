import { ProductType } from "./Product.js";

type OrderItem = {
  product_id: string;
  quantity: number;
  product: Omit<ProductType, "id">;
};

class TempOrder {
  private readonly id: string;

  constructor(private readonly items: OrderItem[]) {
    this.id = crypto.randomUUID();
    this.items = items;
  }

  private calculateOrderPrice() {
    return this.items.reduce(
      (price, item) => price + item.quantity * item.product.price,
      0,
    );
  }

  public priceSummary() {
    return {
      order_price: this.calculateOrderPrice(),
    };
  }
}

export default TempOrder;
