var l=Object.defineProperty;var i=(r,t)=>l(r,"name",{value:t,configurable:!0});import{a as n,j as e}from"./jsx-runtime-3f0323cc.js";function s({tokens:r,hasRemValue:t=!1}){return n("table",{className:"tokens-grid",children:[e("thead",{children:n("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Value"})]})}),e("tbody",{children:Object.entries(r).map(([a,d])=>n("tr",{children:[e("td",{children:a}),e("td",{children:d}),t&&n("td",{children:[Number(d.replace("rem",""))*16,"px"]})]},a))})]})}i(s,"TokensGrid");try{s.displayName="TokensGrid",s.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemValue:{defaultValue:{value:"false"},description:"",name:"hasRemValue",required:!1,type:{name:"boolean"}}}}}catch{}export{s as T};
//# sourceMappingURL=TokensGrid-88235e21.js.map
