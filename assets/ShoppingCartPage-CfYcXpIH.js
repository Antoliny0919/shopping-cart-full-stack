import{A as e,D as t,E as n,I as r,i,t as a}from"./jsx-runtime-D-2VctdM.js";import{t as o}from"./constants-zTYcvJMj.js";import{n as s,r as c,t as l}from"./constants-Bo8r3kRh.js";import{t as u}from"./emotion-styled.browser.esm-fClFijGW.js";import{a as d,i as f,n as ee,r as p,t as m}from"./Toast-BI5YToN6.js";import{a as h,i as g,r as _,t as v}from"./Navigation-Tb435_IF.js";var y=r(e()),b=a(),x=e=>(0,b.jsx)(`svg`,{width:14,height:2,viewBox:`0 0 14 2`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,b.jsx)(`path`,{d:`M0.75 0.75C5.43629 0.75 8.06371 0.75 12.75 0.75`,stroke:`#363636`,strokeWidth:1.5,strokeLinecap:`round`,strokeLinejoin:`round`})}),S=e=>(0,b.jsx)(`svg`,{width:14,height:14,viewBox:`0 0 14 14`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,b.jsx)(`path`,{d:`M0.75 6.75H12.75M6.75 12.75V0.75`,stroke:`#363636`,strokeWidth:1.5,strokeLinecap:`round`,strokeLinejoin:`round`})});function C(e,t,n){let r=e<l.MAX,i=e>l.MIN;function a(){r&&n(t,{quantity:e+l.STEP})}function o(){i&&n(t,{quantity:e-l.STEP})}return{increase:a,decrease:o,canIncrease:r,canDecrease:i}}function w({itemId:e,quantity:t,checked:n,product:r,onUpdateQuantity:i,onDeleteItem:a,onChangeSelected:o}){let{increase:s,decrease:c,canIncrease:l,canDecrease:u}=C(t,e,i);return(0,b.jsx)(T,{children:(0,b.jsxs)(`div`,{className:`wrapper`,children:[(0,b.jsxs)(E,{children:[(0,b.jsx)(f,{checked:n,onChange:()=>o(!n,e)}),(0,b.jsx)(`button`,{className:`item-delete`,onClick:()=>a(e),children:`삭제`})]}),(0,b.jsxs)(D,{children:[(0,b.jsx)(`img`,{className:`thumbnail`,src:`https://shopping-cart-full-stack-production-62c3.up.railway.app${r.thumbnail}`,alt:`${r.name} 상품 이미지`}),(0,b.jsxs)(O,{children:[(0,b.jsx)(`p`,{className:`name`,children:r.name}),(0,b.jsx)(`p`,{className:`price`,children:g(r.price)}),(0,b.jsxs)(te,{children:[(0,b.jsx)(`button`,{type:`button`,"aria-label":`수량 감소`,onClick:c,disabled:!u,children:(0,b.jsx)(x,{})}),(0,b.jsx)(`p`,{className:`quantity`,children:t}),(0,b.jsx)(`button`,{type:`button`,"aria-label":`수량 증가`,onClick:s,disabled:!l,children:(0,b.jsx)(S,{})})]})]})]})]})})}var T=u.li`
  list-style: none;
  display: flex;
  gap: 1rem;
  width: 100%;
  border-top: 1px solid #0000001a;

  .wrapper {
    width: 100%;
  }
`,E=u.div`
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
`,D=u.div`
  display: flex;
  gap: 12px;

  img.thumbnail {
    height: 112px;
    width: 112px;
    border-radius: 8px;
  }
`,O=u.div`
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
`,te=u.div`
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
`;function k({cartItems:e,onUpdateQuantity:t,onDeleteItem:n,onChangeSelected:r,selectedItemId:i}){return(0,b.jsx)(A,{children:e.map(({product_id:e,quantity:a,product:o})=>(0,b.jsx)(w,{itemId:e,checked:i?.includes(e)??!1,product:o,quantity:a,onUpdateQuantity:t,onDeleteItem:n,onChangeSelected:r},e))})}var A=u.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  width: 100%;
`;function j({orderSummary:e}){return(0,b.jsxs)(M,{children:[(0,b.jsxs)(N,{children:[(0,b.jsxs)(`div`,{className:`receipt-item`,children:[(0,b.jsx)(`dt`,{children:`주문 금액`}),(0,b.jsx)(`dd`,{children:g(e.price)})]}),(0,b.jsxs)(`div`,{className:`receipt-item`,children:[(0,b.jsx)(`dt`,{children:`배송비`}),(0,b.jsx)(`dd`,{children:g(e.delivery)})]})]}),(0,b.jsx)(P,{children:(0,b.jsxs)(`div`,{className:`receipt-item`,children:[(0,b.jsx)(`dt`,{children:`총 결제 금액`}),(0,b.jsx)(`dd`,{children:g(e.totalPrice)})]})})]})}var M=u.div`
  width: 100%;
