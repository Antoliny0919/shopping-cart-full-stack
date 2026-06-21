import{A as e,D as t,E as n,I as r,i,t as a}from"./jsx-runtime-D-2VctdM.js";import{t as o}from"./constants-zTYcvJMj.js";import{i as s,t as c}from"./emotion-styled.browser.esm-fClFijGW.js";import{a as l,i as u,n as d,r as f,t as p}from"./Toast-BI5YToN6.js";import{i as m,n as h,r as g,t as _}from"./Navigation-Tb435_IF.js";var v=r(e()),y=a(),b=e=>(0,y.jsx)(`svg`,{width:25,height:23,viewBox:`0 0 25 23`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,y.jsx)(`path`,{d:`M1.9209 11.3537L0.749595 10.4167L-3.8743e-05 11.3537L0.749595 12.2908L1.9209 11.3537ZM22.7542 12.8537C23.5827 12.8537 24.2542 12.1821 24.2542 11.3537C24.2542 10.5253 23.5827 9.85371 22.7542 9.85371V12.8537ZM9.08293 -2.98023e-07L0.749595 10.4167L3.0922 12.2908L11.4255 1.87408L9.08293 -2.98023e-07ZM0.749595 12.2908L9.08293 22.7074L11.4255 20.8333L3.0922 10.4167L0.749595 12.2908ZM1.9209 12.8537H22.7542V9.85371H1.9209V12.8537Z`,fill:`white`})});function x({item:e}){let{quantity:t,product:n}=e;return(0,y.jsx)(S,{children:(0,y.jsx)(`div`,{className:`wrapper`,children:(0,y.jsxs)(C,{children:[(0,y.jsx)(`img`,{className:`thumbnail`,src:`https://shopping-cart-full-stack-production-62c3.up.railway.app${n.thumbnail}`,alt:`${n.name} 상품 이미지`}),(0,y.jsxs)(w,{children:[(0,y.jsx)(`p`,{className:`name`,children:n.name}),(0,y.jsx)(`p`,{className:`price`,children:m(n.price)}),(0,y.jsxs)(`p`,{className:`quantity`,children:[t,` 개`]})]})]})})})}var S=c.li`
  list-style: none;
  display: flex;
  gap: 1rem;
  width: 100%;
  padding: 8px 0;
  border-top: 1px solid #0000001a;

  .wrapper {
    width: 100%;
  }
`,C=c.div`
  display: flex;
  gap: 1.5rem;

  img.thumbnail {
    height: 112px;
    width: 112px;
    border-radius: 8px;
  }
`,w=c.div`
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
`;function T({items:e}){return(0,y.jsx)(E,{children:e.map(e=>(0,y.jsx)(x,{item:e}))})}var E=c.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  width: 100%;
`;function D({price:e,couponDiscount:t,deliveryFee:n,totalPrice:r}){return(0,y.jsxs)(ee,{children:[(0,y.jsxs)(O,{children:[(0,y.jsxs)(`div`,{className:`receipt-item`,children:[(0,y.jsx)(`dt`,{children:`주문 금액`}),(0,y.jsx)(`dd`,{children:m(e)})]}),(0,y.jsxs)(`div`,{className:`receipt-item`,children:[(0,y.jsx)(`dt`,{children:`쿠폰 할인 금액`}),(0,y.jsx)(`dd`,{children:m(t)})]}),(0,y.jsxs)(`div`,{className:`receipt-item`,children:[(0,y.jsx)(`dt`,{children:`배송비`}),(0,y.jsx)(`dd`,{children:m(n)})]})]}),(0,y.jsx)(k,{children:(0,y.jsxs)(`div`,{className:`receipt-item`,children:[(0,y.jsx)(`dt`,{children:`총 결제 금액`}),(0,y.jsx)(`dd`,{children:m(r)})]})})]})}var ee=c.div`
  width: 100%;
