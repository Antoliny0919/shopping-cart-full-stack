import {
  validateIsNotEmpty,
  validateLengthRange,
  validateMinNumber,
  validateNumberRange,
  validateMaxArrayLength,
} from "../validators.js";
import { ValidatorMap } from "../types.js";
import { CART_ITEM_QUANTITY, COUPON_SELECT_LIMIT } from "./constants.js";

export const ProductFieldValidators: ValidatorMap = {
  name: [validateIsNotEmpty("상품명"), validateLengthRange("상품명", 0, 100)],
  price: [validateIsNotEmpty("가격"), validateMinNumber("가격", 0)],
};

export const CartFieldValidators: ValidatorMap = {
  quantity: [
    validateNumberRange("수량", CART_ITEM_QUANTITY.min, CART_ITEM_QUANTITY.max),
  ],
};

export const TempOrderFieldValidators: ValidatorMap = {
  selected_coupons: [validateMaxArrayLength("쿠폰", COUPON_SELECT_LIMIT)],
};

export const DiscountSummaryFieldValidators: ValidatorMap = {
  coupon_id: [validateMaxArrayLength("쿠폰", COUPON_SELECT_LIMIT)],
};
