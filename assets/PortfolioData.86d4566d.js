import{_ as v,u as f,r as h,c as m,o as n,a as i,b as s,e as b,t as l,w as y,v as S,d as e,n as k,i as g,F as P,f as x,g as B}from"./index.2ccccd26.js";const N={class:"col-sm-6 col-md-4"},q={class:"panel panel-info"},C={class:"panel-heading"},D={class:"pull-right"},I={class:"panel-body"},Q={class:"pull-left"},V={class:"pull-right"},w=["disabled"],E={__name:"PortfolioStock",props:["stock"],setup(d){const o=d,r=f();let t=h("");const a=m(()=>t.value>o.stock.quantity);function c(){const _={stockId:o.stock.id,stockPrice:o.stock.price,stockQuantity:t.value};r.sellStocks(_),t.value=0}return(_,u)=>(n(),i("div",N,[s("div",q,[s("div",C,[b(l(o.stock.name)+" ",1),s("small",D," Price: "+l(o.stock.price)+" | Quantity: "+l(o.stock.quantity),1)]),s("div",I,[s("div",Q,[y(s("input",{class:k(["form-control",{crime:e(a)}]),placeholder:"Quantity",type:"number","onUpdate:modelValue":u[0]||(u[0]=p=>g(t)?t.value=p:t=p)},null,2),[[S,e(t)]])]),s("div",V,[s("button",{class:k(["btn btn-info",{"btn-danger":e(a)}]),onClick:c,disabled:e(a)||e(t)<=0||!Number.isInteger(e(t))},l(e(a)?"Not Enough":"Sell"),11,w)])])])]))}};var F=v(E,[["__scopeId","data-v-5b52da6b"]]);const z={__name:"PortfolioData",setup(d){const o=f(),r=m(()=>o.stockPortfolio);return(t,a)=>(n(),i("div",null,[(n(!0),i(P,null,x(e(r),c=>(n(),B(F,{key:c.id,stock:c},null,8,["stock"]))),128))]))}};export{z as default};