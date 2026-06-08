import {
  render,
  screen,
  within,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { MemoryRouter } from "react-router";
import { server } from "../../../../rtl-setup";
import { BASE_URL } from "../../../constants";
import ShoppingCartSection from "../components/Section";
import { drop } from "@mswjs/data";
import db, { seedDb } from "../mocks/db";

describe("ShoppingCartSection", () => {
  beforeEach(() => {
    localStorage.clear();
    seedDb([
      {
        product_id: "bbq-1",
        quantity: 99,
        product: { name: "황금올리브", price: 25000, thumbnail: "" },
      },
      {
        product_id: "bbq-2",
        quantity: 2,
        product: {
          name: "황올반반 + 웨지감자",
          price: 30000,
          thumbnail: "",
        },
      },
    ]);
  });

  afterEach(() => {
    drop(db);
  });

  test("서버에서 가져온 장바구니 상품이 화면에 표시된다", async () => {
    render(
      <MemoryRouter>
        <ShoppingCartSection />
      </MemoryRouter>,
    );

    expect(await screen.findByText("황금올리브")).toBeInTheDocument();
    expect(await screen.findByText("황올반반 + 웨지감자")).toBeInTheDocument();
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

    const chickenItem = await screen.findByText("황올반반 + 웨지감자");
    const listItem = chickenItem.closest("li")!;
    const decreaseButton = within(listItem).getByRole("button", {
      name: "수량 감소",
    });

    expect(within(listItem).getByText("2")).toBeInTheDocument();
    expect(decreaseButton).not.toBeDisabled();
    fireEvent.click(decreaseButton);
    await waitFor(() => {
      expect(within(listItem).getByText("1")).toBeInTheDocument();
      expect(decreaseButton).toBeDisabled();
    });
  });

  test("수량 증가 버튼은 특정 최대값에 도달했을때 버튼이 비활성화된다", async () => {
    render(
      <MemoryRouter>
        <ShoppingCartSection />
      </MemoryRouter>,
    );

    const pizzaItem = await screen.findByText("황금올리브");
    const listItem = pizzaItem.closest("li")!;
    const increaseButton = within(listItem).getByRole("button", {
      name: "수량 증가",
    });
    expect(within(listItem).getByText("99")).toBeInTheDocument();
    expect(increaseButton).toBeDisabled();
  });

  test("수량 업데이트를 시도했을때 에러가 발생하면 변경된 수량값을 다시 되돌린다", async () => {
    server.use(
      http.patch(`${BASE_URL}/api/cart/items/:id/`, () => {
        return HttpResponse.json(
          {
            errors: {
              quantity: "SOME_ERROR_CODE",
              message: "에러발생!",
            },
          },
          { status: 400 },
        );
      }),
    );

    render(
      <MemoryRouter>
        <ShoppingCartSection />
      </MemoryRouter>,
    );

    const chickenItem = await screen.findByText("황금올리브");
    const listItem = chickenItem.closest("li")!;
    const decreaseButton = within(listItem).getByRole("button", {
      name: "수량 감소",
    });

    expect(within(listItem).getByText("99")).toBeInTheDocument();

    fireEvent.click(decreaseButton);

    await waitFor(() => {
      expect(within(listItem).getByText("99")).toBeInTheDocument();
    });
  });

  test("삭제 버튼을 클릭하면 해당 상품이 목록에서 사라진다", async () => {
    render(
      <MemoryRouter>
        <ShoppingCartSection />
      </MemoryRouter>,
    );

    const chickenItem = await screen.findByText("황금올리브");
    const listItem = chickenItem.closest("li")!;
    const deleteButton = within(listItem).getByRole("button", { name: "삭제" });

    fireEvent.click(deleteButton);

    await waitForElementToBeRemoved(() => screen.queryByText("황금올리브"));
    expect(screen.queryByText("황금올리브")).not.toBeInTheDocument();
  });

  test("삭제 버튼을 클랙하면 해당 상품의 ID가 로컬스토리지에서 제거된다", async () => {
    const existingItems = ["bbq-1", "bbq-2"];
    localStorage.setItem("cart-selected-items", JSON.stringify(existingItems));

    render(
      <MemoryRouter>
        <ShoppingCartSection />
      </MemoryRouter>,
    );

    const item = await screen.findByText("황금올리브");
    const listItem = item.closest("li")!;
    const deleteButton = within(listItem).getByRole("button", { name: "삭제" });
    fireEvent.click(deleteButton);
    await waitForElementToBeRemoved(() => screen.queryByText("황금올리브"));
    const selectedItems = JSON.parse(
      localStorage.getItem("cart-selected-items") ?? "[]",
    );

    expect(selectedItems).toEqual(["bbq-2"]);
  });

  test("상품이 전부 삭제되었을때 상품이 없을때의 UI가 렌더링 된다", async () => {
    render(
      <MemoryRouter>
        <ShoppingCartSection />
      </MemoryRouter>,
    );

    const firstItem = await screen.findByText("황금올리브");
    fireEvent.click(
      within(firstItem.closest("li")!).getByRole("button", { name: "삭제" }),
    );
    await waitForElementToBeRemoved(() => screen.queryByText("황금올리브"));

    const secondItem = screen.getByText("황올반반 + 웨지감자");
    fireEvent.click(
      within(secondItem.closest("li")!).getByRole("button", { name: "삭제" }),
    );

    expect(
      await screen.findByText("장바구니에 담은 상품이 없습니다."),
    ).toBeInTheDocument();
  });
});
