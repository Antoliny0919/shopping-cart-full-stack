import { DeliveryFeePolicy } from "../models/DeliveryFee.js";
import { DeliveryFee } from "../models/DeliveryFee.js";

describe("DeliveryFee Tests", () => {
  class InternationalPolicy implements DeliveryFeePolicy {
    private readonly extraFee: number;

    constructor(extraFee: number) {
      this.extraFee = extraFee;
    }

    getExtraFee() {
      return this.extraFee;
    }

    isHardPlace() {
      return false;
    }
  }

  test("배송비는 정책에 따른 비용을 합하여 반환한다.", () => {
    const deliveryFee = new DeliveryFee(2000, [new InternationalPolicy(10000)]);
    expect(deliveryFee.getDeliveryFee()).toBe(12000);
  });
});
