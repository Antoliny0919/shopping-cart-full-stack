import { Global, css } from "@emotion/react";
import { Outlet, Scripts } from "react-router";

const GlobalStyle = css`
  body {
    margin: 0;
  }
`;

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Global styles={GlobalStyle}></Global>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
