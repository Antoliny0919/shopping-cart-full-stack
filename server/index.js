import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Link, Outlet, Scripts, ServerRouter, UNSAFE_withComponentProps, useLocation, useNavigate } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/@react-router/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		let userAgent = request.headers.get("user-agent");
		let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), 6e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
//#endregion
//#region app/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({ default: () => root_default });
var GlobalStyle = css`
  body {
    margin: 0;
  }

  button {
    cursor: pointer;
    outline: none;
  }
`;
var root_default = UNSAFE_withComponentProps(function App() {
	return /* @__PURE__ */ jsxs("html", {
		lang: "ko",
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("link", {
				rel: "icon",
				href: "data:image/x-icon;base64,AA"
			}),
			/* @__PURE__ */ jsx("meta", { charSet: "UTF-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1.0"
			})
		] }), /* @__PURE__ */ jsxs("body", { children: [/* @__PURE__ */ jsx(Global, { styles: GlobalStyle }), /* @__PURE__ */ jsxs(MobileAppView, { children: [/* @__PURE__ */ jsx(Outlet, {}), /* @__PURE__ */ jsx(Scripts, {})] })] })]
	});
});
var MobileAppView = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;
//#endregion
//#region app/commons/images/logo.svg?react
var SvgLogo = (props) => /* @__PURE__ */ jsx("svg", {
	width: 55,
	height: 17,
	viewBox: "0 0 55 17",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...props,
	children: /* @__PURE__ */ jsx("path", {
		d: "M10.52 11.86C10.52 12.6733 10.32 13.4133 9.92 14.08C9.52 14.7333 8.92 15.2533 8.12 15.64C7.32 16.0133 6.31333 16.2 5.1 16.2C4.54 16.2 4.02 16.1667 3.54 16.1C3.06 16.0333 2.6 15.94 2.16 15.82C1.73333 15.6867 1.31333 15.52 0.9 15.32V12.22C1.62 12.5533 2.35333 12.8333 3.1 13.06C3.86 13.2867 4.58667 13.4 5.28 13.4C5.72 13.4 6.07333 13.3467 6.34 13.24C6.62 13.12 6.82 12.9667 6.94 12.78C7.07333 12.58 7.14 12.3533 7.14 12.1C7.14 11.7933 7.03333 11.5333 6.82 11.32C6.62 11.0933 6.32 10.88 5.92 10.68C5.52 10.4667 5.03333 10.2267 4.46 9.96C4.03333 9.77333 3.61333 9.56 3.2 9.32C2.8 9.06667 2.43333 8.78 2.1 8.46C1.78 8.12667 1.52 7.73333 1.32 7.28C1.13333 6.81333 1.04 6.26667 1.04 5.64C1.04 4.74667 1.24667 4 1.66 3.4C2.08667 2.78667 2.68 2.32 3.44 2C4.2 1.68 5.09333 1.52 6.12 1.52C6.96 1.52 7.73333 1.61333 8.44 1.8C9.14667 1.98667 9.83333 2.22667 10.5 2.52L9.42 5.18C8.78 4.9 8.18 4.68667 7.62 4.54C7.07333 4.38 6.54 4.3 6.02 4.3C5.66 4.3 5.36 4.35333 5.12 4.46C4.88 4.55333 4.7 4.69333 4.58 4.88C4.46 5.05333 4.4 5.26 4.4 5.5C4.4 5.78 4.49333 6.02667 4.68 6.24C4.86667 6.44 5.16 6.64667 5.56 6.86C5.96 7.07333 6.48667 7.33333 7.14 7.64C7.84667 7.96 8.45333 8.30667 8.96 8.68C9.46667 9.05333 9.85333 9.49333 10.12 10C10.3867 10.4933 10.52 11.1133 10.52 11.86ZM24.8895 16H21.4895V10H16.3695V16H12.9495V1.72H16.3695V7.18H21.4895V1.72H24.8895V16ZM41.3825 8.84C41.3825 9.94667 41.2492 10.9533 40.9825 11.86C40.7158 12.7533 40.3025 13.5267 39.7425 14.18C39.1825 14.8333 38.4692 15.3333 37.6025 15.68C36.7358 16.0267 35.7092 16.2 34.5225 16.2C33.3492 16.2 32.3292 16.0267 31.4625 15.68C30.5958 15.32 29.8825 14.82 29.3225 14.18C28.7625 13.5267 28.3425 12.7467 28.0625 11.84C27.7958 10.9333 27.6625 9.92667 27.6625 8.82C27.6625 7.34 27.9025 6.05333 28.3825 4.96C28.8758 3.86667 29.6292 3.02 30.6425 2.42C31.6692 1.80667 32.9692 1.5 34.5425 1.5C36.1292 1.5 37.4225 1.80667 38.4225 2.42C39.4358 3.02 40.1825 3.87333 40.6625 4.98C41.1425 6.07333 41.3825 7.36 41.3825 8.84ZM31.2425 8.84C31.2425 9.77333 31.3558 10.58 31.5825 11.26C31.8092 11.9267 32.1625 12.44 32.6425 12.8C33.1358 13.16 33.7625 13.34 34.5225 13.34C35.3092 13.34 35.9425 13.16 36.4225 12.8C36.9025 12.44 37.2492 11.9267 37.4625 11.26C37.6892 10.58 37.8025 9.77333 37.8025 8.84C37.8025 7.42667 37.5492 6.32 37.0425 5.52C36.5492 4.72 35.7158 4.32 34.5425 4.32C33.7692 4.32 33.1358 4.50667 32.6425 4.88C32.1625 5.24 31.8092 5.76 31.5825 6.44C31.3558 7.10667 31.2425 7.90667 31.2425 8.84ZM48.9005 1.72C50.7271 1.72 52.0738 2.12 52.9405 2.92C53.8205 3.70667 54.2605 4.80667 54.2605 6.22C54.2605 6.86 54.1671 7.47333 53.9805 8.06C53.7938 8.63333 53.4805 9.14667 53.0405 9.6C52.6138 10.0533 52.0471 10.4133 51.3405 10.68C50.6471 10.9467 49.7871 11.08 48.7605 11.08H47.5605V16H44.1605V1.72H48.9005ZM48.7805 4.5H47.5605V8.3H48.4605C48.9271 8.3 49.3338 8.23333 49.6805 8.1C50.0405 7.96667 50.3205 7.75333 50.5205 7.46C50.7205 7.16667 50.8205 6.78667 50.8205 6.32C50.8205 5.73333 50.6538 5.28667 50.3205 4.98C49.9871 4.66 49.4738 4.5 48.7805 4.5Z",
		fill: "white"
	})
});
//#endregion
//#region app/commons/components/Navigation.tsx
function Navigation({ children }) {
	return /* @__PURE__ */ jsx(Nav, { children });
}
var Nav = styled.nav`
  padding: 1.5rem;
  background-color: #000000;
`;
//#endregion
//#region app/pages/shopping-cart/components/ShoppingCartNavigation.tsx
function ShoppingCartNavigation() {
	return /* @__PURE__ */ jsx(Navigation, { children: /* @__PURE__ */ jsx(Link, {
		to: "/",
		children: /* @__PURE__ */ jsx(SvgLogo, {})
	}) });
}
//#endregion
//#region app/commons/images/info.svg?react
var SvgInfo = (props) => /* @__PURE__ */ jsx("svg", {
	width: 14,
	height: 14,
	viewBox: "0 0 14 14",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...props,
	children: /* @__PURE__ */ jsx("path", {
		d: "M6 3.33333H7.33333V4.66667H6V3.33333ZM6 6H7.33333V10H6V6ZM6.66667 0C2.98667 0 0 2.98667 0 6.66667C0 10.3467 2.98667 13.3333 6.66667 13.3333C10.3467 13.3333 13.3333 10.3467 13.3333 6.66667C13.3333 2.98667 10.3467 0 6.66667 0ZM6.66667 12C3.72667 12 1.33333 9.60667 1.33333 6.66667C1.33333 3.72667 3.72667 1.33333 6.66667 1.33333C9.60667 1.33333 12 3.72667 12 6.66667C12 9.60667 9.60667 12 6.66667 12Z",
		fill: "black"
	})
});
//#endregion
//#region app/commons/images/un-checked.svg?react
var SvgUnChecked = (props) => /* @__PURE__ */ jsxs("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...props,
	children: [
		/* @__PURE__ */ jsx("rect", {
			width: 24,
			height: 24,
			rx: 8,
			fill: "white"
		}),
		/* @__PURE__ */ jsx("rect", {
			x: .5,
			y: .5,
			width: 23,
			height: 23,
			rx: 7.5,
			stroke: "black",
			strokeOpacity: .1
		}),
		/* @__PURE__ */ jsx("g", {
			clipPath: "url(#clip0_13996_1608)",
			children: /* @__PURE__ */ jsx("path", {
				d: "M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z",
				fill: "black",
				fillOpacity: .1
			})
		}),
		/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", {
			id: "clip0_13996_1608",
			children: /* @__PURE__ */ jsx("rect", {
				width: 24,
				height: 24,
				fill: "white"
			})
		}) })
	]
});
//#endregion
//#region app/commons/images/checked.svg?react
var SvgChecked = (props) => /* @__PURE__ */ jsxs("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...props,
	children: [
		/* @__PURE__ */ jsx("rect", {
			x: .5,
			y: .5,
			width: 23,
			height: 23,
			rx: 7.5,
			fill: "black",
			stroke: "black"
		}),
		/* @__PURE__ */ jsx("g", {
			clipPath: "url(#clip0_15251_38)",
			children: /* @__PURE__ */ jsx("path", {
				d: "M8.99997 16.17L4.82997 12L3.40997 13.41L8.99997 19L21 7L19.59 5.59L8.99997 16.17Z",
				fill: "white"
			})
		}),
		/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", {
			id: "clip0_15251_38",
			children: /* @__PURE__ */ jsx("rect", {
				width: 24,
				height: 24,
				fill: "white"
			})
		}) })
	]
});
//#endregion
//#region app/commons/components/Checkbox.tsx
function Checkbox({ labelText, checked, ...props }) {
	return /* @__PURE__ */ jsxs(CheckboxLabel, { children: [
		/* @__PURE__ */ jsx("input", {
			type: "checkbox",
			...props,
			checked
		}),
		checked ? /* @__PURE__ */ jsx(SvgChecked, {}) : /* @__PURE__ */ jsx(SvgUnChecked, {}),
		labelText && /* @__PURE__ */ jsx("span", { children: labelText })
	] });
}
var CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  input {
    display: none;
  }

  span {
    font-weight: 500;
    font-size: 12px;
  }
