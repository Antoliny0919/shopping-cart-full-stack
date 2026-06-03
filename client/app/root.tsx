import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import { Outlet, Scripts } from "react-router";

const GlobalStyle = css`
  body {
    margin: 0;
  }

  button {
    cursor: pointer;
    outline: none;
  }
`;

export default function App() {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Global styles={GlobalStyle}></Global>
        <MobileAppView>
          <Outlet />
          <Scripts />
        </MobileAppView>
      </body>
    </html>
  );
}

const MobileAppView = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;
