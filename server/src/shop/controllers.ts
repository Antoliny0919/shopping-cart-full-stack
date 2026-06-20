import express from "express";
import { NotFoundError } from "../errors.js";
import TempOrder from "./models/TempOrder.js";
import {
  CartRepository,
  CouponRepository,
  ProductRepository,
  TempOrderRepository,
} from "./repositories/InMemoryRepositories.js";
import { findBestCouponCombination } from "./couponCalculator.js";
import { DELIVERY_PRICE_POLICY } from "./constants.js";
import { DeliveryFee, HardPlacePolicy } from "./models/DeliveryFee.js";
import { Coupon } from "./models/Coupon.js";
import { ProductService } from "./services/ProductService.js";
import { CartService } from "./services/CartService.js";

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
  return {
    get: (req, res, next) => {
      try {
        const tempOrder = tempOrderRepository.findById(req.params.id as string);
        if (!tempOrder) throw new NotFoundError();
        res.status(200).send(tempOrder.toObject());
      } catch (err) {
        next(err);
      }
    },
    post: (req, res, next) => {
      try {
        // TODO : Service 로 분리
        const items = req.body.map(
          (item: { product_id: string; quantity: number }) => {
            const product = productRepository.findById(item.product_id);
            if (!product) throw new NotFoundError();
            return {
              ...item,
              product: product,
            };
          },
        );
        // TODO: Service 로 분리 + 캡슐화 필요
        const coupons = couponRepository.findAll();
        const delivery = new DeliveryFee(DELIVERY_PRICE_POLICY.default, [
          new HardPlacePolicy(DELIVERY_PRICE_POLICY.hardPlace),
        ]);
        const incompleteOrder = new TempOrder(items, delivery, []);
        const bestCouponCombination = findBestCouponCombination(
          incompleteOrder,
          coupons,
        );
        const tempOrder = new TempOrder(items, delivery, bestCouponCombination);
        const id = tempOrder.getId();
        tempOrderRepository.save(id, tempOrder);
        res.status(201).send({ order_id: id });
      } catch (err) {
        next(err);
      }
    },
    patch: (req, res, next) => {
      try {
        // TODO : 서비스 분리 -> 검증
        const tempOrder = tempOrderRepository.findById(req.params.id as string);
        if (!tempOrder) throw new NotFoundError();
        const { hard_delivery_place, selected_coupons } = req.body;

        let updatedOrder = tempOrder;

        if (hard_delivery_place !== undefined) {
          const deliveryPolicies = hard_delivery_place
            ? [new HardPlacePolicy(DELIVERY_PRICE_POLICY.hardPlace)]
            : [];
          const newDelivery = new DeliveryFee(
            DELIVERY_PRICE_POLICY.default,
            deliveryPolicies,
          );
          updatedOrder = updatedOrder.withDelivery(newDelivery);
        }

        if (selected_coupons !== undefined) {
          const coupons = (selected_coupons as string[]).map((id) => {
            const coupon = couponRepository.findById(id);
            if (!coupon) throw new NotFoundError();
            return coupon;
          });
          updatedOrder = updatedOrder.withCoupons(coupons);
        }

        tempOrderRepository.save(updatedOrder.getId(), updatedOrder);
        res.status(200).send(updatedOrder.toObject());
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