`;
//#endregion
//#region app/pages/shopping-cart/components/AllItemCheckbox.tsx
function AllItemCheckbox({ labelText, checked, onChangeAllSelected, allItemsId }) {
	const onChange = () => {
		onChangeAllSelected(allItemsId);
	};
	return /* @__PURE__ */ jsx(Checkbox, {
		checked,
		labelText,
		onChange
	});
}
//#endregion
//#region app/commons/images/minus.svg?react
var SvgMinus = (props) => /* @__PURE__ */ jsx("svg", {
	width: 14,
	height: 2,
	viewBox: "0 0 14 2",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...props,
	children: /* @__PURE__ */ jsx("path", {
		d: "M0.75 0.75C5.43629 0.75 8.06371 0.75 12.75 0.75",
		stroke: "#363636",
		strokeWidth: 1.5,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
});
//#endregion
//#region app/commons/images/plus.svg?react
var SvgPlus = (props) => /* @__PURE__ */ jsx("svg", {
	width: 14,
	height: 14,
	viewBox: "0 0 14 14",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...props,
	children: /* @__PURE__ */ jsx("path", {
		d: "M0.75 6.75H12.75M6.75 12.75V0.75",
		stroke: "#363636",
		strokeWidth: 1.5,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
});
//#endregion
//#region app/commons/utils.ts
function formatToKoreanPrice(price) {
	return `${price.toLocaleString("ko-KR")}원`;
}
//#endregion
//#region app/pages/shopping-cart/hooks/useCartItemQuantity.ts
var CART_ITEM_QUANTITY_RULE = {
	MAX: 99,
	MIN: 1,
	STEP: 1
};
function useCartItemQuantity(initialQuantity, itemId, updateItem) {
	const [quantity, setQuantity] = useState(initialQuantity);
	const canIncrease = quantity < CART_ITEM_QUANTITY_RULE.MAX;
	const canDecrease = quantity > CART_ITEM_QUANTITY_RULE.MIN;
	function increase() {
		if (!canIncrease) return;
		updateItem(itemId, { quantity: quantity + CART_ITEM_QUANTITY_RULE.STEP });
		setQuantity((prev) => prev + CART_ITEM_QUANTITY_RULE.STEP);
	}
	function decrease() {
		if (!canDecrease) return;
		updateItem(itemId, { quantity: quantity - CART_ITEM_QUANTITY_RULE.STEP });
		setQuantity((prev) => prev - CART_ITEM_QUANTITY_RULE.STEP);
	}
	return {
		quantity,
		increase,
		decrease,
		canIncrease,
		canDecrease
	};
}
//#endregion
//#region app/pages/shopping-cart/components/ItemCheckbox.tsx
function ItemCheckbox({ itemId, checked, onChangeSelected }) {
	const onChange = () => {
		onChangeSelected(!checked, itemId);
	};
	return /* @__PURE__ */ jsx(Checkbox, {
		checked,
		onChange
	});
}
//#endregion
//#region app/pages/shopping-cart/components/ShoppingCartItem.tsx
function ShoppingCartItem({ itemId, name, price, thumbnail, initialQuantity, checked, updateItem, removeItem, onChangeSelected }) {
	const { quantity, increase, decrease, canIncrease, canDecrease } = useCartItemQuantity(initialQuantity, itemId, updateItem);
	return /* @__PURE__ */ jsx(ShoppingCartItemContainer, { children: /* @__PURE__ */ jsxs("div", {
		className: "wrapper",
		children: [/* @__PURE__ */ jsxs(ShoppingCartItemHeader, { children: [/* @__PURE__ */ jsx(ItemCheckbox, {
			itemId,
			checked,
			onChangeSelected
		}), /* @__PURE__ */ jsx("button", {
			className: "item-delete",
			onClick: () => removeItem(itemId),
			children: "삭제"
		})] }), /* @__PURE__ */ jsxs(ShoppingCartItemBody, { children: [/* @__PURE__ */ jsx("img", {
			className: "thumbnail",
			src: thumbnail,
			alt: "상품 이미지"
		}), /* @__PURE__ */ jsxs(ShoppingCartItemInfo, { children: [
			/* @__PURE__ */ jsx("p", {
				className: "name",
				children: name
			}),
			/* @__PURE__ */ jsx("p", {
				className: "price",
				children: formatToKoreanPrice(price)
			}),
			/* @__PURE__ */ jsxs(ShoppingCartItemQuantity, { children: [
				/* @__PURE__ */ jsx("button", {
					type: "button",
					"aria-label": "수량 감소",
					onClick: decrease,
					disabled: !canDecrease,
					children: /* @__PURE__ */ jsx(SvgMinus, {})
				}),
				/* @__PURE__ */ jsx("p", {
					className: "quantity",
					children: quantity
				}),
				/* @__PURE__ */ jsx("button", {
					type: "button",
					"aria-label": "수량 증가",
					onClick: increase,
					disabled: !canIncrease,
					children: /* @__PURE__ */ jsx(SvgPlus, {})
				})
			] })
		] })] })]
	}) });
}
var ShoppingCartItemContainer = styled.li`
  list-style: none;
  display: flex;
  gap: 1rem;
  width: 100%;
  border-top: 1px solid #0000001a;

  .wrapper {
    width: 100%;
  }
