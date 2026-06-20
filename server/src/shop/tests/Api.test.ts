import { jest } from "@jest/globals";
import { createApp } from "../../route.js";
import { DeliveryFee, HardPlacePolicy } from "../models/DeliveryFee.js";
import {
  InMemoryCartRepository,
  InMemoryProductRepository,
  InMemoryTempOrderRepository,
  InMemoryCouponRepository,
} from "../repositories/InMemoryRepositories.js";
import TempOrder from "../models/TempOrder.js";
import {
  AmountDiscountCoupon,
  BonusCoupon,
  FreeShippingCoupon,
  RateDiscountCoupon,
} from "../models/Coupon.js";
import Product from "../models/Product.js";
import request from "supertest";
import {
  createCartController,
  createProductController,
  createTempOrderController,
} from "../controllers.js";
import { ProductType } from "../models/Product.js";

describe("프로덕트 API 테스트", () => {
  // TODO: 매 테스트마다 controller와 리포지토리를 생성해야한다.
  // 독립성은 보장되지만 굳이 불필요한 선에서는 중복을 제거해야할거 같다..
  const cartRepository = new InMemoryCartRepository();
  const productRepository = new InMemoryProductRepository();
  const tempOrderRepository = new InMemoryTempOrderRepository();
  const couponRepository = new InMemoryCouponRepository();

  const cartController = createCartController({
    cartRepository,
    productRepository,
  });
  const productController = createProductController({
    cartRepository,
    productRepository,
  });
  const tempOrderController = createTempOrderController({
    tempOrderRepository,
    productRepository,
    couponRepository,
  });
  const product1 = new Product({
    name: "피자",
    price: 30000,
    thumbnail: "pizza.png",
  });
  const product2 = new Product({
    name: "치킨",
    price: 20000,
    thumbnail: "chicken.png",
  });

  const app = createApp({
    productController,
    cartController,
    tempOrderController,
  });

  beforeEach(() => {
    productRepository.save(product1.getId(), product1);
    productRepository.save(product2.getId(), product2);
  });

  afterEach(() => {
    productRepository.clearAll();
  });

  test("프로덕트 목록을 반환한다.", async () => {
    const res = await request(app).get("/api/products/");
    res.body.map((product: ProductType) => (product.id = "fixed id"));
    expect(res.status).toBe(200);
    expect(res.body).toEqual([
      { id: "fixed id", name: "피자", price: 30000, thumbnail: "pizza.png" },
      { id: "fixed id", name: "치킨", price: 20000, thumbnail: "chicken.png" },
    ]);
  });

  test("프로덕트를 추가한다.", async () => {
    const res = await request(app)
      .post("/api/products/")
      .send({ name: "햄버거", price: 8000, thumnail: "hamburger.png" })
      .set("Accept", "application/json");
    res.body.id = "fixed id";
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ id: "fixed id" });
    const products = productRepository.findAll();
    expect(products.length).toBe(3);
  });

  test("프로덕트를 삭제한다.", async () => {
    const id = product1.getId();
    const res = await request(app).del(`/api/products/${id}/`);
    expect(res.status).toBe(204);
    const products = productRepository.findAll();
    expect(products.length).toBe(1);
  });

  test("필수필드를 전달하지 않으면 400 에러가 발생한다.", async () => {
    const res = await request(app)
      .post("/api/products/")
      .send({ name: "", price: "", thumnail: "hamburger.png" })
      .set("Accept", "application/json");
    expect(res.status).toBe(400);
    expect(res.body).toEqual({
      code: "BAD_REQUEST",
      message: "요청 데이터가 유효하지 않습니다.",
      errors: {
        name: {
          code: "REQUIRED_FIELD",
          message: "상품명 필드가 누락되었습니다.",
        },
        price: {
          code: "REQUIRED_FIELD",
          message: "가격 필드가 누락되었습니다.",
        },
      },
    });
  });

  test("상품명길이가 100자 이상인 경우 400 에러가 발생한다.", async () => {
    const name = "엄청 긴 상품명".repeat(100);
    const res = await request(app)
      .post("/api/products/")
      .send({ name: name, price: "10000", thumnail: "hamburger.png" })
      .set("Accept", "application/json");
    expect(res.status).toBe(400);
    expect(res.body).toEqual({
      code: "BAD_REQUEST",
      message: "요청 데이터가 유효하지 않습니다.",
      errors: {
        name: {
          code: "INVALID_LENGTH_RANGE",
          message: "상품명은 0자 이상 100자 이하 문자여야 합니다.",
        },
      },
    });
  });

  test("가격이 0보다 작으면 400 에러가 발생한다.", async () => {
    const res = await request(app)
      .post("/api/products/")
      .send({ name: "햄버거", price: "0", thumnail: "hamburger.png" })
      .set("Accept", "application/json");
    expect(res.status).toBe(400);
    expect(res.body).toEqual({
      code: "BAD_REQUEST",
      message: "요청 데이터가 유효하지 않습니다.",
      errors: {
        price: {
          code: "INVALID_MIN_NUMBER",
          message: "가격은 0 보다 큰 숫자여야 합니다.",
        },
      },
    });
  });

  test("존재하지 않는 상품을 제거하려고 하면 404 에러가 발생한다.", async () => {
    const res = await request(app).del(`/api/products/unknown/`);
    expect(res.status).toBe(404);
    expect(res.body).toEqual({
      code: "RESOURCE_NOT_FOUND",
      message: "요청한 리소스를 찾을 수 없습니다.",
    });
  });

  test("스토리지 에러가 발생하면 500 에러가 반환된다.", async () => {
    jest.spyOn(productRepository, "findAll").mockImplementationOnce(() => {
      throw new Error("Repository error");
    });
    const res = await request(app).get("/api/products/");
    expect(res.status).toBe(500);
    expect(res.body).toEqual({
      code: "INTERNAL_SERVER_ERROR",
      message: "예기치 못한 오류가 발생했습니다.",
    });
  });
});

