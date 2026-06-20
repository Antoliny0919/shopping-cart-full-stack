import express from "express";
import {
  CartRepository,
  CouponRepository,
  ProductRepository,
  TempOrderRepository,
} from "./repositories/InMemoryRepositories.js";
import { Coupon } from "./models/Coupon.js";
import { ProductService } from "./services/ProductService.js";
import { CartService } from "./services/CartService.js";
import { TempOrderService } from "./services/TempOrderService.js";

export interface ProductController {
  get: express.RequestHandler;
  add: express.RequestHandler;
  delete: express.RequestHandler;
}

export interface CartController {
  get: express.RequestHandler;
  update: express.RequestHandler<{ id: string }>;
  delete: express.RequestHandler<{ id: string }>;
}

export interface tempOrderController {
  get: express.RequestHandler;
  post: express.RequestHandler;
  patch: express.RequestHandler;
}

export interface CouponController {
  get: express.RequestHandler;
}

export interface DiscountSummaryController {
  post: express.RequestHandler;
}

export function createProductController({
  productRepository,
  cartRepository,
}: {
  productRepository: ProductRepository;
  cartRepository: CartRepository;
}): ProductController {
  const service = new ProductService(productRepository, cartRepository);
  return {
    get: (_req, res, next) => {
      try {
        res.send(service.getAll());
      } catch (err) {
        next(err);
      }
    },
    add: (req, res, next) => {
      try {
        res.status(201).send(service.add(req.body));
      } catch (err) {
        next(err);
      }
    },
    delete: (req, res, next) => {
      try {
        service.delete(req.params.id as string);
        res.status(204).send();
      } catch (err) {
        next(err);
      }
    },
  };
}

export function createCartController({
  cartRepository,
  productRepository,
}: {
  cartRepository: CartRepository;
  productRepository: ProductRepository;
}): CartController {
  const service = new CartService(cartRepository, productRepository);
  return {
    get: (_req, res, next) => {
      try {
        res.send(service.getAll());
      } catch (err) {
        next(err);
      }
    },
    update: (req, res, next) => {
      try {
        res.status(200).send(service.update(req.params.id, req.body.quantity));
      } catch (err) {
        next(err);
      }
    },
    delete: (req, res, next) => {
      try {
        service.delete(req.params.id);
        res.status(204).send();
      } catch (err) {
        next(err);
      }
    },
  };
}

export function createTempOrderController({
  tempOrderRepository,
  productRepository,
  couponRepository,
}: {
  tempOrderRepository: TempOrderRepository;
  productRepository: ProductRepository;
  couponRepository: CouponRepository;
}): tempOrderController {
  const service = new TempOrderService(
    tempOrderRepository,
    productRepository,
    couponRepository,
  );
  return {
    get: (req, res, next) => {
      try {
        res.status(200).send(service.getById(req.params.id as string));
      } catch (err) {
        next(err);
      }
    },
    post: (req, res, next) => {
      try {
        res.status(201).send(service.create(req.body));
      } catch (err) {
        next(err);
      }
    },
    patch: (req, res, next) => {
      try {
        res
          .status(200)
          .send(service.patch(req.params.id as string, req.body));
      } catch (err) {
        next(err);
      }
    },
  };
}

export function createCouponController({
  couponRepository,
}: {
  couponRepository: CouponRepository;
}): CouponController {
  return {
    get: (_req, res, next) => {
      try {
        res
          .status(200)
          .send(
            couponRepository
              .findAll()
              .map((coupon: Coupon) => coupon.toObject()),
          );
      } catch (err) {
        next(err);
      }
    },
  };
}

export function createDiscountSummaryController({
  tempOrderRepository,
  couponRepository,
}: {
  tempOrderRepository: TempOrderRepository;
  couponRepository: CouponRepository;
}): DiscountSummaryController {
  return {
    post: (req, res, next) => {
      try {
        const tempOrder = tempOrderRepository.findById(req.params.id as string);
        const { coupon_id } = req.body;
        const coupons = coupon_id.map((id: string) =>
          couponRepository.findById(id),
        );
        const newOrder = tempOrder?.withCoupons(coupons);
        res
          .status(200)
          .send({ discount_price: newOrder?.totalDiscountPrice() });
      } catch (err) {
        next(err);
      }
    },
  };
}
