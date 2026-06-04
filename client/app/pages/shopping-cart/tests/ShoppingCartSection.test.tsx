import {
  render,
  screen,
  within,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { describe, test, expect } from "vitest";
import { MemoryRouter } from "react-router";
import { server } from "../../../../rtl-setup";
import { BASE_URL } from "../../../constants";
import ShoppingCartSection from "../components/ShoppingCartSection";

describe("ShoppingCartSection", () => {
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
});
