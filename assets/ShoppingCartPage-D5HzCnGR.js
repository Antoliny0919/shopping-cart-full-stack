import{A as e,D as t,E as n,I as r,i,t as a}from"./jsx-runtime-D-2VctdM.js";import{n as o,t as s}from"./constants-CdJSiyFU.js";import{i as c,t as l}from"./emotion-styled.browser.esm-fClFijGW.js";import{n as u,r as d,t as f}from"./Navigation-qsBp6MV_.js";var p=r(e()),m=a(),h=e=>(0,m.jsx)(`svg`,{width:14,height:14,viewBox:`0 0 14 14`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,m.jsx)(`path`,{d:`M6 3.33333H7.33333V4.66667H6V3.33333ZM6 6H7.33333V10H6V6ZM6.66667 0C2.98667 0 0 2.98667 0 6.66667C0 10.3467 2.98667 13.3333 6.66667 13.3333C10.3467 13.3333 13.3333 10.3467 13.3333 6.66667C13.3333 2.98667 10.3467 0 6.66667 0ZM6.66667 12C3.72667 12 1.33333 9.60667 1.33333 6.66667C1.33333 3.72667 3.72667 1.33333 6.66667 1.33333C9.60667 1.33333 12 3.72667 12 6.66667C12 9.60667 9.60667 12 6.66667 12Z`,fill:`black`})}),g=e=>(0,m.jsxs)(`svg`,{width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:[(0,m.jsx)(`rect`,{width:24,height:24,rx:8,fill:`white`}),(0,m.jsx)(`rect`,{x:.5,y:.5,width:23,height:23,rx:7.5,stroke:`black`,strokeOpacity:.1}),(0,m.jsx)(`g`,{clipPath:`url(#clip0_13996_1608)`,children:(0,m.jsx)(`path`,{d:`M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z`,fill:`black`,fillOpacity:.1})}),(0,m.jsx)(`defs`,{children:(0,m.jsx)(`clipPath`,{id:`clip0_13996_1608`,children:(0,m.jsx)(`rect`,{width:24,height:24,fill:`white`})})})]}),_=e=>(0,m.jsxs)(`svg`,{width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:[(0,m.jsx)(`rect`,{x:.5,y:.5,width:23,height:23,rx:7.5,fill:`black`,stroke:`black`}),(0,m.jsx)(`g`,{clipPath:`url(#clip0_15251_38)`,children:(0,m.jsx)(`path`,{d:`M8.99997 16.17L4.82997 12L3.40997 13.41L8.99997 19L21 7L19.59 5.59L8.99997 16.17Z`,fill:`white`})}),(0,m.jsx)(`defs`,{children:(0,m.jsx)(`clipPath`,{id:`clip0_15251_38`,children:(0,m.jsx)(`rect`,{width:24,height:24,fill:`white`})})})]});function v({labelText:e,checked:t,onChange:n,...r}){return(0,m.jsxs)(y,{children:[(0,m.jsx)(`input`,{type:`checkbox`,...r,onChange:n,checked:t}),t?(0,m.jsx)(_,{}):(0,m.jsx)(g,{}),e&&(0,m.jsx)(`span`,{children:e})]})}var y=l.label`
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
`,b=e=>(0,m.jsx)(`svg`,{width:14,height:2,viewBox:`0 0 14 2`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,m.jsx)(`path`,{d:`M0.75 0.75C5.43629 0.75 8.06371 0.75 12.75 0.75`,stroke:`#363636`,strokeWidth:1.5,strokeLinecap:`round`,strokeLinejoin:`round`})}),x=e=>(0,m.jsx)(`svg`,{width:14,height:14,viewBox:`0 0 14 14`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,m.jsx)(`path`,{d:`M0.75 6.75H12.75M6.75 12.75V0.75`,stroke:`#363636`,strokeWidth:1.5,strokeLinecap:`round`,strokeLinejoin:`round`})});function S(e,t,n){let r=e<s.MAX,i=e>s.MIN;function a(){r&&n(t,{quantity:e+s.STEP})}function o(){i&&n(t,{quantity:e-s.STEP})}return{increase:a,decrease:o,canIncrease:r,canDecrease:i}}function C({itemId:e,quantity:t,checked:n,product:r,onUpdateQuantity:i,onDeleteItem:a,onChangeSelected:o}){let{increase:s,decrease:c,canIncrease:l,canDecrease:u}=S(t,e,i);return(0,m.jsx)(w,{children:(0,m.jsxs)(`div`,{className:`wrapper`,children:[(0,m.jsxs)(T,{children:[(0,m.jsx)(v,{checked:n,onChange:()=>o(!n,e)}),(0,m.jsx)(`button`,{className:`item-delete`,onClick:()=>a(e),children:`삭제`})]}),(0,m.jsxs)(E,{children:[(0,m.jsx)(`img`,{className:`thumbnail`,src:`https://shopping-cart-full-stack-production-62c3.up.railway.app${r.thumbnail}`,alt:`${r.name} 상품 이미지`}),(0,m.jsxs)(D,{children:[(0,m.jsx)(`p`,{className:`name`,children:r.name}),(0,m.jsx)(`p`,{className:`price`,children:d(r.price)}),(0,m.jsxs)(ee,{children:[(0,m.jsx)(`button`,{type:`button`,"aria-label":`수량 감소`,onClick:c,disabled:!u,children:(0,m.jsx)(b,{})}),(0,m.jsx)(`p`,{className:`quantity`,children:t}),(0,m.jsx)(`button`,{type:`button`,"aria-label":`수량 증가`,onClick:s,disabled:!l,children:(0,m.jsx)(x,{})})]})]})]})]})})}var w=l.li`
  list-style: none;
  display: flex;
  gap: 1rem;
  width: 100%;
  border-top: 1px solid #0000001a;

  .wrapper {
    width: 100%;
  }
`,T=l.div`
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
`,E=l.div`
  display: flex;
  gap: 12px;

  img.thumbnail {
    height: 112px;
    width: 112px;
    border-radius: 8px;
  }
`,D=l.div`
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
`,ee=l.div`
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
`;function te({cartItems:e,onUpdateQuantity:t,onDeleteItem:n,onChangeSelected:r,selectedItemId:i}){return(0,m.jsx)(ne,{children:e.map(({product_id:e,quantity:a,product:o})=>(0,m.jsx)(C,{itemId:e,checked:i?.includes(e)??!1,product:o,quantity:a,onUpdateQuantity:t,onDeleteItem:n,onChangeSelected:r},e))})}var ne=l.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  width: 100%;
`;function O({total:e,delivery:t,grandTotal:n}){return(0,m.jsxs)(k,{children:[(0,m.jsxs)(A,{children:[(0,m.jsxs)(`div`,{className:`receipt-item`,children:[(0,m.jsx)(`dt`,{children:`주문 금액`}),(0,m.jsx)(`dd`,{children:d(e)})]}),(0,m.jsxs)(`div`,{className:`receipt-item`,children:[(0,m.jsx)(`dt`,{children:`배송비`}),(0,m.jsx)(`dd`,{children:d(t)})]})]}),(0,m.jsx)(j,{children:(0,m.jsxs)(`div`,{className:`receipt-item`,children:[(0,m.jsx)(`dt`,{children:`총 결제 금액`}),(0,m.jsx)(`dd`,{children:d(n)})]})})]})}var k=l.div`
  width: 100%;
