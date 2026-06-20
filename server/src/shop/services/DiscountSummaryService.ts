import {
  CouponRepository,
  TempOrderRepository,
} from "../repositories/InMemoryRepositories.js";

export class DiscountSummaryService {
  constructor(
    private readonly tempOrderRepository: TempOrderRepository,
    private readonly couponRepository: CouponRepository,
  ) {}

  calculate(orderId: string, couponIds: string[]) {
    const tempOrder = this.tempOrderRepository.findById(orderId);
    const coupons = couponIds.map((id) => this.couponRepository.findById(id));
    const newOrder = tempOrder?.withCoupons(coupons as any);
    return { discount_price: newOrder?.totalDiscountPrice() };
  }
}
