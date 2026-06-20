import express from "express";
import { NotFoundError } from "../errors.js";
import Product from "./models/Product.js";
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
}

export function createProductController({
  productRepository,
  cartRepository,
}: {
  productRepository: ProductRepository;
  cartRepository: CartRepository;
}): ProductController {
  return {
    get: (_req, res, next) => {
      try {
        res.send(
          productRepository
            .findAll()
            .map((product: Product) => product.toObject()),
        );
      } catch (err) {
        next(err);
      }
    },
    add: (req, res, next) => {
      try {
        const product = new Product(req.body);
        productRepository.save(product.getId(), product);
        const post = { id: product.toObject().id };

        res.status(201).send(post);
      } catch (err) {
        next(err);
      }
    },
    delete: (req, res, next) => {
      try {
        const id = req.params.id as string;
        const hasItem = productRepository.exists(id);
        if (!hasItem) {
          throw new NotFoundError();
        }
        productRepository.delete(id);
        const cart = cartRepository.get();
        cart.deleteItemByProductId(id);
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
  return {
    get: (_req, res, next) => {
      try {
        const cart = cartRepository.get();
        const items = cart.getAllItems().map(({ product_id, quantity }) => {
          const product = productRepository.findById(product_id)?.toObject();
          return { product_id, quantity, product };
        });
        res.send(items);
      } catch (err) {
        next(err);
      }
    },
    update: (req, res, next) => {
      try {
        const id = req.params.id;
        const { quantity } = req.body;
        const cart = cartRepository.get();
        if (!cart.hasItemByProductId(id)) {
          throw new NotFoundError();
        }

        cart.updateItemByProductId(id, quantity);
        res.status(200).send({ product_id: id, quantity: quantity });
      } catch (err) {
        next(err);
      }
    },
    delete: (req, res, next) => {
      try {
        const id = req.params.id;
        const cart = cartRepository.get();
        if (!cart.hasItemByProductId(id)) {
          throw new NotFoundError();
        }
        cart.deleteItemByProductId(id);
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
            return {
              ...item,
              product: productRepository.findById(item.product_id),
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
  };
}
