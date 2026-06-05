import { n as Navigation, t as Button } from "./Button-N6F7SLIV.js";
import { Link, UNSAFE_withComponentProps, useLocation } from "react-router";
import styled from "@emotion/styled";
import { jsx, jsxs } from "react/jsx-runtime";
import "react";
//#region app/commons/images/go-back.svg?react
var SvgGoBack = (props) => /* @__PURE__ */ jsx("svg", {
	width: 25,
	height: 23,
	viewBox: "0 0 25 23",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...props,
	children: /* @__PURE__ */ jsx("path", {
		d: "M1.9209 11.3537L0.749595 10.4167L-3.8743e-05 11.3537L0.749595 12.2908L1.9209 11.3537ZM22.7542 12.8537C23.5827 12.8537 24.2542 12.1821 24.2542 11.3537C24.2542 10.5253 23.5827 9.85371 22.7542 9.85371V12.8537ZM9.08293 -2.98023e-07L0.749595 10.4167L3.0922 12.2908L11.4255 1.87408L9.08293 -2.98023e-07ZM0.749595 12.2908L9.08293 22.7074L11.4255 20.8333L3.0922 10.4167L0.749595 12.2908ZM1.9209 12.8537H22.7542V9.85371H1.9209V12.8537Z",
		fill: "white"
	})
});
//#endregion
//#region app/pages/shopping-cart/components/OrderCheckNavigation.tsx
function OrderCheckNavigation() {
	return /* @__PURE__ */ jsx(Navigation, { children: /* @__PURE__ */ jsx(Link, {
		to: "/cart/",
		children: /* @__PURE__ */ jsx(SvgGoBack, {})
	}) });
}
//#endregion
//#region app/pages/shopping-cart/components/OrderSubmitButton.tsx
function OrderSubmitButton() {
	return /* @__PURE__ */ jsx(Button, {
		type: "button",
		disabled: true,
		children: "결제 하기"
	});
}
//#endregion
//#region app/pages/shopping-cart/components/OrderCheckSection.tsx
function OrderCheckSection() {
	const { totalItems, totalQuantity, totalPrice } = useLocation().state;
	return /* @__PURE__ */ jsxs(OrderCheckSectionContainer, { children: [
		/* @__PURE__ */ jsx("h2", {
			className: "title",
			children: "주문 확인"
		}),
		/* @__PURE__ */ jsxs("p", {
			className: "order-summary-sub-text",
			children: [
				"총 ",
				totalItems,
				"종류의 상품 ",
				totalQuantity,
				"개를 주문합니다."
			]
		}),
		/* @__PURE__ */ jsx("p", {
			className: "order-summary-sub-text",
			children: "최종 결제 금액을 확인해 주세요."
		}),
		/* @__PURE__ */ jsx("p", {
			className: "total-price-title",
			children: "총 결제 금액"
		}),
		/* @__PURE__ */ jsxs("p", {
			className: "total-price",
			children: [totalPrice.toLocaleString("ko-KR"), "원"]
		}),
		/* @__PURE__ */ jsx(OrderSubmitButton, {})
	] });
}
var OrderCheckSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  p {
    margin: 0;
  }

  .title,
  .total-price {
    font-weight: 700;
    font-size: 24px;
  }

  .order-summary-sub-text {
    font-weight: 500;
    font-size: 12px;
  }

  .total-price-title {
    font-weight: 700;
    font-size: 16px;
    margin: 1.5rem 0;
  }
`;
//#endregion
//#region app/pages/shopping-cart/OrderCheckPage.tsx
var OrderCheckPage_default = UNSAFE_withComponentProps(function OrderCheckPage() {
	return /* @__PURE__ */ jsxs(OrderCheckPageContainer, { children: [/* @__PURE__ */ jsx(OrderCheckNavigation, {}), /* @__PURE__ */ jsx(OrderCheckSection, {})] });
});
var OrderCheckPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;
//#endregion
export { OrderCheckPage_default as default };
