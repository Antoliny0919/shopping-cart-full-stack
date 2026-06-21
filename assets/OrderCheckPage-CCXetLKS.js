import{A as e,D as t,E as n,I as r,i,t as a}from"./jsx-runtime-D-2VctdM.js";import{t as o}from"./constants-zTYcvJMj.js";import{i as s,t as c}from"./emotion-styled.browser.esm-fClFijGW.js";import{a as l,i as u,n as d,r as f,t as p}from"./Toast-BI5YToN6.js";import{i as m,n as h,r as g,t as _}from"./Navigation-Tb435_IF.js";var v=r(e()),y=a(),ee=e=>(0,y.jsx)(`svg`,{width:25,height:23,viewBox:`0 0 25 23`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,y.jsx)(`path`,{d:`M1.9209 11.3537L0.749595 10.4167L-3.8743e-05 11.3537L0.749595 12.2908L1.9209 11.3537ZM22.7542 12.8537C23.5827 12.8537 24.2542 12.1821 24.2542 11.3537C24.2542 10.5253 23.5827 9.85371 22.7542 9.85371V12.8537ZM9.08293 -2.98023e-07L0.749595 10.4167L3.0922 12.2908L11.4255 1.87408L9.08293 -2.98023e-07ZM0.749595 12.2908L9.08293 22.7074L11.4255 20.8333L3.0922 10.4167L0.749595 12.2908ZM1.9209 12.8537H22.7542V9.85371H1.9209V12.8537Z`,fill:`white`})});function te({item:e}){let{quantity:t,product:n}=e;return(0,y.jsx)(b,{children:(0,y.jsx)(`div`,{className:`wrapper`,children:(0,y.jsxs)(x,{children:[(0,y.jsx)(`img`,{className:`thumbnail`,src:`https://shopping-cart-full-stack-production-62c3.up.railway.app${n.thumbnail}`,alt:`${n.name} 상품 이미지`}),(0,y.jsxs)(S,{children:[(0,y.jsx)(`p`,{className:`name`,children:n.name}),(0,y.jsx)(`p`,{className:`price`,children:m(n.price)}),(0,y.jsxs)(`p`,{className:`quantity`,children:[t,` 개`]})]})]})})})}var b=c.li`
  list-style: none;
  display: flex;
  gap: 1rem;
  width: 100%;
  padding: 8px 0;
  border-top: 1px solid #0000001a;

  .wrapper {
    width: 100%;
  }
`,x=c.div`
  display: flex;
  gap: 1.5rem;

  img.thumbnail {
    height: 112px;
    width: 112px;
    border-radius: 8px;
  }
`,S=c.div`
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
`;function C({items:e}){return(0,y.jsx)(w,{children:e.map(e=>(0,y.jsx)(te,{item:e}))})}var w=c.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  width: 100%;
`;function T({price:e,couponDiscount:t,deliveryFee:n,totalPrice:r}){return(0,y.jsxs)(E,{children:[(0,y.jsxs)(D,{children:[(0,y.jsxs)(`div`,{className:`receipt-item`,children:[(0,y.jsx)(`dt`,{children:`주문 금액`}),(0,y.jsx)(`dd`,{children:m(e)})]}),(0,y.jsxs)(`div`,{className:`receipt-item`,children:[(0,y.jsx)(`dt`,{children:`쿠폰 할인 금액`}),(0,y.jsx)(`dd`,{children:m(t)})]}),(0,y.jsxs)(`div`,{className:`receipt-item`,children:[(0,y.jsx)(`dt`,{children:`배송비`}),(0,y.jsx)(`dd`,{children:m(n)})]})]}),(0,y.jsx)(O,{children:(0,y.jsxs)(`div`,{className:`receipt-item`,children:[(0,y.jsx)(`dt`,{children:`총 결제 금액`}),(0,y.jsx)(`dd`,{children:m(r)})]})})]})}var E=c.div`
  width: 100%;
