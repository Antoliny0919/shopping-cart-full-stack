import { Outlet, Scripts, UNSAFE_withComponentProps } from "react-router";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/root.tsx
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
export { root_default as default };
