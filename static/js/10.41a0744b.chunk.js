(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[10],{157:function(a,e,t){"use strict";var m=t(20),l=t(21),r=t(22),n=t(23),c=t(1),o=t.n(c),s=t(129),u=t(130),i=t(147),h=function(a){Object(n.a)(t,a);var e=Object(r.a)(t);function t(a){var l;return Object(m.a)(this,t),(l=e.call(this,a)).state={gambar1:null,gambar2:null,gambar3:null,gambar4:null,gambar5:null,gambar6:null,gambar7:null,gambar8:null},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var a=this;fetch("https://picsum.photos/v2/list?page=".concat(Math.floor(5*Math.random()+1),"&limit=100")).then((function(a){return a.json()})).then((function(e){a.setState({gambar1:e[Math.floor(100*Math.random()+1)].download_url,gambar2:e[Math.floor(100*Math.random()+1)].download_url,gambar3:e[Math.floor(100*Math.random()+1)].download_url,gambar4:e[Math.floor(100*Math.random()+1)].download_url,gambar5:e[Math.floor(100*Math.random()+1)].download_url,gambar6:e[Math.floor(100*Math.random()+1)].download_url,gambar7:e[Math.floor(100*Math.random()+1)].download_url,gambar8:e[Math.floor(100*Math.random()+1)].download_url})})).catch((function(a){return console.log("Error",a)}))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,null,o.a.createElement(u.a,{md:"12"},o.a.createElement("h3",{className:"border-bottom font-weight-bold pl-2 pr-2 mb-2"},"Most Popular"))),o.a.createElement(s.a,null,o.a.createElement(u.a,{lg:"12"},o.a.createElement(i.a,{className:"mb-2"},o.a.createElement(i.a,{left:!0,href:"#"},o.a.createElement("img",{src:this.state.gambar1,width:"80px",alt:"Kucing"})),o.a.createElement(i.a,{body:!0,className:"m-auto"},o.a.createElement(i.a,{heading:!0,className:"m-auto"},o.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),o.a.createElement(i.a,{className:"mb-2"},o.a.createElement(i.a,{left:!0,href:"#"},o.a.createElement("img",{src:this.state.gambar2,width:"80px",alt:"Kucing"})),o.a.createElement(i.a,{body:!0,className:"m-auto"},o.a.createElement(i.a,{heading:!0,className:"m-auto"},o.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),o.a.createElement(i.a,{className:"mb-2"},o.a.createElement(i.a,{left:!0,href:"#"},o.a.createElement("img",{src:this.state.gambar3,width:"80px",alt:"Kucing"})),o.a.createElement(i.a,{body:!0,className:"m-auto"},o.a.createElement(i.a,{heading:!0,className:"m-auto"},o.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),o.a.createElement(i.a,{className:"mb-2"},o.a.createElement(i.a,{left:!0,href:"#"},o.a.createElement("img",{src:this.state.gambar4,width:"80px",alt:"Kucing"})),o.a.createElement(i.a,{body:!0,className:"m-auto"},o.a.createElement(i.a,{heading:!0,className:"m-auto"},o.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))))),o.a.createElement(s.a,null,o.a.createElement(u.a,{md:"12"},o.a.createElement("h3",{className:"border-bottom font-weight-bold pl-2 pr-2 mb-2"},"Hot News"))),o.a.createElement(s.a,null,o.a.createElement(u.a,{lg:"12"},o.a.createElement(i.a,{className:"mb-2"},o.a.createElement(i.a,{left:!0,href:"#"},o.a.createElement("img",{src:this.state.gambar5,width:"80px",alt:"Kucing"})),o.a.createElement(i.a,{body:!0,className:"m-auto"},o.a.createElement(i.a,{heading:!0,className:"m-auto"},o.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),o.a.createElement(i.a,{className:"mb-2"},o.a.createElement(i.a,{left:!0,href:"#"},o.a.createElement("img",{src:this.state.gambar6,width:"80px",alt:"Kucing"})),o.a.createElement(i.a,{body:!0,className:"m-auto"},o.a.createElement(i.a,{heading:!0,className:"m-auto"},o.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),o.a.createElement(i.a,{className:"mb-2"},o.a.createElement(i.a,{left:!0,href:"#"},o.a.createElement("img",{src:this.state.gambar7,width:"80px",alt:"Kucing"})),o.a.createElement(i.a,{body:!0,className:"m-auto"},o.a.createElement(i.a,{heading:!0,className:"m-auto"},o.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),o.a.createElement(i.a,{className:"mb-2"},o.a.createElement(i.a,{left:!0,href:"#"},o.a.createElement("img",{src:this.state.gambar8,width:"80px",alt:"Kucing"})),o.a.createElement(i.a,{body:!0,className:"m-auto"},o.a.createElement(i.a,{heading:!0,className:"m-auto"},o.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))))))}}]),t}(c.Component);e.a=h},174:function(a,e,t){},190:function(a,e,t){"use strict";t.r(e);var m=t(20),l=t(21),r=t(22),n=t(23),c=t(1),o=t.n(c),s=t(119),u=t(152),i=t(153),h=t(129),E=t(130),d=(t(174),t(10)),b=t(157),g=function(a){Object(n.a)(t,a);var e=Object(r.a)(t);function t(){return Object(m.a)(this,t),e.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("main",{className:"App-main"},o.a.createElement("section",{id:"LabPemrograman",className:"p-3"},o.a.createElement(s.a,{className:"themed-container"},o.a.createElement(u.a,null,o.a.createElement(i.a,null,o.a.createElement(d.b,{to:"/"},"Beranda")),o.a.createElement(i.a,{active:!0},"Fasilitas"),o.a.createElement(i.a,{active:!0},"Lab Pemrograman")),o.a.createElement(h.a,null,o.a.createElement(E.a,{lg:"9"},o.a.createElement(h.a,null,o.a.createElement(E.a,{md:"12"},o.a.createElement("h1",{className:"border-bottom font-weight-bold pl-4 pr-4 mb-4"},"Lab Pemrograman")))),o.a.createElement(E.a,{lg:"3",className:"border-left"},o.a.createElement(b.a,null))))))}}]),t}(c.Component);e.default=g}}]);
//# sourceMappingURL=10.41a0744b.chunk.js.map