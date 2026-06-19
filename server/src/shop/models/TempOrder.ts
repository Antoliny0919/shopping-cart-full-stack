import { ProductType } from "./Product.js";
import { DeliveryFee } from "./DeliveryFee.js";
import { Coupon } from "./Coupon.js";

type OrderItem = {
  product_id: string;
  quantity: number;
  product: Omit<ProductType, "id">;
};

class TempOrder {
  private readonly id: string;
  private readonly deliveryFee: DeliveryFee;
  private readonly selectedCoupons: Coupon[];

  constructor(
    private readonly items: OrderItem[],
    deliveryFee: DeliveryFee,
    selectedCoupons: Coupon[],
  ) {
    this.id = crypto.randomUUID();
    this.items = items;
    this.deliveryFee = deliveryFee;
    this.selectedCoupons = [];
  }

  public calculateDeliveryFee() {
    return this.deliveryFee.getDeliveryFee();
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
