import {
  render,
  screen,
  within,
  fireEvent,
} from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { describe, test, expect, beforeEach } from "vitest";
import { MemoryRouter } from "react-router";
import { server } from "../../../../rtl-setup";
import { BASE_URL } from "../../../constants";
import ShoppingCartSection from "../components/ShoppingCartSection";

describe("ShoppingCartCheckbox", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("첫 방문 시 모든 카트 아이템 ID가 localStorage의 selectedItems에 저장된다", async () => {
    const mockItems = [
      {
        product_id: "id-1",
        quantity: 1,
        product: { name: "아이템1", price: 10000, thumbnail: "" },
      },
      {
        product_id: "id-2",
        quantity: 2,
        product: { name: "아이템2", price: 20000, thumbnail: "" },
      },
    ];
    server.use(
      http.get(`${BASE_URL}/api/cart/`, () => HttpResponse.json(mockItems)),
    );

    render(
      <MemoryRouter>
        <ShoppingCartSection />
      </MemoryRouter>,
    );

    await screen.findByText("아이템1");

    const selectedItems = JSON.parse(
      localStorage.getItem("cart-selected-items") ?? "[]",
    );
    expect(selectedItems).toEqual(["id-1", "id-2"]);
  });

  test("재방문 시 기존 localStorage의 selectedItems가 덮어씌워지지 않는다", async () => {
    const existingItems = ["existing-id-1", "existing-id-2"];
    localStorage.setItem("cart-selected-items", JSON.stringify(existingItems));

    server.use(
      http.get(`${BASE_URL}/api/cart/`, () =>
        HttpResponse.json([
          {
            product_id: "id-1",
            quantity: 1,
            product: { name: "아이템1", price: 10000, thumbnail: "" },
          },
        ]),
      ),
    );

    render(
      <MemoryRouter>
        <ShoppingCartSection />
      </MemoryRouter>,
    );

    await screen.findByText("아이템1");

    const selectedItems = JSON.parse(
      localStorage.getItem("cart-selected-items") ?? "[]",
    );
    expect(selectedItems).toEqual(existingItems);
  });

  test("상품이 체크되었을때 localStorage에 상품 id가 추가된다.", async () => {
    localStorage.setItem("cart-selected-items", JSON.stringify([]));
    server.use(
      http.get(`${BASE_URL}/api/cart/`, () =>
        HttpResponse.json([
          {
            product_id: "123-123",
            quantity: 1,
            product: { name: "하겐다즈 말차", price: 10000, thumbnail: "" },
          },
        ]),
      ),
    );
    render(
      <MemoryRouter>
        <ShoppingCartSection />
      </MemoryRouter>,
    );
    const productText = await screen.findByText("하겐다즈 말차");
    const listItem = productText.closest("li")!;
    const checkbox = listItem.querySelector(
      "input[type='checkbox']",
    ) as HTMLInputElement;
    fireEvent.click(checkbox);
    const selectedItems = JSON.parse(
      localStorage.getItem("cart-selected-items") ?? "[]",
    );
    expect(selectedItems).toEqual(["123-123"]);
  });

  test("상품이 체크 해제 되었을때 localStorage에 상품 id가 제거된다.", async () => {
    localStorage.setItem("cart-selected-items", JSON.stringify(["456-456"]));
    server.use(
      http.get(`${BASE_URL}/api/cart/`, () =>
        HttpResponse.json([
          {
            product_id: "456-456",
            quantity: 1,
            product: { name: "하겐다즈 초코", price: 10000, thumbnail: "" },
          },
        ]),
      ),
    );
    render(
      <MemoryRouter>
        <ShoppingCartSection />
      </MemoryRouter>,
    );
    const productText = await screen.findByText("하겐다즈 초코");
    const listItem = productText.closest("li")!;
    const checkbox = listItem.querySelector(
      "input[type='checkbox']",
    ) as HTMLInputElement;
    fireEvent.click(checkbox);
    const selectedItems = JSON.parse(
      localStorage.getItem("cart-selected-items") ?? "[]",
    );
    expect(selectedItems).toEqual([]);
  });

  test("전체선택 버튼은 모든 아이템이 localStorage에 존재하면 chceked상태가 된다.", async () => {
    localStorage.setItem(
      "cart-selected-items",
      JSON.stringify(["123-123", "456-456"]),
    );
    server.use(
      http.get(`${BASE_URL}/api/cart/`, () =>
        HttpResponse.json([
          {
            product_id: "123-123",
            quantity: 1,
            product: { name: "하겐다즈 말차", price: 10000, thumbnail: "" },
          },
          {
            product_id: "456-456",
            quantity: 2,
            product: { name: "하겐다즈 초코", price: 10000, thumbnail: "" },
          },
        ]),
      ),
    );
    render(
      <MemoryRouter>
        <ShoppingCartSection />
      </MemoryRouter>,
    );
    await screen.findByText("하겐다즈 말차");
    const allSelectCheckbox = screen.getByLabelText("전체선택");
    expect(allSelectCheckbox).toBeChecked();
  });

  test("전체선택 버튼을 클릭하면 모든 체크박스가 활성화되고 localStorage에 아이템ID가 저장된다.", async () => {
    localStorage.setItem("cart-selected-items", JSON.stringify([]));
    server.use(
      http.get(`${BASE_URL}/api/cart/`, () =>
        HttpResponse.json([
          {
            product_id: "123-123",
            quantity: 1,
            product: { name: "하겐다즈 말차", price: 10000, thumbnail: "" },
          },
          {
            product_id: "456-456",
            quantity: 2,
            product: { name: "하겐다즈 초코", price: 10000, thumbnail: "" },
          },
        ]),
      ),
    );
    render(
      <MemoryRouter>
        <ShoppingCartSection />
      </MemoryRouter>,
    );
    await screen.findByText("하겐다즈 말차");
    const allSelectCheckbox = screen.getByLabelText("전체선택");
    fireEvent.click(allSelectCheckbox);
    const item1Checkbox = screen
      .getByText("하겐다즈 말차")
      .closest("li")!
      .querySelector("input[type='checkbox']") as HTMLInputElement;
    const item2Checkbox = screen
      .getByText("하겐다즈 초코")
      .closest("li")!
      .querySelector("input[type='checkbox']") as HTMLInputElement;
    expect(allSelectCheckbox).toBeChecked();
    expect(item1Checkbox.checked).toBe(true);
    expect(item2Checkbox.checked).toBe(true);
    const selectedItems = JSON.parse(
      localStorage.getItem("cart-selected-items") ?? "[]",
    );
    expect(selectedItems).toEqual(["123-123", "456-456"]);
  });

  test("일부 아이템이 선택된 상태에서 전체선택을 클릭하면 모든 체크박스가 활성화되고 localStorage에 아이템ID가 저장된다.", async () => {
    localStorage.setItem("cart-selected-items", JSON.stringify(["123-123"]));
    server.use(
      http.get(`${BASE_URL}/api/cart/`, () =>
        HttpResponse.json([
          {
            product_id: "123-123",
            quantity: 1,
            product: { name: "하겐다즈 말차", price: 10000, thumbnail: "" },
          },
          {
            product_id: "456-456",
            quantity: 2,
            product: { name: "하겐다즈 초코", price: 10000, thumbnail: "" },
          },
        ]),
      ),
    );
    render(
      <MemoryRouter>
        <ShoppingCartSection />
      </MemoryRouter>,
    );
    await screen.findByText("하겐다즈 말차");
    const allSelectCheckbox = screen.getByLabelText("전체선택");
    const item1Checkbox = screen
      .getByText("하겐다즈 말차")
      .closest("li")!
      .querySelector("input[type='checkbox']") as HTMLInputElement;
    const item2Checkbox = screen
      .getByText("하겐다즈 초코")
      .closest("li")!
      .querySelector("input[type='checkbox']") as HTMLInputElement;
    expect(item1Checkbox).toBeChecked();
    expect(item2Checkbox).not.toBeChecked();
    fireEvent.click(allSelectCheckbox);
    expect(allSelectCheckbox).toBeChecked();
    expect(item1Checkbox.checked).toBe(true);
    expect(item2Checkbox.checked).toBe(true);
    const selectedItems = JSON.parse(
      localStorage.getItem("cart-selected-items") ?? "[]",
    );
    expect(selectedItems).toEqual(["123-123", "456-456"]);
  });

  test("전체선택된 상태에서 전체선택 버튼을 클릭하면 모든 체크박스가 비활성화되고 localStorage에 아이템ID가 빈배열이된다.", async () => {
    localStorage.setItem(
      "cart-selected-items",
      JSON.stringify(["123-123", "456-456"]),
    );
    server.use(
      http.get(`${BASE_URL}/api/cart/`, () =>
        HttpResponse.json([
          {
            product_id: "123-123",
            quantity: 1,
            product: { name: "하겐다즈 말차", price: 10000, thumbnail: "" },
          },
          {
            product_id: "456-456",
            quantity: 2,
            product: { name: "하겐다즈 초코", price: 10000, thumbnail: "" },
          },
        ]),
      ),
    );
    render(
      <MemoryRouter>
        <ShoppingCartSection />
      </MemoryRouter>,
    );
    await screen.findByText("하겐다즈 말차");
    const allSelectCheckbox = screen.getByLabelText("전체선택");
    fireEvent.click(allSelectCheckbox);
    const item1Checkbox = screen
      .getByText("하겐다즈 말차")
      .closest("li")!
      .querySelector("input[type='checkbox']") as HTMLInputElement;
    const item2Checkbox = screen
      .getByText("하겐다즈 초코")
      .closest("li")!
      .querySelector("input[type='checkbox']") as HTMLInputElement;
    expect(item1Checkbox).not.toBeChecked();
    expect(item2Checkbox).not.toBeChecked();
    expect(allSelectCheckbox).not.toBeChecked();
    const selectedItems = JSON.parse(
      localStorage.getItem("cart-selected-items") ?? "[]",
    );
    expect(selectedItems).toEqual([]);
  });

  test("localStorage의 selectedItems가 빈 배열이어도 장바구니 상품 목록이 렌더링된다.", async () => {
    localStorage.setItem("cart-selected-items", JSON.stringify([]));
    server.use(
      http.get(`${BASE_URL}/api/cart/`, () =>
        HttpResponse.json([
          {
            product_id: "123-123",
            quantity: 1,
            product: { name: "하겐다즈 말차", price: 10000, thumbnail: "" },
          },
          {
            product_id: "456-456",
            quantity: 2,
            product: { name: "하겐다즈 초코", price: 10000, thumbnail: "" },
          },
        ]),
      ),
    );

    render(
      <MemoryRouter>
        <ShoppingCartSection />
      </MemoryRouter>,
    );

    expect(await screen.findByText("하겐다즈 말차")).toBeInTheDocument();
    expect(screen.getByText("하겐다즈 초코")).toBeInTheDocument();
    expect(
      screen.queryByText("장바구니에 담은 상품이 없습니다."),
    ).not.toBeInTheDocument();
  });

  test("선택된 상품의 주문금액을 렌더링한다.", async () => {
    localStorage.setItem(
      "cart-selected-items",
      JSON.stringify(["123-123", "789-789"]),
    );
    server.use(
      http.get(`${BASE_URL}/api/cart/`, () =>
        HttpResponse.json([
          {
            product_id: "123-123",
            quantity: 1,
            product: { name: "하겐다즈 말차", price: 10000, thumbnail: "" },
          },
          {
            product_id: "456-456",
            quantity: 2,
            product: { name: "하겐다즈 초코", price: 10000, thumbnail: "" },
          },
          {
            product_id: "789-789",
            quantity: 3,
            product: { name: "하겐다즈 스페셜", price: 15000, thumbnail: "" },
          },
        ]),
      ),
    );

    render(
      <MemoryRouter>
        <ShoppingCartSection />
      </MemoryRouter>,
    );

    await screen.findByText("하겐다즈 말차");

    const orderAmountRow = screen.getByText("주문 금액").closest("div")!;
    expect(within(orderAmountRow).getByText("55,000원")).toBeInTheDocument();

    const specialCheckbox = screen
      .getByText("하겐다즈 스페셜")
      .closest("li")!
      .querySelector("input[type='checkbox']") as HTMLInputElement;
    fireEvent.click(specialCheckbox);

    expect(within(orderAmountRow).getByText("10,000원")).toBeInTheDocument();
  });

  test("체크된 상품이 없으면 배달비는 0원이다.", async () => {
    localStorage.setItem("cart-selected-items", JSON.stringify([]));
    server.use(
      http.get(`${BASE_URL}/api/cart/`, () =>
        HttpResponse.json([
          {
            product_id: "123-123",
            quantity: 1,
            product: { name: "하겐다즈 말차", price: 10000, thumbnail: "" },
          },
        ]),
      ),
    );
    render(
      <MemoryRouter>
        <ShoppingCartSection />
      </MemoryRouter>,
    );

    await screen.findByText("하겐다즈 말차");

    const deliveryRow = screen.getByText("배송비").closest("div")!;
    expect(within(deliveryRow).queryByText("3,000원")).not.toBeInTheDocument();

    const checkbox = screen
      .getByText("하겐다즈 말차")
      .closest("li")!
      .querySelector("input[type='checkbox']") as HTMLInputElement;
    fireEvent.click(checkbox);

    expect(within(deliveryRow).getByText("3,000원")).toBeInTheDocument();
  });
});