`,A=l.dl`
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
`,j=l(A)``,M=class{items;pricing;constructor(e,t){this.items=e,this.pricing=new t(e)}get totalItems(){return this.items.length}get totalQuantity(){return this.items.reduce((e,t)=>e+t.quantity,0)}get total(){return this.pricing.total}get delivery(){return this.totalItems?this.pricing.delivery:0}get grandTotal(){return this.pricing.grandTotal}},N=class{selectedItemId;cartItems;constructor(e,t){this.selectedItemId=e,this.cartItems=t,this.selectedItemId=e,this.cartItems=t}get selectedCartItems(){let e=this.selectedItemId;return e?this.cartItems.filter(t=>e.includes(t.product_id)):[]}get allItemsId(){return this.cartItems.map(e=>e.product_id)}get allItemsSelected(){return this.allItemsId.length>0&&this.allItemsId.every(e=>this.selectedItemId?.includes(e))}},P=1e5,F=3e3,I=class{items;constructor(e){this.items=e}get total(){return this.items.reduce((e,t)=>e+t.product.price*t.quantity,0)}get delivery(){return this.total===0||this.total>=P?0:F}get grandTotal(){return this.total+this.delivery}},L=`cart-selected-items`,R=class{get(){let e=localStorage.getItem(L);return e?JSON.parse(e):null}save(e){localStorage.setItem(L,JSON.stringify(e))}},z=class extends Error{status;constructor(e=`네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.`,t=500){super(e),this.status=t}};async function B(){try{return await(await fetch(`${o}/api/cart/`)).json()}catch{throw new z}}async function V(e){let t;try{t=await fetch(`${o}/api/cart/items/${e}/`,{method:`DELETE`})}catch{throw new z}if(!t.ok){let{message:e}=await t.json();throw Error(e)}}async function H(e,t){let n;try{n=await fetch(`${o}/api/cart/items/${e}/`,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t)})}catch{throw new z}if(!n.ok){let{errors:e}=await n.json();throw Error(e.message)}return await n.json()}function U(){let[e,t]=(0,p.useState)([]),[n,r]=(0,p.useState)(`idle`);return(0,p.useEffect)(function(){async function e(){r(`loading`);try{t(await B()),r(`success`)}catch{r(`error`)}}e()},[]),{items:e,fetchStatus:n,removeItem:async e=>{try{return await V(e),t(t=>t.filter(t=>t.product_id!==e)),{success:!0}}catch(e){return{success:!1,error:e}}},updateItem:async(n,r)=>{let i=e.find(e=>e.product_id===n);t(e=>e.map(e=>e.product_id===n?{...e,...r}:e));try{return await H(n,r),{success:!0}}catch(e){return t(e=>e.map(e=>e.product_id===n?i:e)),{success:!1,error:e}}}}}function W(e){let[t,n]=(0,p.useState)(()=>typeof window>`u`?null:e.get());return{selectedItemId:t,initSelectedItemId:t=>{e.save(t),n(t)},onChangeSelected:(r,i)=>{let a=t??[],o=r?[...a,i]:a.filter(e=>e!==i);e.save(o),n(o)},onChangeAllSelected:r=>{let i=(t??[]).length===r.length?[]:r;e.save(i),n(i)}}}function G(){let[e,t]=(0,p.useState)(!1),[n,r]=(0,p.useState)(``);function i(e){if(e instanceof z){a(),t(!0);return}e instanceof Error&&(a(),r(e.message))}function a(){t(!1),r(``)}return{networkError:e,error:n,handleError:i,clearError:a}}var K=`/shopping-cart-full-stack/assets/network-error-Cm1Hioo9.png`;function q(){return(0,m.jsxs)(re,{children:[(0,m.jsx)(J,{src:K,alt:`네트워크 에러`}),(0,m.jsx)(Y,{children:`네트워크 연결 오류`}),(0,m.jsx)(X,{children:`서버와 연결할 수 없습니다.`}),(0,m.jsx)(ie,{children:`인터넷 연결을 확인하고 다시 시도해 주세요.`})]})}var re=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 3rem 1.5rem;
  text-align: center;
`,J=l.img`
  width: 96px;
  height: 96px;
`,Y=l.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0;
`,X=l.p`
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
`,ie=l.p`
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
`;function ae(){return(0,m.jsxs)(se,{children:[(0,m.jsx)(Z,{width:`160px`,height:`28px`}),(0,m.jsx)(Z,{width:`200px`,height:`16px`,style:{marginTop:`8px`}}),[...[,,,]].map((e,t)=>(0,m.jsxs)(ce,{children:[(0,m.jsx)(Z,{width:`80px`,height:`80px`}),(0,m.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,m.jsx)(Z,{width:`60%`,height:`16px`}),(0,m.jsx)(Z,{width:`40%`,height:`14px`}),(0,m.jsx)(Z,{width:`30%`,height:`14px`})]})]},t)),(0,m.jsx)(Z,{width:`100%`,height:`80px`,style:{marginTop:`16px`}}),(0,m.jsx)(Z,{width:`100%`,height:`48px`,style:{marginTop:`12px`,borderRadius:`8px`}})]})}var oe=`
  @keyframes shimmer {
    0% { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }
`,se=l.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  gap: 16px;
`,Z=l.div`
  ${oe}
  width: ${({width:e})=>e};
  height: ${({height:e})=>e};
  border-radius: 4px;
  background: linear-gradient(90deg, #e8e8e8 25%, #f5f5f5 50%, #e8e8e8 75%);
  background-size: 800px 100%;
  animation: shimmer 1.4s infinite linear;
`,ce=l.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
`;function le({message:e,onClose:t,duration:n=3e3}){return(0,p.useEffect)(()=>{let e=setTimeout(t,n);return()=>clearTimeout(e)},[t,n]),(0,m.jsx)(fe,{duration:n,children:(0,m.jsx)(pe,{children:e})})}var ue=c`
  from {
    opacity: 0;
    transform: translateY(-12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,de=c`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`,fe=l.div`
  position: fixed;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  animation:
    ${ue} 0.25s ease forwards,
    ${de} 0.3s ease ${({duration:e})=>e-300}ms forwards;
`,pe=l.p`
  background-color: #333;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;function me(){let e=n(),t=new R,{items:r,fetchStatus:i,removeItem:a,updateItem:o}=U(),{selectedItemId:s,initSelectedItemId:c,onChangeSelected:l,onChangeAllSelected:d}=W(t),{networkError:f,error:g,handleError:_,clearError:y}=G(),b=(0,p.useMemo)(()=>new N(s,r),[s,r]),x=(0,p.useMemo)(()=>new M(b.selectedCartItems,I),[b.selectedCartItems]),S=async(e,t)=>{let{success:n,error:r}=await o(e,t);if(n){y();return}r&&_(r)},C=async e=>{let{success:t,error:n}=await a(e);if(t){y(),l(!1,e);return}n&&_(n)},w=()=>{e(`/cart/check/`,{state:{totalItems:x.totalItems,totalQuantity:x.totalQuantity,totalPrice:x.grandTotal}})},T=(0,p.useEffectEvent)(()=>{s===null&&c(r.map(e=>e.product_id))});return(0,p.useEffect)(function(){i===`success`&&T()},[i]),(0,m.jsxs)(ge,{children:[i===`loading`&&(0,m.jsx)(ae,{}),i===`success`&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(Q,{children:[(0,m.jsx)(he,{children:`장바구니`}),r.length>0&&(0,m.jsxs)($,{children:[`현재 `,r.length,`종류의 상품이 담겨있습니다.`]})]}),r.length?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(v,{checked:b.allItemsSelected,labelText:`전체선택`,onChange:()=>d(b.allItemsId)}),(0,m.jsx)(te,{cartItems:r,onUpdateQuantity:S,onDeleteItem:C,onChangeSelected:l,selectedItemId:s}),(0,m.jsxs)($,{className:`icon-text`,children:[(0,m.jsx)(h,{"aria-label":`정보`}),`총 주문 금액이 100,000원 이상일 경우 무료 배송됩니다.`]}),(0,m.jsx)(O,{total:x.total,delivery:x.delivery,grandTotal:x.grandTotal})]}):(0,m.jsx)(_e,{children:(0,m.jsx)(`p`,{children:`장바구니에 담은 상품이 없습니다.`})}),(0,m.jsx)(u,{disabled:!x.totalItems,onClick:w,children:`주문 확인`})]}),(i===`error`||f)&&(0,m.jsx)(q,{}),g&&(0,m.jsx)(le,{message:g,onClose:y})]})}var Q=l.div`
  margin: 2rem 0;
`,he=l.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 12px 0;
`,$=l.p`
  font-weight: 500;
  font-size: 12px;
`,ge=l.section`
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
`,_e=l.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`,ve=e=>(0,m.jsx)(`svg`,{width:55,height:17,viewBox:`0 0 55 17`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,m.jsx)(`path`,{d:`M10.52 11.86C10.52 12.6733 10.32 13.4133 9.92 14.08C9.52 14.7333 8.92 15.2533 8.12 15.64C7.32 16.0133 6.31333 16.2 5.1 16.2C4.54 16.2 4.02 16.1667 3.54 16.1C3.06 16.0333 2.6 15.94 2.16 15.82C1.73333 15.6867 1.31333 15.52 0.9 15.32V12.22C1.62 12.5533 2.35333 12.8333 3.1 13.06C3.86 13.2867 4.58667 13.4 5.28 13.4C5.72 13.4 6.07333 13.3467 6.34 13.24C6.62 13.12 6.82 12.9667 6.94 12.78C7.07333 12.58 7.14 12.3533 7.14 12.1C7.14 11.7933 7.03333 11.5333 6.82 11.32C6.62 11.0933 6.32 10.88 5.92 10.68C5.52 10.4667 5.03333 10.2267 4.46 9.96C4.03333 9.77333 3.61333 9.56 3.2 9.32C2.8 9.06667 2.43333 8.78 2.1 8.46C1.78 8.12667 1.52 7.73333 1.32 7.28C1.13333 6.81333 1.04 6.26667 1.04 5.64C1.04 4.74667 1.24667 4 1.66 3.4C2.08667 2.78667 2.68 2.32 3.44 2C4.2 1.68 5.09333 1.52 6.12 1.52C6.96 1.52 7.73333 1.61333 8.44 1.8C9.14667 1.98667 9.83333 2.22667 10.5 2.52L9.42 5.18C8.78 4.9 8.18 4.68667 7.62 4.54C7.07333 4.38 6.54 4.3 6.02 4.3C5.66 4.3 5.36 4.35333 5.12 4.46C4.88 4.55333 4.7 4.69333 4.58 4.88C4.46 5.05333 4.4 5.26 4.4 5.5C4.4 5.78 4.49333 6.02667 4.68 6.24C4.86667 6.44 5.16 6.64667 5.56 6.86C5.96 7.07333 6.48667 7.33333 7.14 7.64C7.84667 7.96 8.45333 8.30667 8.96 8.68C9.46667 9.05333 9.85333 9.49333 10.12 10C10.3867 10.4933 10.52 11.1133 10.52 11.86ZM24.8895 16H21.4895V10H16.3695V16H12.9495V1.72H16.3695V7.18H21.4895V1.72H24.8895V16ZM41.3825 8.84C41.3825 9.94667 41.2492 10.9533 40.9825 11.86C40.7158 12.7533 40.3025 13.5267 39.7425 14.18C39.1825 14.8333 38.4692 15.3333 37.6025 15.68C36.7358 16.0267 35.7092 16.2 34.5225 16.2C33.3492 16.2 32.3292 16.0267 31.4625 15.68C30.5958 15.32 29.8825 14.82 29.3225 14.18C28.7625 13.5267 28.3425 12.7467 28.0625 11.84C27.7958 10.9333 27.6625 9.92667 27.6625 8.82C27.6625 7.34 27.9025 6.05333 28.3825 4.96C28.8758 3.86667 29.6292 3.02 30.6425 2.42C31.6692 1.80667 32.9692 1.5 34.5425 1.5C36.1292 1.5 37.4225 1.80667 38.4225 2.42C39.4358 3.02 40.1825 3.87333 40.6625 4.98C41.1425 6.07333 41.3825 7.36 41.3825 8.84ZM31.2425 8.84C31.2425 9.77333 31.3558 10.58 31.5825 11.26C31.8092 11.9267 32.1625 12.44 32.6425 12.8C33.1358 13.16 33.7625 13.34 34.5225 13.34C35.3092 13.34 35.9425 13.16 36.4225 12.8C36.9025 12.44 37.2492 11.9267 37.4625 11.26C37.6892 10.58 37.8025 9.77333 37.8025 8.84C37.8025 7.42667 37.5492 6.32 37.0425 5.52C36.5492 4.72 35.7158 4.32 34.5425 4.32C33.7692 4.32 33.1358 4.50667 32.6425 4.88C32.1625 5.24 31.8092 5.76 31.5825 6.44C31.3558 7.10667 31.2425 7.90667 31.2425 8.84ZM48.9005 1.72C50.7271 1.72 52.0738 2.12 52.9405 2.92C53.8205 3.70667 54.2605 4.80667 54.2605 6.22C54.2605 6.86 54.1671 7.47333 53.9805 8.06C53.7938 8.63333 53.4805 9.14667 53.0405 9.6C52.6138 10.0533 52.0471 10.4133 51.3405 10.68C50.6471 10.9467 49.7871 11.08 48.7605 11.08H47.5605V16H44.1605V1.72H48.9005ZM48.7805 4.5H47.5605V8.3H48.4605C48.9271 8.3 49.3338 8.23333 49.6805 8.1C50.0405 7.96667 50.3205 7.75333 50.5205 7.46C50.7205 7.16667 50.8205 6.78667 50.8205 6.32C50.8205 5.73333 50.6538 5.28667 50.3205 4.98C49.9871 4.66 49.4738 4.5 48.7805 4.5Z`,fill:`white`})}),ye=t(function(){return(0,m.jsxs)(be,{children:[(0,m.jsx)(f,{children:(0,m.jsx)(i,{to:`/`,children:(0,m.jsx)(ve,{})})}),(0,m.jsx)(me,{})]})}),be=l.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;export{ye as default};