(this["webpackJsonptask-for-finding-words"]=this["webpackJsonptask-for-finding-words"]||[]).push([[0],{18:function(t,n,e){},2:function(t,n,e){t.exports={baseButton:"Routes_baseButton__bqCQV",variantNumber:"Routes_variantNumber__1YfWw",routeString:"Routes_routeString__1a66K",btnContainer:"Routes_btnContainer__3itwF",leftBtn:"Routes_leftBtn__2BJ5d Routes_baseButton__bqCQV",rightBtn:"Routes_rightBtn__22pJy Routes_baseButton__bqCQV",listAllVariants:"Routes_listAllVariants__3t8An",variantsItem:"Routes_variantsItem__2uB8X Routes_routeString__1a66K"}},20:function(t,n,e){},21:function(t,n,e){"use strict";e.r(n);var a=e(1),r=e.n(a),i=e(11),c=e.n(i),l=(e(18),e(12)),s=e(6),o=e(7),u=e(9),h=e(8),f=e(5),b=e(3),x=e.n(b),j=e(0),d=function(t){Object(u.a)(e,t);var n=Object(h.a)(e);function e(){var t;Object(s.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=n.call.apply(n,[this].concat(r))).onChange=function(n){var e=n.target,a=e.name,r=e.value;(0,t.props.onInput)(Object(f.a)({},a,r))},t}return Object(o.a)(e,[{key:"render",value:function(){var t=this.props,n=t.matrix,e=t.word;return Object(j.jsxs)("header",{className:x.a.header,children:[Object(j.jsxs)("label",{className:x.a.label,children:["\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043c\u0430\u0442\u0440\u0438\u0446\u0443",Object(j.jsx)("input",{className:x.a.input,type:"text",onChange:this.onChange,value:n,name:"matrix"})]}),Object(j.jsxs)("label",{className:x.a.label,children:["\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u043e",Object(j.jsx)("input",{className:x.a.input,type:"text",onChange:this.onChange,value:e,name:"word"})]})]})}}]),e}(a.Component),g=e(4),p=e.n(g),_=function(t){for(var n=t.matrix,e=t.allVariants,a=t.currentVariant,r=Math.ceil(Math.sqrt(n.length)),i=[],c=0;c<r;c+=1){for(var l=["".concat(c+1)],s=0;s<r;s+=1)n[c*r+s]?l.push(n[c*r+s]):l.push("");i.push(l)}for(var o=[],u=0;u<r+1;u+=1){o[u]=[];for(var h=0;h<r;h+=1)o[u][h]=!1}if(a>=0)if(0===a)for(var f=0;f<e.length;f+=1)for(var b=0;b<e[f].length;b+=1){var x=e[f][b].x+1,d=e[f][b].y;o[d][x]=!0}else for(var g=0;g<e[a-1].length;g+=1){var _=e[a-1][g].x+1,v=e[a-1][g].y;o[v][_]=!0}for(var y=i.map((function(t,n){return Object(j.jsx)("tr",{children:t.map((function(t,e){return Object(j.jsx)("td",{className:"".concat(e>0?p.a.cell:p.a.headerCell," ").concat(o[n][e]&&p.a.highlightCell),children:t},"".concat(n,"-").concat(e))}))},"r".concat(n))})),m=[Object(j.jsx)("th",{},"0")],O=1;O<=r;O+=1)m.push(Object(j.jsx)("th",{className:p.a.headerCell,children:O.toString()},O.toString()));return Object(j.jsxs)("table",{className:p.a.table,children:[Object(j.jsx)("thead",{children:Object(j.jsx)("tr",{children:m})}),Object(j.jsx)("tbody",{children:y})]})},v=e(2),y=e.n(v),m=function(t){return t.map((function(t){return"(".concat(t.y+1,", ").concat(t.x+1,")")})).join(" -> ")},O=function(t){var n=t.allVariants,e=t.currentVariant,a=t.onLeftBtnClick,r=t.onRightBtnClick,i=n.length;return 0===n.length?Object(j.jsx)("h1",{children:"\u041f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043f\u0443\u0442\u044c \u043d\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e!"}):(1===n.length&&(e=1),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("h1",{children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432: ",i]}),i>1&&Object(j.jsxs)("div",{className:y.a.btnContainer,children:[Object(j.jsx)("button",{className:y.a.leftBtn,type:"button",onClick:a,children:"\u2190"}),Object(j.jsx)("span",{className:y.a.variantNumber,children:0===e?"\u0412\u0441\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b":"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 ".concat(e)}),Object(j.jsx)("button",{className:y.a.rightBtn,type:"button",onClick:r,children:"\u2192"})]}),e>0&&Object(j.jsx)("p",{className:y.a.routeString,children:m(n[e-1])}),0===e&&Object(j.jsx)("ul",{className:y.a.listAllVariants,children:n.map((function(t,n){return Object(j.jsx)("li",{className:y.a.variantsItem,children:m(t)},n.toString())}))})]}))},C=(e(20),e(13)),V=[{x:0,y:-1},{x:1,y:0},{x:0,y:1},{x:-1,y:0}],B=function t(n,e,a,r){if(a===e.length)return!0;var i,c=r[a-1],l=c.x,s=c.y,o=n[0].length,u=Object(C.a)(V);try{for(u.s();!(i=u.n()).done;){var h=i.value;if(!(l+h.x<0||s+h.y<0||l+h.x===o||s+h.y===o)&&n[s+h.y][l+h.x]===e[a]){if(r.push({x:l+h.x,y:s+h.y}),t(n,e,a+1,r))return!0;r.pop()}}}catch(f){u.e(f)}finally{u.f()}return!1},N=[{x:0,y:-1},{x:1,y:0},{x:0,y:1},{x:-1,y:0}],w=function t(n,e,a,r){if(0===a)return!1;var i=n[0].length,c=r[a-1],l=c.x,s=c.y,o=N.findIndex((function(t){return t.x===r[a].x-r[a-1].x&&t.y===r[a].y-r[a-1].y}));r.pop();for(var u=o+1;u<4;u+=1)if(!(l+N[u].x<0||s+N[u].y<0||l+N[u].x===i||s+N[u].y===i)&&n[s+N[u].y][l+N[u].x]===e[a]&&(r.push({x:l+N[u].x,y:s+N[u].y}),B(n,e,a+1,r)))return!0;return t(n,e,a-=1,r)},k=function(t,n){var e=Math.ceil(Math.sqrt(t.length)),a=[],r=[];a.length=0;for(var i=0;i<e;i+=1){for(var c=[],l=0;l<e;l+=1)c.push(t[i*e+l]);r.push(c)}var s=0,o=0,u=[];for(o=t.indexOf(n[0],s);o>=0;){var h=o%e,f=Math.trunc(o/e);if(u.push({x:h,y:f}),B(r,n,1,u)&&(a.push([].concat(u)),n.length>1))for(;w(r,n,n.length-1,u);)a.push([].concat(u));s=o+1,o=t.indexOf(n[0],s),!1,u.length=0}return a},R=function(t){Object(u.a)(e,t);var n=Object(h.a)(e);function e(){var t;Object(s.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=n.call.apply(n,[this].concat(r))).state={matrix:"ABCBEFGHIBBFDFGH",word:"",allVariants:[],currentVariant:-1},t.onInputChange=function(n){t.setState(Object(l.a)({},n))},t.onLeftBtnClick=function(){var n=t.state,e=n.currentVariant,a=n.allVariants;e>0?t.setState((function(t){return{currentVariant:t.currentVariant-1}})):t.setState((function(){return{currentVariant:a.length}}))},t.onRightBtnClick=function(){var n=t.state;n.currentVariant<n.allVariants.length?t.setState((function(t){return{currentVariant:t.currentVariant+1}})):t.setState((function(){return{currentVariant:0}}))},t}return Object(o.a)(e,[{key:"componentDidUpdate",value:function(t,n){var e=this.state,a=e.matrix,r=e.word;if(n.word.length>0&&0===r.length&&this.setState({allVariants:[],currentVariant:-1}),n.word!==r&&r.length>0){var i=k(a,r),c=i.length>0?0:-1;this.setState({allVariants:i,currentVariant:c})}n.matrix!==a&&this.setState({word:""})}},{key:"render",value:function(){var t=this.state,n=t.matrix,e=t.word,a=t.allVariants,r=t.currentVariant;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(d,{onInput:this.onInputChange,matrix:n,word:e}),n.length>0&&Object(j.jsx)(_,{matrix:n,allVariants:a,currentVariant:r}),e.length>0&&Object(j.jsx)(O,{allVariants:a,currentVariant:r,onLeftBtnClick:this.onLeftBtnClick,onRightBtnClick:this.onRightBtnClick})]})}}]),e}(a.Component),S=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,22)).then((function(n){var e=n.getCLS,a=n.getFID,r=n.getFCP,i=n.getLCP,c=n.getTTFB;e(t),a(t),r(t),i(t),c(t)}))};c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(R,{})}),document.getElementById("root")),S()},3:function(t,n,e){t.exports={header:"Header_header__3dbQr",input:"Header_input__3hX8q",label:"Header_label__2dRnV"}},4:function(t,n,e){t.exports={table:"Table_table__1Dvwy",cell:"Table_cell__2HtRM",headerCell:"Table_headerCell__2s4fO",highlightCell:"Table_highlightCell__2tsLy"}}},[[21,1,2]]]);
//# sourceMappingURL=main.61e2da68.chunk.js.map