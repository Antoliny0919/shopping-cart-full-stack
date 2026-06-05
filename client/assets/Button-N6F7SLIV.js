import styled from "@emotion/styled";
import { jsx } from "react/jsx-runtime";
//#region app/commons/components/Navigation.tsx
function Navigation({ children }) {
	return /* @__PURE__ */ jsx(Nav, { children });
}
var Nav = styled.nav`
  padding: 1.5rem;
  background-color: #000000;
`;
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
export { Navigation as n, Button as t };
