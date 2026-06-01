import express from "express";
import { NotFoundError } from "../errors.js";
import Product from "./models/Product.js";
import {
  CartRepository,
  ProductRepository,
} from "./repositories/InMemoryRepositories.js";

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
}: {
  cartRepository: CartRepository;
}): CartController {
  return {
    get: (_req, res, next) => {
      try {
        const cart = cartRepository.get();
        res.send(cart.getAllItems());
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