describe("카트 API 테스트", () => {
  const productRepository = new InMemoryProductRepository();
  const cartRepository = new InMemoryCartRepository();
  const tempOrderRepository = new InMemoryTempOrderRepository();
  const couponRepository = new InMemoryCouponRepository();

  const productController = createProductController({
    productRepository,
    cartRepository,
  });
  const cartController = createCartController({
    cartRepository,
    productRepository,
  });
  const tempOrderController = createTempOrderController({
    tempOrderRepository,
    productRepository,
    couponRepository,
  });

  const app = createApp({
    productController,
    cartController,
    tempOrderController,
  });
  const cart = cartRepository.get();

  beforeEach(() => {
    cart.updateItemByProductId("123", 10);
    cart.updateItemByProductId("456", 20);
  });

  test("장바구니 내 아이템목록을 반환한다.", async () => {
    const res = await request(app).get("/api/cart/");
    expect(res.status).toBe(200);
    expect(res.body).toEqual([
      { product_id: "123", quantity: 10 },
      { product_id: "456", quantity: 20 },
    ]);
  });

  test("장바구니 내 아이템 수량을 수정한다.", async () => {
    const res = await request(app)
      .patch("/api/cart/items/123/")
      .send({ quantity: 40 })
      .set("Accept", "application/json");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ product_id: "123", quantity: 40 });
    const cart = cartRepository.get();
    expect(cart.getItemById("123")).toBe(40);
  });

  test("장바구니 내 아이템을 삭제한다.", async () => {
    const res = await request(app).delete("/api/cart/items/123");
    expect(res.status).toBe(204);
    const cart = cartRepository.get();
    expect(cart.getAllItems().length).toBe(1);
  });

  test("1 ~ 99개 사이가 아닌 수량을 수정하려 하면 400 에러가 발생한다.", async () => {
    const res = await request(app)
      .patch("/api/cart/items/123/")
      .send({ quantity: 100 })
      .set("Accept", "application/json");
    expect(res.status).toBe(400);
    expect(res.body).toEqual({
      code: "BAD_REQUEST",
      message: "요청 데이터가 유효하지 않습니다.",
      errors: {
        quantity: {
          code: "INVALID_NUMBER_RANGE",
          message: "수량은 1 이상 99 이하여야 합니다.",
        },
      },
    });
  });

  test("존재하지 않는 장바구니 내 아이템 수량 변경하려고 하면 404에러가 발생한다.", async () => {
    const res = await request(app)
      .patch("/api/cart/items/unknown/")
      .send({ quantity: 5 })
      .set("Accept", "application/json");
    expect(res.status).toBe(404);
    expect(res.body).toEqual({
      code: "RESOURCE_NOT_FOUND",
      message: "요청한 리소스를 찾을 수 없습니다.",
    });
  });

  test("존재하지 않은 장바구니 내 아이템을 제거하려고 하면 404에러가 발생한다.", async () => {
    const res = await request(app).del("/api/cart/items/unknown/");
    expect(res.status).toBe(404);
    expect(res.body).toEqual({
      code: "RESOURCE_NOT_FOUND",
      message: "요청한 리소스를 찾을 수 없습니다.",
    });
  });
});

