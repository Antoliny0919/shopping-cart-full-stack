import { Request, Response, NextFunction } from "express";
import { ValidatorMap } from "./types.js";
import { runValidate } from "./utils.js";
import { BadRequestError } from "./errors.js";

export function createValidateBodyMiddleware(validatorMap: ValidatorMap) {
  return function middleware(req: Request, res: Response, next: NextFunction) {
    const errors = runValidate(validatorMap, req.body);

    const hasErrors = Object.keys(errors).length > 0;
    if (hasErrors) {
      throw new BadRequestError({ errors: errors });
    }
    next();
  };
}
