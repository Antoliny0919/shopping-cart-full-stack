import Product from "../models/Product.js";

describe("Product Tests", () => {
  test("프로덕트 클래스를 객체 형태로 반환한다.", () => {
    const product = new Product({
      name: "수건",
      price: 10000,
      thumbnail: "some.jpg",
    });
    expect(product.toObject()).toEqual(
      expect.objectContaining({
        name: "수건",
        price: 10000,
        thumbnail: "some.jpg",
      }),
    );
  });

  test.each(["", "           "])(
    "상품명이 빈 값일때는 에러가 발생한다.",
    (name) => {
      expect(
        () => new Product({ name: name, price: 10000, thumbnail: "some.jpg" }),
      ).toThrow("상품명은 빈 값이어서는 안됩니다.");
    },
  );

  test.each([0, -1, NaN, Infinity, -Infinity])(
    "가격이 유효하지 않은 값일때는 에러가 발생한다.",
    (price) => {
      expect(
        () =>
          new Product({ name: "치킨", price: price, thumbnail: "chicken.png" }),
      ).toThrow("가격은 0보다 큰 숫자여야 합니다.");
    },
  );
});
