import { Coupon } from "../models/Coupon.js";
import {
  CouponRepository,
  TempOrderRepository,
} from "../repositories/InMemoryRepositories.js";
import { NotFoundError } from "../../errors.js";

export class CouponService {
  constructor(
    private readonly couponRepository: CouponRepository,
    private readonly tempOrderRepository: TempOrderRepository,
  ) {}

  getByOrderId(orderId: string) {
    const tempOrder = this.tempOrderRepository.findById(orderId);
    if (!tempOrder) throw new NotFoundError();
    return this.couponRepository.findAll().map((c: Coupon) => ({
      ...c.toObject(),
      is_active: c.isAvailable(tempOrder),
    }));
  }
}