`;
var ShoppingCartItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  width: 100%;

  button.item-delete {
    border: 1px solid #0000001a;
    background-color: #ffffff;
    border-radius: 4px;
    font-size: 12px;
  }
`;
var ShoppingCartItemBody = styled.div`
  display: flex;
  gap: 12px;

  img.thumbnail {
    height: 112px;
    width: 112px;
    border-radius: 8px;
  }
`;
var ShoppingCartItemInfo = styled.div`
  padding: 4px 0;
  .name {
    font-weight: 500;
    font-size: 12px;
    margin: 4px 0;
  }

  .price {
    font-weight: 700;
    font-style: Bold;
    font-size: 24px;
    margin-top: 0;
  }

  .quantity {
    font-weight: 500;
    font-size: 12px;
  }
`;
var ShoppingCartItemQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  button {
    display: flex;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 8px;
    border: 1px solid #0000001a;
    background: transparent;
    outline: none;
  }
`;
//#endregion
//#region app/pages/shopping-cart/components/ShoppingCartItemList.tsx
function ShoppingCartItemList({ cartItems, updateItem, removeItem, onChangeSelected, selectedItemId }) {
	return /* @__PURE__ */ jsx(ShoppingCartItemListContainer, { children: cartItems.map(({ product_id, quantity, product }) => {
		return /* @__PURE__ */ jsx(ShoppingCartItem, {
			itemId: product_id,
			checked: selectedItemId?.includes(product_id) ?? false,
			name: product.name,
			price: product.price,
			thumbnail: product.thumbnail,
			initialQuantity: quantity,
			updateItem,
			removeItem,
			onChangeSelected
		}, product_id);
	}) });
}
var ShoppingCartItemListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  width: 100%;
`;
//#endregion
//#region app/pages/shopping-cart/CartManager.ts
var CartManager = class {
	selectedItemId;
	cartItems;
	constructor(selectedItemId, cartItems) {
		this.selectedItemId = selectedItemId;
		this.cartItems = cartItems;
		this.selectedItemId = selectedItemId;
		this.cartItems = cartItems;
	}
	get selectedCartItems() {
		const selectedItemId = this.selectedItemId;
		if (selectedItemId) return this.cartItems.filter((item) => selectedItemId.includes(item.product_id));
		return [];
	}
	get allItemsId() {
		return this.cartItems.map((item) => item.product_id);
	}
	get allItemsSelected() {
		return this.allItemsId.length > 0 && this.allItemsId.every((id) => this.selectedItemId?.includes(id));
	}
};
//#endregion
//#region app/pages/shopping-cart/components/ShoppingCartItemGroup.tsx
function ShoppingCartItemGroup({ cartItems, updateItem, removeItem, onChangeSelected, onChangeAllSelected, selectedItemId }) {
	const cartManager = new CartManager(selectedItemId, cartItems);
	return /* @__PURE__ */ jsxs(ShoppingCartItemGroupContainer, { children: [/* @__PURE__ */ jsx(AllItemCheckbox, {
		labelText: "전체선택",
		checked: cartManager.allItemsSelected,
		onChangeAllSelected,
		allItemsId: cartManager.allItemsId
	}), /* @__PURE__ */ jsx(ShoppingCartItemList, {
		cartItems,
		updateItem,
		removeItem,
		onChangeSelected,
		selectedItemId
	})] });
}
var ShoppingCartItemGroupContainer = styled.div``;
//#endregion
//#region app/pages/shopping-cart/components/ShoppingCartOrderSummary.tsx
function ShoppingCartOrderSummary({ total, delivery, grandTotal }) {
	return /* @__PURE__ */ jsxs(ShoppingCartOrderSummaryContainer, { children: [/* @__PURE__ */ jsxs(ShoppingCartOrderSummaryList, { children: [/* @__PURE__ */ jsxs("div", {
		className: "receipt-item",
		children: [/* @__PURE__ */ jsx("dt", { children: "주문 금액" }), /* @__PURE__ */ jsx("dd", { children: formatToKoreanPrice(total) })]
	}), /* @__PURE__ */ jsxs("div", {
		className: "receipt-item",
		children: [/* @__PURE__ */ jsx("dt", { children: "배송비" }), /* @__PURE__ */ jsx("dd", { children: formatToKoreanPrice(delivery) })]
	})] }), /* @__PURE__ */ jsx(ShoppingCartOrderSummaryResult, { children: /* @__PURE__ */ jsxs("div", {
		className: "receipt-item",
		children: [/* @__PURE__ */ jsx("dt", { children: "총 결제 금액" }), /* @__PURE__ */ jsx("dd", { children: formatToKoreanPrice(grandTotal) })]
	}) })] });
}
var ShoppingCartOrderSummaryContainer = styled.div`
  width: 100%;
`;
var ShoppingCartOrderSummaryList = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-top: 1px solid #0000001a;
  padding: 1.5rem 0;
  margin: 0;
  .receipt-item {
    display: flex;
    justify-content: space-between;

    dt {
      font-weight: 700;
      font-style: Bold;
      font-size: 16px;
    }
    dd {
      font-weight: 700;
      font-style: Bold;
      font-size: 24px;
    }
  }
