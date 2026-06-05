import{A as e,D as t,T as n,i as r,t as i}from"./jsx-runtime-CKWjfaKp.js";import{t as a}from"./emotion-styled.browser.esm-E-JjhDvg.js";import{n as o,t as s}from"./Button-Dl4tcfyu.js";e();var c=i(),l=e=>(0,c.jsx)(`svg`,{width:25,height:23,viewBox:`0 0 25 23`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,c.jsx)(`path`,{d:`M1.9209 11.3537L0.749595 10.4167L-3.8743e-05 11.3537L0.749595 12.2908L1.9209 11.3537ZM22.7542 12.8537C23.5827 12.8537 24.2542 12.1821 24.2542 11.3537C24.2542 10.5253 23.5827 9.85371 22.7542 9.85371V12.8537ZM9.08293 -2.98023e-07L0.749595 10.4167L3.0922 12.2908L11.4255 1.87408L9.08293 -2.98023e-07ZM0.749595 12.2908L9.08293 22.7074L11.4255 20.8333L3.0922 10.4167L0.749595 12.2908ZM1.9209 12.8537H22.7542V9.85371H1.9209V12.8537Z`,fill:`white`})});function u(){return(0,c.jsx)(o,{children:(0,c.jsx)(r,{to:`/cart/`,children:(0,c.jsx)(l,{})})})}function d(){return(0,c.jsx)(s,{type:`button`,disabled:!0,children:`결제 하기`})}function f(){let{totalItems:e,totalQuantity:t,totalPrice:r}=n().state;return(0,c.jsxs)(p,{children:[(0,c.jsx)(`h2`,{className:`title`,children:`주문 확인`}),(0,c.jsxs)(`p`,{className:`order-summary-sub-text`,children:[`총 `,e,`종류의 상품 `,t,`개를 주문합니다.`]}),(0,c.jsx)(`p`,{className:`order-summary-sub-text`,children:`최종 결제 금액을 확인해 주세요.`}),(0,c.jsx)(`p`,{className:`total-price-title`,children:`총 결제 금액`}),(0,c.jsxs)(`p`,{className:`total-price`,children:[r.toLocaleString(`ko-KR`),`원`]}),(0,c.jsx)(d,{})]})}var p=a.section`
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
`,m=t(function(){return(0,c.jsxs)(h,{children:[(0,c.jsx)(u,{}),(0,c.jsx)(f,{})]})}),h=a.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;export{m as default};