`,O=c.dl`
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
`,k=c(O)``;function A({isOpen:e,onClose:t,children:n}){let r=(0,v.useRef)(null);return(0,v.useEffect)(()=>{let t=r.current;if(t)return e?(t.showModal(),document.body.style.overflow=`hidden`):(t.close(),document.body.style.overflow=``),()=>{document.body.style.overflow=``}},[e]),(0,y.jsx)(N,{ref:r,children:(0,y.jsxs)(M,{children:[(0,y.jsx)(j,{onClick:t,"aria-label":`닫기`,children:`✕`}),n]})})}var j=c.button`
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
`,M=c.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 100%;
`,N=c.dialog`
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
`;function P({children:e}){return(0,y.jsxs)(F,{children:[(0,y.jsx)(l,{"aria-label":`정보`}),e]})}var F=c.p`
  margin: 0;
  font-weight: 500;
  font-size: 12px;
  margin: 2px 0;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
`;function I({item:e,isSelect:t,onToggle:n}){return(0,y.jsx)(B,{isActive:e.is_active,children:(0,y.jsxs)(L,{children:[(0,y.jsx)(R,{children:(0,y.jsx)(u,{labelText:e.name,onChange:n,checked:t})}),(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(z,{children:[`만료일: `,e.expiration_date]}),(0,y.jsx)(z,{children:e.description})]})]})},e.id)}var L=c.div`
  display: flex;
  flex-direction: column;
`,R=c.div`
  margin: 8px 0;
`,z=c.p`
  font-weight: 500;
  font-size: 12px;
  margin: 4px 0;
`,B=c.li`
  list-style: none;
  display: flex;
  gap: 12px;
  width: 100%;
  width: 318px;
  height: 82px;
  border-top: 1px solid #0000001a;
  opacity: ${e=>e.isActive?1:.3};
`;function V({selectedCoupons:e,coupons:t,initialDiscountPrice:n,calculateDiscountPrice:r,isOpen:i,onClose:a,onSubmit:o}){let[s,c]=(0,v.useState)(e),[l,u]=(0,v.useState)(n),[d,f]=(0,v.useState)(null);async function h(e){let t=s.includes(e.id)?s.filter(t=>t!==e.id):[...s,e.id];try{let e=await r(t);c(t),u(e)}catch(e){f(e instanceof Error?e.message:`오류가 발생했습니다.`)}}return(0,y.jsxs)(A,{isOpen:i,onClose:a,children:[d&&(0,y.jsx)(p,{message:d,onClose:()=>f(null)}),(0,y.jsx)(H,{children:`쿠폰을 선택해 주세요`}),(0,y.jsx)(P,{children:`쿠폰은 최대 2개까지 사용할 수 있습니다.`}),(0,y.jsx)(U,{children:t.map(e=>(0,y.jsx)(I,{item:e,onToggle:()=>h(e),isSelect:s.includes(e.id)},e.id))}),(0,y.jsxs)(te,{onClick:()=>o(s),children:[`총 `,m(l),` 할인 쿠폰 사용하기`]})]})}var H=c.h2`
  font-weight: 700;
  font-size: 18px;
  margin: 0;
`,U=c.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  width: 100%;
  overflow: scroll;
`,te=c(h)`
  padding: 12px 0;
  border-radius: 5px;
  margin-top: auto;
`;async function W(e){let t;try{t=await fetch(`${o}/api/orders/${e}/`)}catch{throw new f}if(!t.ok)throw Error(`주문 조회 실패`);return t.json()}async function G(e,t){let n;try{n=await fetch(`${o}/api/orders/${e}/`,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t)})}catch{throw new f}if(!n.ok)throw Error(`주문 업데이트 실패`);return await n.json()}async function K(e){let t;try{t=await fetch(`${o}/api/orders/${e}/coupons/`)}catch{throw new f}if(!t.ok)throw Error(`쿠폰을 불러오지 못했습니다.`);return t.json()}async function q(e,t){let n;try{n=await fetch(`${o}/api/orders/${e}/discount-summary/`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t)})}catch{throw new f}if(!n.ok)throw Error(`쿠폰 할인금액을 계산에 실패했습니다.`);return await n.json()}function J(){return(0,y.jsx)(X,{children:(0,y.jsx)(Z,{})})}var Y=s`
  to { transform: rotate(360deg); }
