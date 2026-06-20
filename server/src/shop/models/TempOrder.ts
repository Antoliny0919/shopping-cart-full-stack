import { ProductType } from "./Product.js";
import { DeliveryFee } from "./DeliveryFee.js";
import { Coupon, CouponPhase } from "./Coupon.js";

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
    this.selectedCoupons = selectedCoupons;
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

  private calculateDiscount(coupons: Coupon[]): number {
    const sorted = [...coupons].sort((a, b) => a.phase - b.phase);
    const orderPrice = this.calculateOrderPrice();
    let fixedDiscount = 0;
    for (const coupon of sorted) {
      if (coupon.phase === CouponPhase.FIXED)
        fixedDiscount += coupon.getDiscountPrice(this);
    }
    let rateDiscount = 0;
    for (const coupon of sorted) {
      if (coupon.phase === CouponPhase.RATE)
        rateDiscount += coupon.getDiscountPrice(
          this,
          orderPrice - fixedDiscount,
        );
    }
    return fixedDiscount + rateDiscount;
  }

  private priceSummary() {
    const order_price = this.calculateOrderPrice();
    const delivery_fee = this.calculateDeliveryFee();
    const discount_price = this.calculateDiscount(
      this.selectedCoupons.filter((c) => !c.isDeliveryDiscount()),
    );
    const delivery_discount = this.calculateDiscount(
      this.selectedCoupons.filter((c) => c.isDeliveryDiscount()),
    );
    const delivery_price = delivery_fee - delivery_discount;
    return {
      order_price,
      discount_price,
      delivery_price,
      total_price: order_price - discount_price + delivery_price,
    };
  }

  public toObject() {
    return {
      id: this.id,
      hard_delivery_place: this.deliveryFee.isHardPlace(),
      selected_coupons: this.selectedCoupons.map((c) => c.getId()),
      selected_items: this.items,
      price_summary: this.priceSummary(),
    };
  }

  public getId() {
    return this.id;
  }
}

export default TempOrder;