describe("임시 주문서 API 테스트", () => {
  const cartRepository = new InMemoryCartRepository();
  const productRepository = new InMemoryProductRepository();
  const tempOrderRepository = new InMemoryTempOrderRepository();
  const couponRepository = new InMemoryCouponRepository();

  const cartController = createCartController({
    cartRepository,
    productRepository,
  });
  const productController = createProductController({
    cartRepository,
    productRepository,
  });
  const tempOrderController = createTempOrderController({
    tempOrderRepository,
    productRepository,
    couponRepository,
  });
  const app = createApp({
    cartController,
    productController,
    tempOrderController,
  });

  const amountDiscountCoupon = new AmountDiscountCoupon({
    conditions: [],
    discountPrice: 5000,
  });

  const rateDiscountCoupon = new RateDiscountCoupon({
    conditions: [],
    discountRate: 30,
  });

  const tempOrder = new TempOrder(
    [
      {
        product_id: "777",
        quantity: 4,
        product: {
          name: "레몬에이드",
          price: 2500,
          thumbnail: "lemon-ade.png",
        },
      },
      {
        product_id: "555",
        quantity: 4,
        product: {
          name: "블루레몬에이드",
          price: 10000,
          thumbnail: "blue-lemon-ade.png",
        },
      },
    ],
    new DeliveryFee(3000, [new HardPlacePolicy(3000)]),
    [amountDiscountCoupon, rateDiscountCoupon],
  );

  const freeShippingCoupon = new FreeShippingCoupon({
    conditions: [],
  });
  const bonusCoupon = new BonusCoupon({
    conditions: [],
    minQuantity: 2,
    bonusCount: 1,
  });

  beforeEach(() => {
    productRepository.save(
      "123",
      new Product({ name: "상품A", price: 10000, thumbnail: "a.png" }),
    );
    productRepository.save(
      "456",
      new Product({ name: "상품B", price: 20000, thumbnail: "b.png" }),
    );
    tempOrderRepository.save(tempOrder.getId(), tempOrder);
    couponRepository.save(freeShippingCoupon.getId(), freeShippingCoupon);
    couponRepository.save(bonusCoupon.getId(), bonusCoupon);
  });

  afterEach(() => {
    tempOrderRepository.clearAll();
    couponRepository.clearAll();
    productRepository.clearAll();
  });

  test("임시 주문서를 생성한다.", async () => {
    tempOrderRepository.clearAll();
    const res = await request(app)
      .post("/api/orders/")
      .send([
        { product_id: "123", quantity: 2 },
        { product_id: "456", quantity: 5 },
      ])
      .set("Accept", "application/json");
    res.body.order_id = "fixed id";
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ order_id: "fixed id" });
    const tempOrder = tempOrderRepository.findAll();
    expect(tempOrder.length).toBe(1);
  });

  test("특정 임시 주문서를 가져온다.", async () => {
    const id = tempOrder.getId();
    const res = await request(app).get(`/api/orders/${id}/`);
    expect(res.status).toBe(200);
    res.body.selected_coupons = ["SOME_COUPON1", "SOME_COUPON2"];
    res.body.price_summary = {
      order_price: 30500,
      discount_price: 6000,
      delivery_price: 3000,
      total_price: 21500,
    };
    expect(res.body).toEqual({
      id: id,
      hard_delivery_place: true,
      selected_coupons: ["SOME_COUPON1", "SOME_COUPON2"],
      selected_items: [
        {
          product_id: "777",
          quantity: 4,
          product: {
            name: "레몬에이드",
            price: 2500,
            thumbnail: "lemon-ade.png",
          },
        },
        {
          product_id: "555",
          quantity: 4,
          product: {
            name: "블루레몬에이드",
            price: 10000,
            thumbnail: "blue-lemon-ade.png",
          },
        },
      ],
      price_summary: {
        order_price: 30500,
        discount_price: 6000,
        delivery_price: 3000,
        total_price: 21500,
      },
    });
  });

  test("특정 임시 주문서를 수정한다.", async () => {
    const id = tempOrder.getId();
    const res = await request(app)
      .patch(`/api/orders/${id}/`)
      .send({
        selected_coupons: [freeShippingCoupon.getId(), bonusCoupon.getId()],
      })
      .set("Accept", "application/json");
    expect(res.status).toBe(200);
    res.body.price_summary = {
      order_price: 30500,
      discount_price: 4000,
      delivery_price: 0,
      total_price: 26500,
    };
    expect(res.body).toEqual({
      id: id,
      hard_delivery_place: true,
      selected_coupons: [freeShippingCoupon.getId(), bonusCoupon.getId()],
      selected_items: [
        {
          product_id: "777",
          quantity: 4,
          product: {
            name: "레몬에이드",
            price: 2500,
            thumbnail: "lemon-ade.png",
          },
        },
        {
          product_id: "555",
          quantity: 4,
          product: {
            name: "블루레몬에이드",
            price: 10000,
            thumbnail: "blue-lemon-ade.png",
          },
        },
      ],
      price_summary: {
        order_price: 30500,
        discount_price: 4000,
        delivery_price: 0,
        total_price: 26500,
      },
    });
  });
});