`,D=c.dl`
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
`,O=c(D)``;function k({isOpen:e,onClose:t,children:n}){let r=(0,v.useRef)(null);return(0,v.useEffect)(()=>{let t=r.current;if(t)return e?(t.showModal(),document.body.style.overflow=`hidden`):(t.close(),document.body.style.overflow=``),()=>{document.body.style.overflow=``}},[e]),(0,y.jsx)(M,{ref:r,children:(0,y.jsxs)(j,{children:[(0,y.jsx)(A,{onClick:t,"aria-label":`닫기`,children:`✕`}),n]})})}var A=c.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  color: #333333;
`,j=c.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 100%;
`,M=c.dialog`
  width: 320px;
  height: 614px;
  border-radius: 8px;
  border: none;
  padding: 24px 32px;
  background: #ffffff;
  margin: auto;

  &::backdrop {
    background: #00000059;
  }
`;function N({children:e}){return(0,y.jsxs)(P,{children:[(0,y.jsx)(l,{"aria-label":`정보`}),e]})}var P=c.p`
  margin: 0;
  font-weight: 500;
  font-size: 12px;
  margin: 2px 0;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
`;function F({item:e,isSelect:t,onToggle:n}){return(0,y.jsx)(z,{isActive:e.is_active,children:(0,y.jsxs)(I,{children:[(0,y.jsx)(L,{children:(0,y.jsx)(u,{labelText:e.name,onChange:n,checked:t})}),(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(R,{children:[`만료일: `,e.expiration_date]}),(0,y.jsx)(R,{children:e.description})]})]})},e.id)}var I=c.div`
  display: flex;
  flex-direction: column;
`,L=c.div`
  margin: 8px 0;
`,R=c.p`
  font-weight: 500;
  font-size: 12px;
  margin: 4px 0;
`,z=c.li`
  list-style: none;
  display: flex;
  gap: 12px;
  width: 100%;
  width: 318px;
  height: 82px;
  border-top: 1px solid #0000001a;
  opacity: ${e=>e.isActive?1:.3};
`;async function ne(e){let t;try{t=await fetch(`${o}/api/orders/${e}/`)}catch{throw new f}if(!t.ok){let e=await t.json();throw Error(e.message)}return t.json()}async function B(e,t){let n;try{n=await fetch(`${o}/api/orders/${e}/`,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t)})}catch{throw new f}if(!n.ok){let e=await n.json();throw Error(e.message)}return await n.json()}async function V(e){let t;try{t=await fetch(`${o}/api/orders/${e}/coupons/`)}catch{throw new f}if(!t.ok){let e=await t.json();throw Error(e.message)}return t.json()}async function H(e,t){let n;try{n=await fetch(`${o}/api/orders/${e}/discount-summary/`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t)})}catch{throw new f}if(!n.ok){let e=await n.json();throw Error(e.message)}return await n.json()}function U(e,t,n){let[r,i]=(0,v.useState)(t),[a,o]=(0,v.useState)(n),[s,c]=(0,v.useState)(null);async function l(t){let n=r.includes(t.id)?r.filter(e=>e!==t.id):[...r,t.id];try{let t=await H(e,{selected_coupons:n});i(n),o(t.discount_price)}catch(e){e instanceof Error&&c(e.message)}}return{localSelected:r,discountPrice:a,errorMessage:s,setErrorMessage:c,onToggle:l}}function W({orderId:e,selectedCoupons:t,coupons:n,initialDiscountPrice:r,updateOrder:i,isOpen:a,onClose:o}){let{localSelected:s,discountPrice:c,errorMessage:l,setErrorMessage:u,onToggle:d}=U(e,t,r);return(0,y.jsxs)(k,{isOpen:a,onClose:o,children:[l&&(0,y.jsx)(p,{message:l,onClose:()=>u(null)}),(0,y.jsx)(G,{children:`쿠폰을 선택해 주세요`}),(0,y.jsx)(N,{children:`쿠폰은 최대 2개까지 사용할 수 있습니다.`}),(0,y.jsx)(K,{children:n.map(e=>(0,y.jsx)(F,{item:e,onToggle:()=>d(e),isSelect:s.includes(e.id)},e.id))}),(0,y.jsxs)(q,{onClick:()=>{i({selected_coupons:s}),o()},children:[`총 `,m(c),` 할인 쿠폰 사용하기`]})]})}var G=c.h2`
  font-weight: 700;
  font-size: 18px;
  margin: 0;
