import { ProductType } from "./Product.js";
import { DeliveryFee } from "./DeliveryFee.js";
import { Coupon } from "./Coupon.js";
import { calculateDiscount } from "../couponCalculator.js";

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
    id: string = crypto.randomUUID(),
  ) {
    this.id = id;
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

  private discountPriceSummary() {
    const discountPrice = calculateDiscount(
      this,
      this.selectedCoupons.filter((c) => !c.isDeliveryDiscount()),
    );
    const deliveryDiscountPrice = calculateDiscount(
      this,
      this.selectedCoupons.filter((c) => c.isDeliveryDiscount()),
    );
    return { discountPrice, deliveryDiscountPrice };
  }

  public totalDiscountPrice() {
    const { discountPrice, deliveryDiscountPrice } =
      this.discountPriceSummary();
    return discountPrice + deliveryDiscountPrice;
  }

  private priceSummary() {
    const order_price = this.calculateOrderPrice();
    const delivery_fee = this.calculateDeliveryFee();
    const { discountPrice, deliveryDiscountPrice } =
      this.discountPriceSummary();
    const delivery_price = delivery_fee - deliveryDiscountPrice;
    return {
      order_price,
      discount_price: discountPrice,
      delivery_price,
      total_price: order_price - discountPrice + delivery_price,
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

  public withDelivery(deliveryFee: DeliveryFee): TempOrder {
    return new TempOrder(
      this.items,
      deliveryFee,
      this.selectedCoupons,
      this.id,
    );
  }

  public withCoupons(coupons: Coupon[]): TempOrder {
    return new TempOrder(this.items, this.deliveryFee, coupons, this.id);
  }
}

export default TempOrder;
