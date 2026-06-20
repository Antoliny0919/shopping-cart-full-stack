import { combinations } from "../../utils.js";
import TempOrder from "../models/TempOrder.js";
import { Coupon } from "../models/Coupon.js";
import { COUPON_SELECT_LIMIT } from "../constants.js";

const CouponService = {
  calculateDiscount(tempOrder: TempOrder, coupons: Coupon[]): number {
    return tempOrder.calculateDiscount(coupons);
  },

  calculateBestCouponCombination(tempOrder: TempOrder, coupons: Coupon[]) {
    const couponCombinations = combinations(coupons, COUPON_SELECT_LIMIT);

    let bestDiscount = 0;
    let bestCombination: Coupon[] = [];

    for (const combination of couponCombinations) {
      const discount = this.calculateDiscount(tempOrder, combination);
      if (discount > bestDiscount) {
        bestDiscount = discount;
        bestCombination = combination;
      }
    }

    return bestCombination;
  },
};

export default CouponService;
