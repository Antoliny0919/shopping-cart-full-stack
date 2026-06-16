import TempOrder from "../models/TempOrder.js";

describe("TempOrder Tests", () => {
  const tempOrder = new TempOrder([
    {
      product_id: "123",
      quantity: 2,
      product: {
        name: "민트초코",
        price: 3000,
        thumbnail: "mint-choco.png",
      },
    },
    {
      product_id: "456",
      quantity: 5,
      product: {
        name: "뉴욕치즈 케이크",
        price: 4000,
        thumbnail: "newyork-cheeze.png",
      },
    },
  ]);

  test("금액과 관련된 정보를 반환한다.", () => {
    expect(tempOrder.priceSummary()).toEqual({
      order_price: 26000,
    });
  });
});
