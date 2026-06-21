import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi, beforeAll } from "vitest";
import CouponSelectModal from "../components/CouponSelectModal";
import { Coupon } from "../types";

beforeAll(() => {
  HTMLDialogElement.prototype.showModal = vi.fn();
  HTMLDialogElement.prototype.close = vi.fn();
});

const mockCoupons: Coupon[] = [
  {
    id: "coupon-1",
    name: "10% 할인 쿠폰",
    expiration_date: "2026-12-31",
    description: "전 상품 10% 할인",
    is_active: true,
  },
  {
    id: "coupon-2",
    name: "3,000원 할인 쿠폰",
    expiration_date: "2026-06-30",
    description: "5만원 이상 구매 시 사용 가능",
    is_active: false,
  },
];

describe("CouponSelectModal", () => {
  test("모달이 열렸을 때 쿠폰 목록이 렌더링된다", () => {
    render(
      <CouponSelectModal
        coupons={mockCoupons}
        isOpen={true}
        onClose={vi.fn()}
      />,
    );

    expect(screen.getByText("10% 할인 쿠폰")).toBeInTheDocument();
    expect(screen.getByText("3,000원 할인 쿠폰")).toBeInTheDocument();
    expect(screen.getByText("만료일: 2026-12-31")).toBeInTheDocument();
    expect(screen.getByText("만료일: 2026-06-30")).toBeInTheDocument();
    expect(screen.getByText("전 상품 10% 할인")).toBeInTheDocument();
    expect(
      screen.getByText("5만원 이상 구매 시 사용 가능"),
    ).toBeInTheDocument();
  });

  test("쿠폰 개수만큼 체크박스가 렌더링된다", () => {
    render(
      <CouponSelectModal
        coupons={mockCoupons}
        isOpen={true}
        onClose={vi.fn()}
      />,
    );

    const checkboxes = screen.getAllByRole("checkbox", { hidden: true });
    expect(checkboxes).toHaveLength(mockCoupons.length);
  });

  test("쿠폰이 없으면 쿠폰 아이템이 렌더링되지 않는다", () => {
    render(<CouponSelectModal coupons={[]} isOpen={true} onClose={vi.fn()} />);

    const checkboxes = screen.queryAllByRole("checkbox", { hidden: true });
    expect(checkboxes).toHaveLength(0);
  });

  test("is_active에 따라 쿠폰에 투명도가 적용된다.", () => {
    render(
      <CouponSelectModal
        coupons={mockCoupons}
        isOpen={true}
        onClose={vi.fn()}
      />,
    );

    const couponItems = screen.getAllByRole("listitem", { hidden: true });
    expect(couponItems[0]).toHaveStyle("opacity: 1");
    expect(couponItems[1]).toHaveStyle("opacity: 0.3");
  });
});