`,X=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 4rem 0;
`,Z=c.div`
  width: 40px;
  height: 40px;
  border: 4px solid #e8e8e8;
  border-top-color: #333;
  border-radius: 50%;
  animation: ${Y} 0.8s linear infinite;
`;function Q({orderId:e}){let[t,r]=(0,v.useState)(!1),[i,a]=(0,v.useState)([]),[o,s]=(0,v.useState)(null),[c,f]=(0,v.useState)(`idle`),p=n();(0,v.useEffect)(function(){async function t(){f(`loading`);try{s(await W(e)),f(`success`)}catch{f(`error`)}}t()},[e]);function m(){r(!1)}async function h(){r(!0),a(await K(e))}async function _(e){return o?(await q(o.id,{selected_coupons:e})).discount_price:0}async function b(t){s(await G(e,{selected_coupons:t})),m()}async function x(t){s(await G(e,{hard_delivery_place:t}))}let S=o?.selected_items.length??0,C=o?.selected_items.reduce((e,t)=>e+t.quantity,0)??0;function w(){o&&p(`/cart/check/purchase/`,{state:{orderItemsTypeLength:S,orderItemsLength:C,totalPrice:o.price_summary.total_price}})}return(0,y.jsxs)(ne,{children:[c===`loading`&&(0,y.jsx)(J,{}),c===`success`&&o&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(re,{children:`주문 확인`}),(0,y.jsxs)($,{children:[`총 `,S,`종류의 상품 `,C,`개를 주문합니다.`]}),(0,y.jsx)($,{children:`최종 결제 금액을 확인해 주세요.`}),(0,y.jsx)(T,{items:o.selected_items}),(0,y.jsx)(ie,{onClick:h,children:`쿠폰 적용`}),(0,y.jsx)(V,{selectedCoupons:o.selected_coupons,coupons:i,initialDiscountPrice:o.price_summary.discount_price,calculateDiscountPrice:_,isOpen:t,onClose:m,onSubmit:b}),(0,y.jsxs)(ae,{children:[(0,y.jsx)(`p`,{children:`배송 정보`}),(0,y.jsx)(u,{labelText:`제주도 및 도서 산간 지역`,checked:o.hard_delivery_place,onChange:()=>x(!o.hard_delivery_place)})]}),(0,y.jsxs)($,{className:`icon-text`,children:[(0,y.jsx)(l,{"aria-label":`정보`}),`총 주문 금액이 100,000원 이상일 경우 무료 배송됩니다.`]}),(0,y.jsx)(D,{price:o.price_summary.order_price,couponDiscount:o.price_summary.discount_price,deliveryFee:o.price_summary.delivery_price,totalPrice:o.price_summary.total_price}),(0,y.jsx)(g,{type:`button`,onClick:w,children:`결제하기`})]}),c===`error`&&(0,y.jsx)(d,{})]})}var ne=c.section`
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
`,re=c.h2`
  font-weight: 700;
  font-size: 24px;
`,$=c.p`
  margin: 0;
  font-weight: 500;
  font-size: 12px;
  margin: 2px 0;
`,ie=c.button`
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
`,ae=c.div`
  padding: 2rem 0;
  p {
    font-weight: 700;
    font-size: 16px;
  }
`,oe=t(function({params:e}){return(0,y.jsxs)(se,{children:[(0,y.jsx)(_,{children:(0,y.jsx)(i,{to:`/cart/`,children:(0,y.jsx)(b,{})})}),(0,y.jsx)(Q,{orderId:e.id})]})}),se=c.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;export{oe as default};