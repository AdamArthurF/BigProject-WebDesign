(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/sUg":function(e,t,a){"use strict";a.r(t);var n=a("1OyB"),r=a("vuIU"),o=a("Ji7U"),i=a("md7G"),s=a("foSv"),l=a("q1tI"),c=a.n(l),u=a("1Yj4"),f=a("XI7o"),d=a("EvW+"),p=a("ok1R"),b=a("rhny"),m=a("wx14"),h=a("zLVn"),g=a("JX7q"),v=a("dI71"),j=a("17x9"),y=a.n(j),O=a("TSYQ"),N=a.n(O),R=a("33Jr"),w={children:y.a.node,inline:y.a.bool,tag:R.i,innerRef:y.a.oneOfType([y.a.object,y.a.func,y.a.string]),className:y.a.string,cssModule:y.a.object},x=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(g.a)(a)),a.submit=a.submit.bind(Object(g.a)(a)),a}Object(v.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,n=e.inline,r=e.tag,o=e.innerRef,i=Object(h.a)(e,["className","cssModule","inline","tag","innerRef"]),s=Object(R.f)(N()(t,!!n&&"form-inline"),a);return c.a.createElement(r,Object(m.a)({},i,{ref:o,className:s}))},t}(l.Component);x.propTypes=w,x.defaultProps={tag:"form"};var z=x,k={children:y.a.node,row:y.a.bool,check:y.a.bool,inline:y.a.bool,disabled:y.a.bool,tag:R.i,className:y.a.string,cssModule:y.a.object},M=function(e){var t=e.className,a=e.cssModule,n=e.row,r=e.disabled,o=e.check,i=e.inline,s=e.tag,l=Object(h.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),u=Object(R.f)(N()(t,!!n&&"row",o?"form-check":"form-group",!(!o||!i)&&"form-check-inline",!(!o||!r)&&"disabled"),a);return"fieldset"===s&&(l.disabled=r),c.a.createElement(s,Object(m.a)({},l,{className:u}))};M.propTypes=k,M.defaultProps={tag:"div"};var E=M,P=y.a.oneOfType([y.a.number,y.a.string]),T=y.a.oneOfType([y.a.string,y.a.number,y.a.shape({size:P,order:P,offset:P})]),S={children:y.a.node,hidden:y.a.bool,check:y.a.bool,size:y.a.string,for:y.a.string,tag:R.i,className:y.a.string,cssModule:y.a.object,xs:T,sm:T,md:T,lg:T,xl:T,widths:y.a.array},C={tag:"label",widths:["xs","sm","md","lg","xl"]},I=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},U=function(e){var t=e.className,a=e.cssModule,n=e.hidden,r=e.widths,o=e.tag,i=e.check,s=e.size,l=e.for,u=Object(h.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),f=[];r.forEach((function(t,n){var r=e[t];if(delete u[t],r||""===r){var o,i=!n;if(Object(R.d)(r)){var s,l=i?"-":"-"+t+"-";o=I(i,t,r.size),f.push(Object(R.f)(N()(((s={})[o]=r.size||""===r.size,s["order"+l+r.order]=r.order||0===r.order,s["offset"+l+r.offset]=r.offset||0===r.offset,s))),a)}else o=I(i,t,r),f.push(o)}}));var d=Object(R.f)(N()(t,!!n&&"sr-only",!!i&&"form-check-label",!!s&&"col-form-label-"+s,f,!!f.length&&"col-form-label"),a);return c.a.createElement(o,Object(m.a)({htmlFor:l},u,{className:d}))};U.propTypes=S,U.defaultProps=C;var _=U,q={children:y.a.node,type:y.a.string,size:y.a.string,bsSize:y.a.string,valid:y.a.bool,invalid:y.a.bool,tag:R.i,innerRef:y.a.oneOfType([y.a.object,y.a.func,y.a.string]),plaintext:y.a.bool,addon:y.a.bool,className:y.a.string,cssModule:y.a.object},A=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(g.a)(a)),a.focus=a.focus.bind(Object(g.a)(a)),a}Object(v.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,n=e.type,r=e.bsSize,o=e.valid,i=e.invalid,s=e.tag,l=e.addon,u=e.plaintext,f=e.innerRef,d=Object(h.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),p=["radio","checkbox"].indexOf(n)>-1,b=new RegExp("\\D","g"),g=s||("select"===n||"textarea"===n?n:"input"),v="form-control";u?(v+="-plaintext",g=s||"input"):"file"===n?v+="-file":p&&(v=l?null:"form-check-input"),d.size&&b.test(d.size)&&(Object(R.j)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=d.size,delete d.size);var j=Object(R.f)(N()(t,i&&"is-invalid",o&&"is-valid",!!r&&"form-control-"+r,v),a);return("input"===g||s&&"function"===typeof s)&&(d.type=n),d.children&&!u&&"select"!==n&&"string"===typeof g&&"select"!==g&&(Object(R.j)('Input with a type of "'+n+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete d.children),c.a.createElement(g,Object(m.a)({},d,{ref:f,className:j}))},t}(c.a.Component);A.propTypes=q,A.defaultProps={type:"text"};var F=A,J=a("Zdas"),X=a("YFqc"),L=a.n(X),B=a("8Kt/"),D=a.n(B),K=a("RXBc"),Y=c.a.createElement;function V(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(s.a)(e);if(t){var r=Object(s.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(i.a)(this,a)}}var G=function(e){Object(o.a)(a,e);var t=V(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Y(c.a.Fragment,null,Y(D.a,null,Y("title",null,"Laboratorium Komputasi FMIPA UNS | Contact"),Y("link",{rel:"icon",href:"/favicon.ico"})),Y(K.AppHeader,null,Y(K.AppNavbar,null)),Y("main",{className:"App-main"},Y("section",{id:"Contact",className:"p-3"},Y(u.a,{className:"themed-container"},Y(f.a,null,Y(d.a,null,Y(L.a,{href:"/"},Y("a",null,"Beranda"))),Y(d.a,{active:!0},"Contact")),Y(p.a,null,Y(b.a,{lg:"9"},Y(p.a,null,Y(b.a,{md:"12"},Y("h1",{className:"border-bottom font-weight-bold pl-4 pr-4 mb-4"},"Contact"))),Y(p.a,null,Y(b.a,{md:"12"},Y(z,{method:"post"},Y(E,null,Y(_,{for:"username"},"Username"),Y(F,{type:"text",id:"username",required:!0,maxLength:"25"})),Y(E,null,Y(_,{for:"email"},"Email"),Y(F,{type:"email",id:"email",required:!0,maxLength:"25"})),Y(E,null,Y(_,{for:"text"},"Pesan"),Y(F,{type:"textarea",id:"text",rows:"10"})),Y(E,null,Y(F,{type:"submit",value:"Kirim",className:"btn btn-outline-info"})))))),Y(b.a,{lg:"3",className:"border-left"},Y(J.a,null)))))),Y(K.AppFooter,null))}}]),a}(l.Component);t.default=G},SjN1:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Contact",function(){return a("/sUg")}])}},[["SjN1",0,2,1,3]]]);