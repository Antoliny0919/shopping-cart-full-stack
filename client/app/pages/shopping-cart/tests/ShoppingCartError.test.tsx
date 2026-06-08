import { render, screen, fireEvent, within } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { MemoryRouter } from "react-router";
import { server } from "../../../../rtl-setup";
import { BASE_URL } from "../../../constants";
import ShoppingCartSection from "../components/Section";
import { drop } from "@mswjs/data";
import db, { seedDb } from "../mocks/db";

describe("ShoppingCartError", () => {
  beforeEach(() => {
    localStorage.clear();
    seedDb();
  });

  afterEach(() => {
    drop(db);
  });

  test("첫 데이터 로딩 중 네트워크 에러가 발생하면 에러 UI가 표시된다.", async () => {
    server.use(http.get(`${BASE_URL}/api/cart/`, () => HttpResponse.error()));

    render(
      <MemoryRouter>
        <ShoppingCartSection />
      </MemoryRouter>,
    );

    expect(
      await screen.findByText("서버와 연결할 수 없습니다."),
    ).toBeInTheDocument();
    expect(screen.queryByText("장바구니")).not.toBeInTheDocument();
  });

  test("삭제시 네트워크 에러가 발생하면 에러 UI가 표시된다.", async () => {
    server.use(
      http.delete(`${BASE_URL}/api/cart/items/:id/`, () =>
        HttpResponse.error(),
      ),
    );

    render(
      <MemoryRouter>
        <ShoppingCartSection />
      </MemoryRouter>,
    );

    const chickenItem = await screen.findByText("치킨");
    const listItem = chickenItem.closest("li")!;
    const deleteButton = within(listItem).getByRole("button", { name: "삭제" });

    fireEvent.click(deleteButton);

    expect(
      await screen.findByText("서버와 연결할 수 없습니다."),
    ).toBeInTheDocument();
  });

  test("삭제시 서버 에러가 발생하면 Toast에 에러 메시지가 표시된다.", async () => {
    server.use(
      http.delete(`${BASE_URL}/api/cart/items/:id/`, () =>
        HttpResponse.json(
          { message: "요청한 리소스를 찾을 수 없습니다." },
          { status: 404 },
        ),
      ),
    );

    render(
      <MemoryRouter>
        <ShoppingCartSection />
      </MemoryRouter>,
    );

    const chickenItem = await screen.findByText("치킨");
    const listItem = chickenItem.closest("li")!;
    const deleteButton = within(listItem).getByRole("button", { name: "삭제" });

    fireEvent.click(deleteButton);

    expect(
      await screen.findByText("요청한 리소스를 찾을 수 없습니다."),
    ).toBeInTheDocument();
  });

  test("수량 업데이트시 네트워크 에러가 발생하면 에러 UI가 표시된다.", async () => {
    server.use(
      http.patch(`${BASE_URL}/api/cart/items/:id/`, () => HttpResponse.error()),
    );

    render(
      <MemoryRouter>
        <ShoppingCartSection />
      </MemoryRouter>,
    );

    const chickenItem = await screen.findByText("치킨");
    const listItem = chickenItem.closest("li")!;
    const increaseButton = within(listItem).getByRole("button", {
      name: "수량 증가",
    });

    fireEvent.click(increaseButton);

    expect(
      await screen.findByText("서버와 연결할 수 없습니다."),
    ).toBeInTheDocument();
  });

  test("수량 업데이트시 서버 에러가 발생하면 Toast에 에러 메시지가 표시된다.", async () => {
    server.use(
      http.patch(`${BASE_URL}/api/cart/items/:id/`, () =>
        HttpResponse.json(
          {
            errors: {
              quantity: "INVALID_NUMBER_RANGE",
              message: "수량은 1 이상 99 이하여야 합니다.",
            },
          },
          { status: 400 },
        ),
      ),
    );

    render(
      <MemoryRouter>
        <ShoppingCartSection />
      </MemoryRouter>,
    );

    const chickenItem = await screen.findByText("치킨");
    const listItem = chickenItem.closest("li")!;
    const increaseButton = within(listItem).getByRole("button", {
      name: "수량 증가",
    });

    fireEvent.click(increaseButton);

    expect(
      await screen.findByText("수량은 1 이상 99 이하여야 합니다."),
    ).toBeInTheDocument();
  });
});
