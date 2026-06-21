import{t as e}from"./jsx-runtime-D-2VctdM.js";import{t}from"./emotion-styled.browser.esm-fClFijGW.js";function n(e){return`${e.toLocaleString(`ko-KR`)}원`}async function r({api:e,onMutate:t,onSuccess:n,onError:r}){let i=t?.();try{return await e(),n?.(),{success:!0}}catch(e){return i?.(),r?.(e),{success:!1,error:e}}}var i=t.button`
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
`,a=t(i)`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`,o=e();function s({children:e}){return(0,o.jsx)(c,{children:e})}var c=t.nav`
  padding: 1.5rem;
  background-color: #000000;
`;export{r as a,n as i,i as n,a as r,s as t};