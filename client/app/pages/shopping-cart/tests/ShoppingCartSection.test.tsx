import {
  render,
  screen,
  within,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { describe, test, expect, beforeEach } from "vitest";
import { MemoryRouter } from "react-router";
import { server } from "../../../../rtl-setup";
import { BASE_URL } from "../../../constants";
import ShoppingCartSection from "../components/ShoppingCartSection";

describe("ShoppingCartSection", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("서버에서 가져온 장바구니 상품이 화면에 표시된다", async () => {
    render(
      <MemoryRouter>
        <ShoppingCartSection />
      </MemoryRouter>,
    );

    expect(await screen.findByText("치킨")).toBeInTheDocument();
    expect(await screen.findByText("피자")).toBeInTheDocument();
  });

  test("장바구니가 비어있을때 다른 UI 가 렌더링 된다", async () => {
    server.use(
      http.get(`${BASE_URL}/api/cart/`, () => {
        return HttpResponse.json([]);
      }),
    );
    render(
      <MemoryRouter>
        <ShoppingCartSection />
      </MemoryRouter>,
    );

    expect(
      await screen.findByText("장바구니에 담은 상품이 없습니다."),
    ).toBeInTheDocument();
    expect(
      screen.queryByText("상품이 담겨있습니다", { exact: false }),
    ).not.toBeInTheDocument();
  });

  test("수량 감소 버튼은 특정 최소값에 도달했을때 버튼이 비활성화된다", async () => {
    render(
      <MemoryRouter>
        <ShoppingCartSection />
      </MemoryRouter>,
    );

    const chickenItem = await screen.findByText("치킨");
    const listItem = chickenItem.closest("li")!;
    const decreaseButton = within(listItem).getByRole("button", {
      name: "수량 감소",
    });

    expect(within(listItem).getByText("2")).toBeInTheDocument();
    expect(decreaseButton).not.toBeDisabled();
    fireEvent.click(decreaseButton);
    expect(within(listItem).getByText("1")).toBeInTheDocument();
    expect(decreaseButton).toBeDisabled();
  });

  test("수량 증가 버튼은 특정 최대값에 도달했을때 버튼이 비활성화된다", async () => {
    render(
      <MemoryRouter>
        <ShoppingCartSection />
      </MemoryRouter>,
    );

    const pizzaItem = await screen.findByText("홈런볼");
    const listItem = pizzaItem.closest("li")!;
    const increaseButton = within(listItem).getByRole("button", {
      name: "수량 증가",
    });
    expect(within(listItem).getByText("99")).toBeInTheDocument();
    expect(increaseButton).toBeDisabled();
  });

  test("삭제 버튼을 클릭하면 해당 상품이 목록에서 사라진다", async () => {
    render(
      <MemoryRouter>
        <ShoppingCartSection />
      </MemoryRouter>,
    );

    const chickenItem = await screen.findByText("치킨");
    const listItem = chickenItem.closest("li")!;
    const deleteButton = within(listItem).getByRole("button", { name: "삭제" });

    fireEvent.click(deleteButton);

    await waitForElementToBeRemoved(() => screen.queryByText("치킨"));
    expect(screen.queryByText("치킨")).not.toBeInTheDocument();
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
      localStorage.getItem("selectedItems") ?? "[]",
    );
    expect(selectedItems).toEqual(["id-1", "id-2"]);
  });

  test("재방문 시 기존 localStorage의 selectedItems가 덮어씌워지지 않는다", async () => {
    const existingItems = ["existing-id-1", "existing-id-2"];
    localStorage.setItem("selectedItems", JSON.stringify(existingItems));

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
      localStorage.getItem("selectedItems") ?? "[]",
    );
    expect(selectedItems).toEqual(existingItems);
  });

  test("상품이 체크되었을때 localStorage에 상품 id가 추가된다.", async () => {
    localStorage.setItem("selectedItems", JSON.stringify([]));
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
      localStorage.getItem("selectedItems") ?? "[]",
    );
    expect(selectedItems).toEqual(["123-123"]);
  });

  test("상품이 체크 해제 되었을때 localStorage에 상품 id가 제거된다.", async () => {
    localStorage.setItem("selectedItems", JSON.stringify(["456-456"]));
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
      localStorage.getItem("selectedItems") ?? "[]",
    );
    expect(selectedItems).toEqual([]);
  });

  test("전체선택 버튼은 모든 아이템이 localStorage에 존재하면 chceked상태가 된다.", async () => {
    localStorage.setItem(
      "selectedItems",
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
    localStorage.setItem("selectedItems", JSON.stringify([]));
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
      localStorage.getItem("selectedItems") ?? "[]",
    );
    expect(selectedItems).toEqual(["123-123", "456-456"]);
  });

  test("일부 아이템이 선택된 상태에서 전체선택을 클릭하면 모든 체크박스가 활성화되고 localStorage에 아이템ID가 저장된다.", async () => {
    localStorage.setItem("selectedItems", JSON.stringify(["123-123"]));
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
      localStorage.getItem("selectedItems") ?? "[]",
    );
    expect(selectedItems).toEqual(["123-123", "456-456"]);
  });
  test("전체선택된 상태에서 전체선택 버튼을 클릭하면 모든 체크박스가 비활성화되고 localStorage에 아이템ID가 빈배열이된다.", async () => {
    localStorage.setItem(
      "selectedItems",
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
      localStorage.getItem("selectedItems") ?? "[]",
    );
    expect(selectedItems).toEqual([]);
  });

  test("상품이 전부 삭제되었을때 상품이 없을때의 UI가 렌더링 된다.", async () => {
    let getCallCount = 0;
    server.use(
      // 최초에만 하나의 값이 반환되도록 한다.
      http.get(`${BASE_URL}/api/cart/`, () => {
        getCallCount++;
        if (getCallCount === 1) {
          return HttpResponse.json([
            {
              product_id: "test-id",
              quantity: 1,
              product: { name: "뿌링클", price: 25000, thumbnail: "" },
            },
          ]);
        }
        return HttpResponse.json([]);
      }),
    );

    render(
      <MemoryRouter>
        <ShoppingCartSection />
      </MemoryRouter>,
    );

    const chickenItem = await screen.findByText("뿌링클");
    const listItem = chickenItem.closest("li")!;
    const deleteButton = within(listItem).getByRole("button", { name: "삭제" });

    fireEvent.click(deleteButton);

    expect(
      await screen.findByText("장바구니에 담은 상품이 없습니다."),
    ).toBeInTheDocument();
  });

  test("선택된 상품의 주문금액을 렌더링한다.", async () => {
    localStorage.setItem(
      "selectedItems",
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
});
