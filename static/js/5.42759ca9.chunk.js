(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[5],{157:function(e,a,t){"use strict";var l=t(20),m=t(21),r=t(22),n=t(23),c=t(1),s=t.n(c),o=t(129),i=t(130),u=t(147),d=function(e){Object(n.a)(t,e);var a=Object(r.a)(t);function t(e){var m;return Object(l.a)(this,t),(m=a.call(this,e)).state={gambar1:null,gambar2:null,gambar3:null,gambar4:null,gambar5:null,gambar6:null,gambar7:null,gambar8:null},m}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://picsum.photos/v2/list?page=".concat(Math.floor(5*Math.random()+1),"&limit=100")).then((function(e){return e.json()})).then((function(a){e.setState({gambar1:a[Math.floor(100*Math.random()+1)].download_url,gambar2:a[Math.floor(100*Math.random()+1)].download_url,gambar3:a[Math.floor(100*Math.random()+1)].download_url,gambar4:a[Math.floor(100*Math.random()+1)].download_url,gambar5:a[Math.floor(100*Math.random()+1)].download_url,gambar6:a[Math.floor(100*Math.random()+1)].download_url,gambar7:a[Math.floor(100*Math.random()+1)].download_url,gambar8:a[Math.floor(100*Math.random()+1)].download_url})})).catch((function(e){return console.log("Error",e)}))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,null,s.a.createElement(i.a,{md:"12"},s.a.createElement("h3",{className:"border-bottom font-weight-bold pl-2 pr-2 mb-2"},"Most Popular"))),s.a.createElement(o.a,null,s.a.createElement(i.a,{lg:"12"},s.a.createElement(u.a,{className:"mb-2"},s.a.createElement(u.a,{left:!0,href:"#"},s.a.createElement("img",{src:this.state.gambar1,width:"80px",alt:"Kucing"})),s.a.createElement(u.a,{body:!0,className:"m-auto"},s.a.createElement(u.a,{heading:!0,className:"m-auto"},s.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),s.a.createElement(u.a,{className:"mb-2"},s.a.createElement(u.a,{left:!0,href:"#"},s.a.createElement("img",{src:this.state.gambar2,width:"80px",alt:"Kucing"})),s.a.createElement(u.a,{body:!0,className:"m-auto"},s.a.createElement(u.a,{heading:!0,className:"m-auto"},s.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),s.a.createElement(u.a,{className:"mb-2"},s.a.createElement(u.a,{left:!0,href:"#"},s.a.createElement("img",{src:this.state.gambar3,width:"80px",alt:"Kucing"})),s.a.createElement(u.a,{body:!0,className:"m-auto"},s.a.createElement(u.a,{heading:!0,className:"m-auto"},s.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),s.a.createElement(u.a,{className:"mb-2"},s.a.createElement(u.a,{left:!0,href:"#"},s.a.createElement("img",{src:this.state.gambar4,width:"80px",alt:"Kucing"})),s.a.createElement(u.a,{body:!0,className:"m-auto"},s.a.createElement(u.a,{heading:!0,className:"m-auto"},s.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))))),s.a.createElement(o.a,null,s.a.createElement(i.a,{md:"12"},s.a.createElement("h3",{className:"border-bottom font-weight-bold pl-2 pr-2 mb-2"},"Hot News"))),s.a.createElement(o.a,null,s.a.createElement(i.a,{lg:"12"},s.a.createElement(u.a,{className:"mb-2"},s.a.createElement(u.a,{left:!0,href:"#"},s.a.createElement("img",{src:this.state.gambar5,width:"80px",alt:"Kucing"})),s.a.createElement(u.a,{body:!0,className:"m-auto"},s.a.createElement(u.a,{heading:!0,className:"m-auto"},s.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),s.a.createElement(u.a,{className:"mb-2"},s.a.createElement(u.a,{left:!0,href:"#"},s.a.createElement("img",{src:this.state.gambar6,width:"80px",alt:"Kucing"})),s.a.createElement(u.a,{body:!0,className:"m-auto"},s.a.createElement(u.a,{heading:!0,className:"m-auto"},s.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),s.a.createElement(u.a,{className:"mb-2"},s.a.createElement(u.a,{left:!0,href:"#"},s.a.createElement("img",{src:this.state.gambar7,width:"80px",alt:"Kucing"})),s.a.createElement(u.a,{body:!0,className:"m-auto"},s.a.createElement(u.a,{heading:!0,className:"m-auto"},s.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),s.a.createElement(u.a,{className:"mb-2"},s.a.createElement(u.a,{left:!0,href:"#"},s.a.createElement("img",{src:this.state.gambar8,width:"80px",alt:"Kucing"})),s.a.createElement(u.a,{body:!0,className:"m-auto"},s.a.createElement(u.a,{heading:!0,className:"m-auto"},s.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))))))}}]),t}(c.Component);a.a=d},158:function(e,a,t){},177:function(e,a,t){"use strict";t.r(a);var l=t(20),m=t(21),r=t(22),n=t(23),c=t(1),s=t.n(c),o=t(119),i=t(129),u=t(130),d=t(131),E=t(132),h=t(138),g=t(143),b=t(142),p=t(58),f=t(144),N=t(145),w=t(146),M=(t(158),t(157)),v=function(e){Object(n.a)(t,e);var a=Object(r.a)(t);function t(e){var m;return Object(l.a)(this,t),(m=a.call(this,e)).state={gambar1:null,gambar2:null,gambar3:null,gambar4:null,gambar5:null,gambar6:null},m}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://picsum.photos/v2/list?page=".concat(Math.floor(5*Math.random()+1),"&limit=100")).then((function(e){return e.json()})).then((function(a){e.setState({gambar1:a[Math.floor(100*Math.random()+1)].download_url,gambar2:a[Math.floor(100*Math.random()+1)].download_url,gambar3:a[Math.floor(100*Math.random()+1)].download_url,gambar4:a[Math.floor(100*Math.random()+1)].download_url,gambar5:a[Math.floor(100*Math.random()+1)].download_url,gambar6:a[Math.floor(100*Math.random()+1)].download_url})})).catch((function(e){return console.log("Error:",e)}))}},{key:"render",value:function(){return s.a.createElement("section",{id:"Berita",className:"p-3"},s.a.createElement(o.a,{className:"themed-container"},s.a.createElement(i.a,null,s.a.createElement(u.a,{md:"12"},s.a.createElement("h1",{className:"border-bottom font-weight-bold pl-4 pr-4 mb-4"},"Berita"))),s.a.createElement(i.a,null,s.a.createElement(u.a,{lg:"5"},s.a.createElement(d.a,{className:"mb-2"},s.a.createElement(E.a,null,s.a.createElement(h.a,{top:!0,src:this.state.gambar1,alt:"React",className:"img-fluid"}),s.a.createElement(g.a,null,s.a.createElement("h1",{className:"mt-1"},"React : A Javascript library for building user interfaces")),s.a.createElement(b.a,{className:"mb-2"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi dicta ea ipsum maiores optio repellendus similique tenetur ut veniam!?..."),s.a.createElement(b.a,null,s.a.createElement("small",{className:"text-muted"},"Last updated 3 mins ago")),s.a.createElement(p.a,{color:"info"},"Selengkapnya ..."))),s.a.createElement(d.a,{className:"mb-2"},s.a.createElement(E.a,null,s.a.createElement(h.a,{top:!0,src:this.state.gambar2,alt:"React",className:"img-fluid"}),s.a.createElement(g.a,null,s.a.createElement("h1",{className:"mt-1"},"Reactstrap : CSS with superpowers")),s.a.createElement(b.a,{className:"mb-2"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi dicta ea ipsum maiores optio repellendus similique tenetur ut veniam!?..."),s.a.createElement(b.a,null,s.a.createElement("small",{className:"text-muted"},"Last updated 3 mins ago")),s.a.createElement(p.a,{color:"info"},"Selengkapnya ..."))),s.a.createElement(d.a,{className:"mb-2"},s.a.createElement(E.a,null,s.a.createElement(h.a,{top:!0,src:this.state.gambar3,alt:"React",className:"img-fluid"}),s.a.createElement(g.a,null,s.a.createElement("h1",{className:"mt-1"},"SASS : CSS with superpowers")),s.a.createElement(b.a,{className:"mb-2"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi dicta ea ipsum maiores optio repellendus similique tenetur ut veniam!?..."),s.a.createElement(b.a,null,s.a.createElement("small",{className:"text-muted"},"Last updated 3 mins ago")),s.a.createElement(p.a,{color:"info"},"Selengkapnya ...")))),s.a.createElement(u.a,{lg:"4",className:"d-flex flex-column border-right"},s.a.createElement(d.a,{className:"mb-2"},s.a.createElement(E.a,null,s.a.createElement(h.a,{top:!0,src:this.state.gambar4,alt:"Ruby on Rails",className:"img-fluid"}),s.a.createElement(g.a,null,s.a.createElement("h2",{className:"mt-1"},"Ruby on Rails : Web Development that's doesn't hurt")),s.a.createElement(b.a,{className:"mb-2"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consectetur harum in, possimus sunt tempora....."),s.a.createElement(b.a,null,s.a.createElement("small",{className:"text-muted"},"Last updated 3 mins ago")),s.a.createElement(p.a,{color:"info"},"Selengkapnya ..."))),s.a.createElement(d.a,{className:"mb-2"},s.a.createElement(E.a,null,s.a.createElement(h.a,{top:!0,src:this.state.gambar5,alt:"Ruby on Rails",className:"img-fluid"}),s.a.createElement(g.a,null,s.a.createElement("h2",{className:"mt-1"},"Django : The Web framework for perfectionists with deadlines")),s.a.createElement(b.a,{className:"mb-2"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor, illum mollitia natus porro sint!...."),s.a.createElement(b.a,null,s.a.createElement("small",{className:"text-muted"},"Last updated 3 mins ago")),s.a.createElement(p.a,{color:"info"},"Selengkapnya ..."))),s.a.createElement(d.a,{className:"mb-2"},s.a.createElement(E.a,null,s.a.createElement(h.a,{top:!0,src:this.state.gambar6,alt:"Laravel",className:"img-fluid"}),s.a.createElement(g.a,null,s.a.createElement("h2",{className:"mt-1"},"Laravel : The Php Framework for web artisans")),s.a.createElement(b.a,{className:"mb-2"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid architecto iste nulla sed sint?...."),s.a.createElement(b.a,null,s.a.createElement("small",{className:"text-muted"},"Last updated 3 mins ago")),s.a.createElement(p.a,{color:"info"},"Selengkapnya ...")))),s.a.createElement(u.a,{lg:"3"},s.a.createElement(M.a,null))),s.a.createElement(i.a,null,s.a.createElement(u.a,{md:"12",className:"mt-4 d-flex flex-row justify-content-center"},s.a.createElement(f.a,{"aria-label":"Labkom Page navigation"},s.a.createElement(N.a,{disabled:!0},s.a.createElement(w.a,{first:!0,href:"#"})),s.a.createElement(N.a,{disabled:!0},s.a.createElement(w.a,{previous:!0,href:"#"})),s.a.createElement(N.a,{active:!0},s.a.createElement(w.a,{href:"#"},"1")),s.a.createElement(N.a,null,s.a.createElement(w.a,{href:"#"},"2")),s.a.createElement(N.a,null,s.a.createElement(w.a,{href:"#"},"3")),s.a.createElement(N.a,null,s.a.createElement(w.a,{next:!0,href:"#"})),s.a.createElement(N.a,null,s.a.createElement(w.a,{last:!0,href:"#"})))))))}}]),t}(c.Component);a.default=v}}]);
//# sourceMappingURL=5.42759ca9.chunk.js.map