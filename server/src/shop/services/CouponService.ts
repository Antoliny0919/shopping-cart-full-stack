import { Coupon } from "../models/Coupon.js";
import { CouponRepository } from "../repositories/InMemoryRepositories.js";

export class CouponService {
  constructor(private readonly couponRepository: CouponRepository) {}

  getAll() {
    return this.couponRepository.findAll().map((c: Coupon) => c.toObject());
  }
}
