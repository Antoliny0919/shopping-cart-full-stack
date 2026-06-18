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

  public calculateOrderPrice() {
    return this.items.reduce(
      (price, item) => price + item.quantity * item.product.price,
      0,
    );
  }

  public findMostExpensiveItemPrice(minQuantity: number): number | undefined {
    const items = this.items.filter((item) => item.quantity >= minQuantity);
    return items.sort((a, b) => b.product.price - a.product.price)[0]?.product
      .price;
  }

  public priceSummary() {
    return {
      order_price: this.calculateOrderPrice(),
    };
  }

  public getId() {
    return this.id;
  }
}

export default TempOrder;