`;
var ShoppingCartOrderSummaryResult = styled(ShoppingCartOrderSummaryList)``;
//#endregion
//#region app/commons/styles/Button.tsx
var Button = styled.button`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #000000;
  font-weight: 700;
  padding: 1.5rem 0;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  width: 100%;
  max-width: 768px;

  :disabled {
    background-color: #bebebe;
    border: none;
    cursor: default;
  }
`;
//#endregion
//#region app/pages/shopping-cart/components/OrderCheckButton.tsx
function OrderCheckButton(props) {
	return /* @__PURE__ */ jsx(Button, {
		type: "button",
		...props,
		children: "주문 확인"
	});
}
//#endregion
//#region app/pages/shopping-cart/CartAggregate.ts
var CartAggregate = class {
	items;
	pricing;
	constructor(items, PricingClass) {
		this.items = items;
		this.pricing = new PricingClass(items);
	}
	get totalItems() {
		return this.items.length;
	}
	get totalQuantity() {
		return this.items.reduce((acc, item) => acc + item.quantity, 0);
	}
	get total() {
		return this.pricing.total;
	}
	get delivery() {
		return this.totalItems ? this.pricing.delivery : 0;
	}
	get grandTotal() {
		return this.pricing.grandTotal;
	}
};
//#endregion
//#region app/pages/shopping-cart/CartPricing.ts
var FREE_DELIVERY_THRESHOLD = 1e5;
var DELIVERY_FEE = 3e3;
var CartPricing = class {
	items;
	constructor(items) {
		this.items = items;
	}
	get total() {
		return this.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
	}
	get delivery() {
		return this.total >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
	}
	get grandTotal() {
		return this.total + this.delivery;
	}
};
//#endregion
//#region app/pages/shopping-cart/storages/selected-item-storage.ts
var KEY = "cart-selected-items";
var SelectedItemLocalStorage = class {
	get() {
		const stored = localStorage.getItem(KEY);
		return stored ? JSON.parse(stored) : null;
	}
	save(value) {
		localStorage.setItem(KEY, JSON.stringify(value));
	}
};
//#endregion
//#region app/constants.ts
var BASE_URL = "https://shopping-cart-full-stack-production-62c3.up.railway.app/";
//#endregion
//#region app/pages/shopping-cart/api.ts
async function getCartItems() {
	return await (await fetch(`${BASE_URL}/api/cart/`)).json();
}
async function deleteCartItem(id) {
	await fetch(`${BASE_URL}/api/cart/items/${id}/`, { method: "DELETE" });
}
async function updateCartItem(id, body) {
	return await (await fetch(`${BASE_URL}/api/cart/items/${id}/`, {
		method: "PATCH",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body)
	})).json();
}
//#endregion
//#region app/pages/shopping-cart/hooks/useCartItems.ts
function useCartItems() {
	const [items, setItems] = useState([]);
	const [fetchStatus, setFetchStatus] = useState("idle");
	const getItems = async () => {
		setFetchStatus("loading");
		try {
			setItems(await getCartItems());
			setFetchStatus("success");
		} catch {
			setFetchStatus("error");
		}
	};
	const removeItem = async (itemId) => {
		await deleteCartItem(itemId);
		setItems((prev) => prev.filter((item) => item.product_id !== itemId));
	};
	const updateItem = async (itemId, body) => {
		const data = await updateCartItem(itemId, body);
		setItems((prev) => prev.map((item) => item.product_id === itemId ? {
			...item,
			...data
		} : item));
		return data;
	};
	useEffect(function initialCartItems() {
		getItems();
	}, []);
	return {
		items,
		fetchStatus,
		removeItem,
		updateItem
	};
}
//#endregion
//#region app/pages/shopping-cart/hooks/useCartItemSelected.ts
function useCartItemSelected(storage) {
	const [selectedItemId, setSelectedItemId] = useState(() => {
		if (typeof window === "undefined") return null;
		return storage.get();
	});
	const initSelectedItemId = (allCartItemsId) => {
		storage.save(allCartItemsId);
		setSelectedItemId(allCartItemsId);
	};
	const onChangeSelected = (checked, id) => {
		const prev = selectedItemId ?? [];
		const newSelectedItem = checked ? [...prev, id] : prev.filter((itemId) => itemId !== id);
		storage.save(newSelectedItem);
		setSelectedItemId(newSelectedItem);
	};
	const onChangeAllSelected = (allCartItemsId) => {
		const newSelectedItem = (selectedItemId ?? []).length === allCartItemsId.length ? [] : allCartItemsId;
		storage.save(newSelectedItem);
		setSelectedItemId(newSelectedItem);
	};
	return {
		selectedItemId,
		initSelectedItemId,
		onChangeSelected,
		onChangeAllSelected
	};
}
//#endregion
//#region app/pages/shopping-cart/components/ShoppingCartSectionSkeleton.tsx
function ShoppingCartSectionSkeleton() {
	return /* @__PURE__ */ jsxs(SkeletonContainer, { children: [
		/* @__PURE__ */ jsx(SkeletonBlock, {
			width: "160px",
			height: "28px"
		}),
		/* @__PURE__ */ jsx(SkeletonBlock, {
			width: "200px",
			height: "16px",
			style: { marginTop: "8px" }
		}),
		[...Array(3)].map((_, i) => /* @__PURE__ */ jsxs(SkeletonItem, { children: [/* @__PURE__ */ jsx(SkeletonBlock, {
			width: "80px",
			height: "80px"
		}), /* @__PURE__ */ jsxs("div", {
			style: {
				flex: 1,
				display: "flex",
				flexDirection: "column",
				gap: "8px"
			},
			children: [
				/* @__PURE__ */ jsx(SkeletonBlock, {
					width: "60%",
					height: "16px"
				}),
				/* @__PURE__ */ jsx(SkeletonBlock, {
					width: "40%",
					height: "14px"
				}),
				/* @__PURE__ */ jsx(SkeletonBlock, {
					width: "30%",
					height: "14px"
				})
			]
		})] }, i)),
		/* @__PURE__ */ jsx(SkeletonBlock, {
			width: "100%",
			height: "80px",
			style: { marginTop: "16px" }
		}),
		/* @__PURE__ */ jsx(SkeletonBlock, {
			width: "100%",
			height: "48px",
			style: {
				marginTop: "12px",
				borderRadius: "8px"
			}
		})
	] });
}
var shimmer = `
  @keyframes shimmer {
    0% { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }
`;
var SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  gap: 16px;
`;
var SkeletonBlock = styled.div`
  ${shimmer}
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 4px;
  background: linear-gradient(90deg, #e8e8e8 25%, #f5f5f5 50%, #e8e8e8 75%);
  background-size: 800px 100%;
  animation: shimmer 1.4s infinite linear;
`;
var SkeletonItem = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
`;
//#endregion
//#region app/pages/shopping-cart/components/ShoppingCartSection.tsx
function ShoppingCartSection() {
	const navigate = useNavigate();
	const storage = new SelectedItemLocalStorage();
	const { items: cartItems, fetchStatus, removeItem, updateItem } = useCartItems();
	const { selectedItemId, initSelectedItemId, onChangeSelected, onChangeAllSelected } = useCartItemSelected(storage);
	if (fetchStatus === "success" && selectedItemId === null) initSelectedItemId(cartItems.map((item) => item.product_id));
	const goToOrderCheckPage = () => {
		const aggregate = new CartAggregate(new CartManager(selectedItemId, cartItems).selectedCartItems, CartPricing);
		navigate("/cart/check/", { state: {
			totalItems: aggregate.totalItems,
			totalQuantity: aggregate.totalQuantity,
			totalPrice: aggregate.grandTotal
		} });
	};
	return /* @__PURE__ */ jsxs(ShoppingCartSectionContainer, { children: [
		fetchStatus === "loading" && /* @__PURE__ */ jsx(ShoppingCartSectionSkeleton, {}),
		fetchStatus === "success" && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(ShoppingCartSectionHeader, { itemCount: cartItems.length }), /* @__PURE__ */ jsx(ShoppingCartSectionContent, {
			cartItems,
			goToOrderCheck: goToOrderCheckPage,
			updateItem,
			removeItem,
			onChangeSelected,
			onChangeAllSelected,
			selectedItemId
		})] }),
		fetchStatus === "error" && /* @__PURE__ */ jsx("div", { children: "error.." })
	] });
}
function ShoppingCartSectionHeader({ itemCount }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "heading",
		children: [/* @__PURE__ */ jsx("h2", {
			className: "title",
			children: "장바구니"
		}), itemCount > 0 && /* @__PURE__ */ jsxs("p", {
			className: "sub-text",
			children: [
				"현재 ",
				itemCount,
				"종류의 상품이 담겨있습니다."
			]
		})]
	});
}
function ShoppingCartSectionContent({ cartItems, goToOrderCheck, updateItem, removeItem, onChangeSelected, onChangeAllSelected, selectedItemId }) {
	const aggregate = new CartAggregate(new CartManager(selectedItemId, cartItems).selectedCartItems, CartPricing);
	return /* @__PURE__ */ jsxs(Fragment, { children: [cartItems.length ? /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(ShoppingCartItemGroup, {
			cartItems,
			updateItem,
			removeItem,
			onChangeSelected,
			onChangeAllSelected,
			selectedItemId
		}),
		/* @__PURE__ */ jsxs("p", {
			className: "sub-text icon-text",
			children: [/* @__PURE__ */ jsx(SvgInfo, { "aria-label": "정보" }), "총 주문 금액이 100,000원 이상일 경우 무료 배송됩니다."]
		}),
		/* @__PURE__ */ jsx(ShoppingCartOrderSummary, {
			total: aggregate.total,
			delivery: aggregate.delivery,
			grandTotal: aggregate.grandTotal
		})
	] }) : /* @__PURE__ */ jsx(ShoppingCartNoItemsContent, { children: /* @__PURE__ */ jsx("p", { children: "장바구니에 담은 상품이 없습니다." }) }), /* @__PURE__ */ jsx(OrderCheckButton, {
		disabled: !Boolean(aggregate.totalItems),
		onClick: goToOrderCheck
	})] });
}
var ShoppingCartSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.5rem;
  margin-bottom: 4rem;
  overflow: scroll;

  .heading {
    margin: 2rem 0;
  }

  .title {
    font-size: 24px;
    font-weight: 700;
    margin: 12px 0;
  }

  .sub-text {
    font-weight: 500;
    font-size: 12px;
  }

  .icon-text {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;
var ShoppingCartNoItemsContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
//#endregion
//#region app/pages/shopping-cart/ShoppingCartPage.tsx
var ShoppingCartPage_exports = /* @__PURE__ */ __exportAll({ default: () => ShoppingCartPage_default });
var ShoppingCartPage_default = UNSAFE_withComponentProps(function ShoppingCartPage() {
	return /* @__PURE__ */ jsxs(ShoppingCartPageContainer, { children: [/* @__PURE__ */ jsx(ShoppingCartNavigation, {}), /* @__PURE__ */ jsx(ShoppingCartSection, {})] });
});
var ShoppingCartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;
//#endregion
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
var OrderCheckPage_exports = /* @__PURE__ */ __exportAll({ default: () => OrderCheckPage_default });
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
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-C8OJAmv1.js",
		"imports": ["/assets/jsx-runtime-CNHsPo_i.js", "/assets/constants-D7t0_D17.js"],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/root-k_QDQUHi.js",
			"imports": [
				"/assets/jsx-runtime-CNHsPo_i.js",
				"/assets/constants-D7t0_D17.js",
				"/assets/emotion-styled.browser.esm-a0sxEo5W.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/shopping-cart/ShoppingCartPage": {
			"id": "pages/shopping-cart/ShoppingCartPage",
			"parentId": "root",
			"path": "cart/",
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/ShoppingCartPage-D5Nak5Pf.js",
			"imports": [
				"/assets/jsx-runtime-CNHsPo_i.js",
				"/assets/Button-CsVC_2IU.js",
				"/assets/constants-D7t0_D17.js",
				"/assets/emotion-styled.browser.esm-a0sxEo5W.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/shopping-cart/OrderCheckPage": {
			"id": "pages/shopping-cart/OrderCheckPage",
			"parentId": "root",
			"path": "cart/check/",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/OrderCheckPage-Dcv8ccQS.js",
			"imports": [
				"/assets/jsx-runtime-CNHsPo_i.js",
				"/assets/Button-CsVC_2IU.js",
				"/assets/emotion-styled.browser.esm-a0sxEo5W.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-46190734.js",
	"version": "46190734",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var assetsBuildDirectory = "build/client";
var basename = "/";
var future = {
	"unstable_optimizeDeps": false,
	"v8_passThroughRequests": false,
	"v8_trailingSlashAwareDataRequests": false,
	"unstable_previewServerPrerendering": false,
	"v8_middleware": false,
	"v8_splitRouteModules": false,
	"v8_viteEnvironmentApi": false
};
var ssr = true;
var isSpaMode = false;
var prerender = [];
var routeDiscovery = {
	"mode": "lazy",
	"manifestPath": "/__manifest"
};
var publicPath = "/";
var entry = { module: entry_server_node_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"pages/shopping-cart/ShoppingCartPage": {
		id: "pages/shopping-cart/ShoppingCartPage",
		parentId: "root",
		path: "cart/",
		index: true,
		caseSensitive: void 0,
		module: ShoppingCartPage_exports
	},
	"pages/shopping-cart/OrderCheckPage": {
		id: "pages/shopping-cart/OrderCheckPage",
		parentId: "root",
		path: "cart/check/",
		index: void 0,
		caseSensitive: void 0,
		module: OrderCheckPage_exports
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
