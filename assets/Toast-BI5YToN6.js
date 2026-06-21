import{A as e,I as t,t as n}from"./jsx-runtime-D-2VctdM.js";import{i as r,t as i}from"./emotion-styled.browser.esm-fClFijGW.js";var a=t(e()),o=n(),s=e=>(0,o.jsx)(`svg`,{width:14,height:14,viewBox:`0 0 14 14`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,o.jsx)(`path`,{d:`M6 3.33333H7.33333V4.66667H6V3.33333ZM6 6H7.33333V10H6V6ZM6.66667 0C2.98667 0 0 2.98667 0 6.66667C0 10.3467 2.98667 13.3333 6.66667 13.3333C10.3467 13.3333 13.3333 10.3467 13.3333 6.66667C13.3333 2.98667 10.3467 0 6.66667 0ZM6.66667 12C3.72667 12 1.33333 9.60667 1.33333 6.66667C1.33333 3.72667 3.72667 1.33333 6.66667 1.33333C9.60667 1.33333 12 3.72667 12 6.66667C12 9.60667 9.60667 12 6.66667 12Z`,fill:`black`})}),c=e=>(0,o.jsxs)(`svg`,{width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:[(0,o.jsx)(`rect`,{width:24,height:24,rx:8,fill:`white`}),(0,o.jsx)(`rect`,{x:.5,y:.5,width:23,height:23,rx:7.5,stroke:`black`,strokeOpacity:.1}),(0,o.jsx)(`g`,{clipPath:`url(#clip0_13996_1608)`,children:(0,o.jsx)(`path`,{d:`M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z`,fill:`black`,fillOpacity:.1})}),(0,o.jsx)(`defs`,{children:(0,o.jsx)(`clipPath`,{id:`clip0_13996_1608`,children:(0,o.jsx)(`rect`,{width:24,height:24,fill:`white`})})})]}),l=e=>(0,o.jsxs)(`svg`,{width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:[(0,o.jsx)(`rect`,{x:.5,y:.5,width:23,height:23,rx:7.5,fill:`black`,stroke:`black`}),(0,o.jsx)(`g`,{clipPath:`url(#clip0_15251_38)`,children:(0,o.jsx)(`path`,{d:`M8.99997 16.17L4.82997 12L3.40997 13.41L8.99997 19L21 7L19.59 5.59L8.99997 16.17Z`,fill:`white`})}),(0,o.jsx)(`defs`,{children:(0,o.jsx)(`clipPath`,{id:`clip0_15251_38`,children:(0,o.jsx)(`rect`,{width:24,height:24,fill:`white`})})})]});function u({labelText:e,checked:t,onChange:n,...r}){return(0,o.jsxs)(d,{children:[(0,o.jsx)(`input`,{type:`checkbox`,...r,onChange:n,checked:t}),t?(0,o.jsx)(l,{}):(0,o.jsx)(c,{}),e&&(0,o.jsx)(`span`,{children:e})]})}var d=i.label`
  display: flex;
  align-items: center;
  gap: 8px;
  input {
    display: none;
  }

  span {
    font-weight: 500;
    font-size: 12px;
  }
`,f=class extends Error{status;constructor(e=`네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.`,t=500){super(e),this.status=t}},p=`/shopping-cart-full-stack/assets/network-error-Cm1Hioo9.png`;function m(){return(0,o.jsxs)(h,{children:[(0,o.jsx)(g,{src:p,alt:`네트워크 에러`}),(0,o.jsx)(_,{children:`네트워크 연결 오류`}),(0,o.jsx)(v,{children:`서버와 연결할 수 없습니다.`}),(0,o.jsx)(y,{children:`인터넷 연결을 확인하고 다시 시도해 주세요.`})]})}var h=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 3rem 1.5rem;
  text-align: center;
`,g=i.img`
  width: 96px;
  height: 96px;
`,_=i.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0;
`,v=i.p`
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
`,y=i.p`
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
`;function b({message:e,onClose:t,duration:n=3e3}){return(0,a.useEffect)(()=>{let e=setTimeout(t,n);return()=>clearTimeout(e)},[t,n]),(0,o.jsx)(C,{duration:n,children:(0,o.jsx)(w,{children:e})})}var x=r`
  from {
    opacity: 0;
    transform: translateY(-12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,S=r`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`,C=i.div`
  position: fixed;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  animation:
    ${x} 0.25s ease forwards,
    ${S} 0.3s ease ${({duration:e})=>e-300}ms forwards;
`,w=i.p`
  background-color: #333;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;export{s as a,u as i,m as n,f as r,b as t};