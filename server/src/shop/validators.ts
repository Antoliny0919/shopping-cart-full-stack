import {
  validateIsNotEmpty,
  validateLengthRange,
  validateMinNumber,
  validateNumberRange,
} from "../validators.js";
import { ValidatorMap } from "../types.js";

export const ProductFieldValidators: ValidatorMap = {
  name: [validateIsNotEmpty("상품명"), validateLengthRange("상품명", 0, 100)],
  price: [validateIsNotEmpty("가격"), validateMinNumber("가격", 0)],
};

export const CartFieldValidators: ValidatorMap = {
  quantity: [validateNumberRange("수량", 1, 99)],
};