`,N=u.dl`
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
`,P=u(N)``,F=class{items;selectedItemIds;constructor(e,t){this.items=e,this.selectedItemIds=t,this.items=e,this.selectedItemIds=t}isItemAllSelected(){return this.getSelectedItems().length===this.items.length}selectedItemCount(){return this.getSelectedItems().length}selectedItemTotalQuantity(){return this.getSelectedItems().reduce((e,t)=>e+t.quantity,0)}calculateItemTotalPrice(){return this.getSelectedItems().reduce((e,t)=>e+t.quantity*t.product.price,0)}getSelectedItems(){return this.selectedItemIds?this.items.filter(e=>this.selectedItemIds.includes(e.product_id)):[]}},I=class{cart;deliveryFee;constructor(e,t){this.cart=e,this.deliveryFee=t,this.cart=e,this.deliveryFee=t}calculatePriceSummary(){let e=this.cart.calculateItemTotalPrice(),t=this.cart.selectedItemCount()?this.deliveryFee.calculate(e):0;return{price:e,delivery:t,totalPrice:e+t}}},L=class{price;freeThreshold;constructor(e,t){this.price=e,this.freeThreshold=t,this.price=e,this.freeThreshold=t}calculate(e){return e>=this.freeThreshold?0:this.price}},R=`cart-selected-items`,z=class{get(){let e=localStorage.getItem(R);return e?JSON.parse(e):null}save(e){localStorage.setItem(R,JSON.stringify(e))}};async function B(){try{return await(await fetch(`${o}/api/cart/`)).json()}catch{throw new p}}async function V(e){let t;try{t=await fetch(`${o}/api/cart/items/${e}/`,{method:`DELETE`})}catch{throw new p}if(!t.ok){let{message:e}=await t.json();throw Error(e)}}async function H(e){let t;try{t=await fetch(`${o}/api/orders/`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e)})}catch{throw new p}if(!t.ok)throw Error(`주문 생성 실패`);return await t.json()}async function U(e,t){let n;try{n=await fetch(`${o}/api/cart/items/${e}/`,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t)})}catch{throw new p}if(!n.ok){let{errors:e}=await n.json();throw Error(e.message)}return await n.json()}function W(){let[e,t]=(0,y.useState)([]),[n,r]=(0,y.useState)(`idle`);async function i(e){return await h({api:()=>V(e),onSuccess:()=>t(t=>t.filter(t=>t.product_id!==e))})}async function a(n,r){let i=e.find(e=>e.product_id===n);return await h({api:()=>U(n,r),onMutate:()=>(t(e=>e.map(e=>e.product_id===n?{...e,...r}:e)),()=>t(e=>e.map(e=>e.product_id===n?i:e)))})}return(0,y.useEffect)(function(){async function e(){r(`loading`);try{t(await B()),r(`success`)}catch{r(`error`)}}e()},[]),{items:e,initialLoadStatus:n,removeItem:i,updateItem:a}}function G(e){let[t,n]=(0,y.useState)(()=>typeof window>`u`?null:e.get());return{selectedItemId:t,initSelectedItemId:t=>{e.save(t),n(t)},onChangeSelected:(r,i)=>{let a=t??[],o=r?[...a,i]:a.filter(e=>e!==i);e.save(o),n(o)},onChangeAllSelected:r=>{let i=(t??[]).length===r.length?[]:r;e.save(i),n(i)}}}function K(){let[e,t]=(0,y.useState)(!1),[n,r]=(0,y.useState)(``);function i(e){if(e instanceof p){a(),t(!0);return}e instanceof Error&&(a(),r(e.message))}function a(){t(!1),r(``)}return{networkError:e,error:n,handleError:i,clearError:a}}function q(){return(0,b.jsxs)(Y,{children:[(0,b.jsx)(X,{width:`160px`,height:`28px`}),(0,b.jsx)(X,{width:`200px`,height:`16px`,style:{marginTop:`8px`}}),[...[,,,]].map((e,t)=>(0,b.jsxs)(Z,{children:[(0,b.jsx)(X,{width:`80px`,height:`80px`}),(0,b.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,b.jsx)(X,{width:`60%`,height:`16px`}),(0,b.jsx)(X,{width:`40%`,height:`14px`}),(0,b.jsx)(X,{width:`30%`,height:`14px`})]})]},t)),(0,b.jsx)(X,{width:`100%`,height:`80px`,style:{marginTop:`16px`}}),(0,b.jsx)(X,{width:`100%`,height:`48px`,style:{marginTop:`12px`,borderRadius:`8px`}})]})}var J=`
  @keyframes shimmer {
    0% { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }
`,Y=u.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  gap: 16px;
`,X=u.div`
  ${J}
  width: ${({width:e})=>e};
  height: ${({height:e})=>e};
  border-radius: 4px;
  background: linear-gradient(90deg, #e8e8e8 25%, #f5f5f5 50%, #e8e8e8 75%);
  background-size: 800px 100%;
  animation: shimmer 1.4s infinite linear;
`,Z=u.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
`;function ne(){let e=n(),t=new z,{items:r,initialLoadStatus:i,removeItem:a,updateItem:o}=W(),{selectedItemId:l,initSelectedItemId:u,onChangeSelected:p,onChangeAllSelected:h}=G(t),{networkError:g,error:v,handleError:x,clearError:S}=K(),C=(0,y.useMemo)(()=>new F(r,l),[l,r]),w=(0,y.useMemo)(()=>new I(C,new L(s,c)),[C]),T=async(e,t)=>{let{success:n,error:r}=await o(e,t);if(n){S();return}r&&x(r)},E=async e=>{let{success:t,error:n}=await a(e);if(t){S(),p(!1,e);return}n&&x(n)},D=async()=>{let{order_id:t}=await H(r.filter(e=>l?.includes(e.product_id)).map(({product_id:e,quantity:t})=>({product_id:e,quantity:t})));e(`/cart/check/${t}/`)},O=(0,y.useEffectEvent)(()=>{l===null&&u(r.map(e=>e.product_id))});return(0,y.useEffect)(function(){i===`success`&&O()},[i]),(0,b.jsxs)(ie,{children:[i===`loading`&&(0,b.jsx)(q,{}),i===`success`&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(Q,{children:[(0,b.jsx)(re,{children:`장바구니`}),r.length>0&&(0,b.jsxs)($,{children:[`현재 `,r.length,`종류의 상품이 담겨있습니다.`]})]}),r.length?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f,{checked:C.isItemAllSelected(),labelText:`전체선택`,onChange:()=>h(r.map(e=>e.product_id))}),(0,b.jsx)(k,{cartItems:r,onUpdateQuantity:T,onDeleteItem:E,onChangeSelected:p,selectedItemId:l}),(0,b.jsxs)($,{className:`icon-text`,children:[(0,b.jsx)(d,{"aria-label":`정보`}),`총 주문 금액이 100,000원 이상일 경우 무료 배송됩니다.`]}),(0,b.jsx)(j,{orderSummary:w.calculatePriceSummary()})]}):(0,b.jsx)(ae,{children:(0,b.jsx)(`p`,{children:`장바구니에 담은 상품이 없습니다.`})}),(0,b.jsx)(_,{disabled:!C.selectedItemCount(),onClick:D,children:`주문 확인`})]}),(i===`error`||g)&&(0,b.jsx)(ee,{}),v&&(0,b.jsx)(m,{message:v,onClose:S})]})}var Q=u.div`
  margin: 2rem 0;
`,re=u.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 12px 0;
`,$=u.p`
  font-weight: 500;
  font-size: 12px;
`,ie=u.section`
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
  }
`,ae=u.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`,oe=e=>(0,b.jsx)(`svg`,{width:55,height:17,viewBox:`0 0 55 17`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,b.jsx)(`path`,{d:`M10.52 11.86C10.52 12.6733 10.32 13.4133 9.92 14.08C9.52 14.7333 8.92 15.2533 8.12 15.64C7.32 16.0133 6.31333 16.2 5.1 16.2C4.54 16.2 4.02 16.1667 3.54 16.1C3.06 16.0333 2.6 15.94 2.16 15.82C1.73333 15.6867 1.31333 15.52 0.9 15.32V12.22C1.62 12.5533 2.35333 12.8333 3.1 13.06C3.86 13.2867 4.58667 13.4 5.28 13.4C5.72 13.4 6.07333 13.3467 6.34 13.24C6.62 13.12 6.82 12.9667 6.94 12.78C7.07333 12.58 7.14 12.3533 7.14 12.1C7.14 11.7933 7.03333 11.5333 6.82 11.32C6.62 11.0933 6.32 10.88 5.92 10.68C5.52 10.4667 5.03333 10.2267 4.46 9.96C4.03333 9.77333 3.61333 9.56 3.2 9.32C2.8 9.06667 2.43333 8.78 2.1 8.46C1.78 8.12667 1.52 7.73333 1.32 7.28C1.13333 6.81333 1.04 6.26667 1.04 5.64C1.04 4.74667 1.24667 4 1.66 3.4C2.08667 2.78667 2.68 2.32 3.44 2C4.2 1.68 5.09333 1.52 6.12 1.52C6.96 1.52 7.73333 1.61333 8.44 1.8C9.14667 1.98667 9.83333 2.22667 10.5 2.52L9.42 5.18C8.78 4.9 8.18 4.68667 7.62 4.54C7.07333 4.38 6.54 4.3 6.02 4.3C5.66 4.3 5.36 4.35333 5.12 4.46C4.88 4.55333 4.7 4.69333 4.58 4.88C4.46 5.05333 4.4 5.26 4.4 5.5C4.4 5.78 4.49333 6.02667 4.68 6.24C4.86667 6.44 5.16 6.64667 5.56 6.86C5.96 7.07333 6.48667 7.33333 7.14 7.64C7.84667 7.96 8.45333 8.30667 8.96 8.68C9.46667 9.05333 9.85333 9.49333 10.12 10C10.3867 10.4933 10.52 11.1133 10.52 11.86ZM24.8895 16H21.4895V10H16.3695V16H12.9495V1.72H16.3695V7.18H21.4895V1.72H24.8895V16ZM41.3825 8.84C41.3825 9.94667 41.2492 10.9533 40.9825 11.86C40.7158 12.7533 40.3025 13.5267 39.7425 14.18C39.1825 14.8333 38.4692 15.3333 37.6025 15.68C36.7358 16.0267 35.7092 16.2 34.5225 16.2C33.3492 16.2 32.3292 16.0267 31.4625 15.68C30.5958 15.32 29.8825 14.82 29.3225 14.18C28.7625 13.5267 28.3425 12.7467 28.0625 11.84C27.7958 10.9333 27.6625 9.92667 27.6625 8.82C27.6625 7.34 27.9025 6.05333 28.3825 4.96C28.8758 3.86667 29.6292 3.02 30.6425 2.42C31.6692 1.80667 32.9692 1.5 34.5425 1.5C36.1292 1.5 37.4225 1.80667 38.4225 2.42C39.4358 3.02 40.1825 3.87333 40.6625 4.98C41.1425 6.07333 41.3825 7.36 41.3825 8.84ZM31.2425 8.84C31.2425 9.77333 31.3558 10.58 31.5825 11.26C31.8092 11.9267 32.1625 12.44 32.6425 12.8C33.1358 13.16 33.7625 13.34 34.5225 13.34C35.3092 13.34 35.9425 13.16 36.4225 12.8C36.9025 12.44 37.2492 11.9267 37.4625 11.26C37.6892 10.58 37.8025 9.77333 37.8025 8.84C37.8025 7.42667 37.5492 6.32 37.0425 5.52C36.5492 4.72 35.7158 4.32 34.5425 4.32C33.7692 4.32 33.1358 4.50667 32.6425 4.88C32.1625 5.24 31.8092 5.76 31.5825 6.44C31.3558 7.10667 31.2425 7.90667 31.2425 8.84ZM48.9005 1.72C50.7271 1.72 52.0738 2.12 52.9405 2.92C53.8205 3.70667 54.2605 4.80667 54.2605 6.22C54.2605 6.86 54.1671 7.47333 53.9805 8.06C53.7938 8.63333 53.4805 9.14667 53.0405 9.6C52.6138 10.0533 52.0471 10.4133 51.3405 10.68C50.6471 10.9467 49.7871 11.08 48.7605 11.08H47.5605V16H44.1605V1.72H48.9005ZM48.7805 4.5H47.5605V8.3H48.4605C48.9271 8.3 49.3338 8.23333 49.6805 8.1C50.0405 7.96667 50.3205 7.75333 50.5205 7.46C50.7205 7.16667 50.8205 6.78667 50.8205 6.32C50.8205 5.73333 50.6538 5.28667 50.3205 4.98C49.9871 4.66 49.4738 4.5 48.7805 4.5Z`,fill:`white`})}),se=t(function(){return(0,b.jsxs)(ce,{children:[(0,b.jsx)(v,{children:(0,b.jsx)(i,{to:`/`,children:(0,b.jsx)(oe,{})})}),(0,b.jsx)(ne,{})]})}),ce=u.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;export{se as default};