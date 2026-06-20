import { NotFoundError } from "../../errors.js";
import TempOrder from "../models/TempOrder.js";
import { DeliveryFee, HardPlacePolicy } from "../models/DeliveryFee.js";
import { findBestCouponCombination } from "../couponCalculator.js";
import { DELIVERY_PRICE_POLICY } from "../constants.js";
import {
  CouponRepository,
  ProductRepository,
  TempOrderRepository,
} from "../repositories/InMemoryRepositories.js";

export class TempOrderService {
  constructor(
    private readonly tempOrderRepository: TempOrderRepository,
    private readonly productRepository: ProductRepository,
    private readonly couponRepository: CouponRepository,
  ) {}

  getById(id: string) {
    const tempOrder = this.tempOrderRepository.findById(id);
    if (!tempOrder) throw new NotFoundError();
    return tempOrder.toObject();
  }

  create(rawItems: { product_id: string; quantity: number }[]) {
    const items = rawItems.map((item) => {
      const product = this.productRepository.findById(item.product_id);
      if (!product) throw new NotFoundError();
      return { ...item, product };
    });

    const delivery = new DeliveryFee(DELIVERY_PRICE_POLICY.default, [
      new HardPlacePolicy(DELIVERY_PRICE_POLICY.hardPlace),
    ]);
    const coupons = this.couponRepository.findAll();
    const incompleteOrder = new TempOrder(items, delivery, []);
    const bestCoupons = findBestCouponCombination(incompleteOrder, coupons);
    const tempOrder = new TempOrder(items, delivery, bestCoupons);

    const id = tempOrder.getId();
    this.tempOrderRepository.save(id, tempOrder);
    return { order_id: id };
  }

  patch(
    id: string,
    body: { hard_delivery_place?: boolean; selected_coupons?: string[] },
  ) {
    let order = this.tempOrderRepository.findById(id);
    if (!order) throw new NotFoundError();

    const { hard_delivery_place, selected_coupons } = body;

    if (hard_delivery_place !== undefined) {
      const policies = hard_delivery_place
        ? [new HardPlacePolicy(DELIVERY_PRICE_POLICY.hardPlace)]
        : [];
      order = order.withDelivery(
        new DeliveryFee(DELIVERY_PRICE_POLICY.default, policies),
      );
    }

    if (selected_coupons !== undefined) {
      const coupons = selected_coupons.map((couponId) => {
        const coupon = this.couponRepository.findById(couponId);
        if (!coupon) throw new NotFoundError();
        return coupon;
      });
      order = order.withCoupons(coupons);
    }

    this.tempOrderRepository.save(order.getId(), order);
    return order.toObject();
  }
}