`,K=c.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  width: 100%;
  overflow: scroll;
`,q=c(h)`
  padding: 12px 0;
  border-radius: 5px;
  margin-top: auto;
`;function J(e){let[t,n]=(0,v.useState)(`idle`),[r,i]=(0,v.useState)(null);async function a(t){i(await B(e,t))}return(0,v.useEffect)(function(){async function t(){n(`loading`);try{i(await ne(e)),n(`success`)}catch{n(`error`)}}t()},[e]),{loadStatus:t,order:r,updateOrder:a}}function Y(e){let[t,n]=(0,v.useState)([]);async function r(){n(await V(e))}return{coupons:t,getCoupons:r}}function X(){return(0,y.jsx)(re,{children:(0,y.jsx)(ie,{})})}var Z=s`
  to { transform: rotate(360deg); }
`,re=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 4rem 0;
`,ie=c.div`
  width: 40px;
  height: 40px;
  border: 4px solid #e8e8e8;
  border-top-color: #333;
  border-radius: 50%;
  animation: ${Z} 0.8s linear infinite;
`;function ae({orderId:e}){let[t,r]=(0,v.useState)(!1),{loadStatus:i,order:a,updateOrder:o}=J(e),{coupons:s,getCoupons:c}=Y(e),f=n(),p=a?.selected_items.length??0,m=a?.selected_items.reduce((e,t)=>e+t.quantity,0)??0;function h(){a&&f(`/cart/check/purchase/`,{state:{orderItemsTypeLength:p,orderItemsLength:m,totalPrice:a.price_summary.total_price}})}return(0,y.jsxs)(oe,{children:[i===`loading`&&(0,y.jsx)(X,{}),i===`success`&&a&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(se,{children:`주문 확인`}),(0,y.jsxs)(Q,{children:[`총 `,p,`종류의 상품 `,m,`개를 주문합니다.`]}),(0,y.jsx)(Q,{children:`최종 결제 금액을 확인해 주세요.`}),(0,y.jsx)(C,{items:a.selected_items}),(0,y.jsx)(ce,{onClick:async()=>{r(!0),await c()},children:`쿠폰 적용`}),(0,y.jsx)(W,{orderId:e,selectedCoupons:a.selected_coupons,coupons:s,initialDiscountPrice:a.price_summary.discount_price,updateOrder:o,isOpen:t,onClose:()=>r(!1)}),(0,y.jsxs)(le,{children:[(0,y.jsx)(`p`,{children:`배송 정보`}),(0,y.jsx)(u,{labelText:`제주도 및 도서 산간 지역`,checked:a.hard_delivery_place,onChange:()=>o({hard_delivery_place:!a.hard_delivery_place})})]}),(0,y.jsxs)(Q,{className:`icon-text`,children:[(0,y.jsx)(l,{"aria-label":`정보`}),`총 주문 금액이 100,000원 이상일 경우 무료 배송됩니다.`]}),(0,y.jsx)(T,{price:a.price_summary.order_price,couponDiscount:a.price_summary.discount_price,deliveryFee:a.price_summary.delivery_price,totalPrice:a.price_summary.total_price}),(0,y.jsx)(g,{type:`button`,onClick:h,children:`결제하기`})]}),i===`error`&&(0,y.jsx)(d,{})]})}var oe=c.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.5rem;
  margin-bottom: 4rem;
  overflow: scroll;

  .icon-text {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 8px;
  }
`,se=c.h2`
  font-weight: 700;
  font-size: 24px;
`,Q=c.p`
  margin: 0;
  font-weight: 500;
  font-size: 12px;
  margin: 2px 0;
`,ce=c.button`
  background-color: transparent;
  font-weight: 700;
  padding: 1rem 0;
  font-size: 16px;
  text-align: center;
  color: #333333bf;
  border: solid #333333bf 1px;
  border-radius: 5px;
  width: 100%;
  max-width: 768px;
`,le=c.div`
  padding: 2rem 0;
  p {
    font-weight: 700;
    font-size: 16px;
  }
`,$=t(function({params:e}){return(0,y.jsxs)(ue,{children:[(0,y.jsx)(_,{children:(0,y.jsx)(i,{to:`/cart/`,children:(0,y.jsx)(ee,{})})}),(0,y.jsx)(ae,{orderId:e.id})]})}),ue=c.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;export{$ as default};