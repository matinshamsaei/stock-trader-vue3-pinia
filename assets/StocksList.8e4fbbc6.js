import{_ as S,u as b,h as f,r as y,c as i,o as n,a as u,b as t,e as g,t as r,w as x,v as I,d as e,n as v,i as B,F as L,f as C,g as F}from"./index.2ccccd26.js";const N={class:"col-sm-6 col-md-4"},V={class:"panel panel-success"},w={class:"panel-heading"},D={class:"pull-right"},P={class:"panel-body"},Q={class:"pull-left"},T={class:"pull-right"},q=["disabled"],z={__name:"StockItem",props:["stock"],setup(d){const o=d,l=b(),_=f();let s=y("");const c=i(()=>l.fundsAmount),a=i(()=>s.value*o.stock.price>c.value);function h(){const p={stockId:o.stock.id,stockPrice:o.stock.price,stockQuantity:s.value};_.buyStocks(p),s.value=0}return(p,k)=>(n(),u("div",N,[t("div",V,[t("div",w,[g(r(o.stock.name)+" ",1),t("small",D,r(o.stock.price),1)]),t("div",P,[t("div",Q,[x(t("input",{class:v(["form-control",{crime:e(a)}]),placeholder:"Quantity",type:"number","onUpdate:modelValue":k[0]||(k[0]=m=>B(s)?s.value=m:s=m)},null,2),[[I,e(s)]])]),t("div",T,[t("button",{class:v(["btn btn-success",{"btn-danger":e(a)}]),onClick:h,disabled:e(a)||e(s)<=0||!Number.isInteger(e(s))},r(e(a)?"Insufficients Funds":"Buy"),11,q)])])])]))}};var A=S(z,[["__scopeId","data-v-0d61a9c6"]]);const M={__name:"StocksList",setup(d){const o=f(),l=i(()=>o.stocksList);return(_,s)=>(n(),u("div",null,[(n(!0),u(L,null,C(e(l),c=>(n(),F(A,{key:c.id,stock:c},null,8,["stock"]))),128))]))}};export{M as default};