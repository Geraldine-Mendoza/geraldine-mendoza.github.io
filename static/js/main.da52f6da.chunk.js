(this["webpackJsonpportfolio-site"]=this["webpackJsonpportfolio-site"]||[]).push([[0],{39:function(e,t,a){e.exports=a.p+"static/media/rectangle.88c2f227.svg"},46:function(e,t,a){e.exports=a.p+"static/media/prom_profile.c62539e5.jpeg"},47:function(e,t,a){e.exports=a(62)},52:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),o=a(17),i=a(18),s=a(21),m=a(19),u=a(22),p=a(26),d=a(25),h=a(12),E=a(23),b=(a(42),a(32)),f=a(43);a(52);var g=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.categories;return console.log(e),r.a.createElement(b.a,{bg:"dark",expand:"lg",variant:"dark",sticky:"top"},r.a.createElement(b.a.Brand,{href:"#Home"},"ME"),r.a.createElement(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(b.a.Collapse,{id:"basic-navbar-nav",className:"justify-content-end"},r.a.createElement(f.a,null,function(e){return console.log(e),e.map((function(e,t){return r.a.createElement(f.a.Link,{href:"#"+e.name},e.name)}))}(e))))}}]),t}(n.Component),j=a(29),v=a(46),y=a.n(v),k=(a(57),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.categories;return console.log(e),r.a.createElement("div",{id:"Home",className:"home-and-button"},r.a.createElement("div",{className:" home-all"},r.a.createElement(p.a,{className:"mt-lg-4 mt-md-5 mt-sm-1 mt-xs-1"},r.a.createElement(d.a,{className:"justify-content-md-center"},r.a.createElement(h.a,{className:"profile no-gutters"},r.a.createElement(j.a,{src:y.a,alt:"Geraldine Mendoza",thumbnail:!0,className:"profilepic",roundedCircle:!0})),r.a.createElement(h.a,{className:"md-5 about-me"},r.a.createElement("p",null," ",r.a.createElement("b",null,"Geraldine Mendoza "),r.a.createElement("br",null),"University of Waterloo ",r.a.createElement("br",null),"Candidate for B.A.Sc in Honours Computer Science"))))))}}]),t}(n.Component)),O=a(10),P=a(40),N=a(39),C=a.n(N);a(58);var x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={gitProjects:[{name:"Pretty Notes",shortDescription:"A note-taking app created to keep text snippets in a clean, minimalist space.",description:"Pretty notes app.",url:"https://github.com/Geraldine-Mendoza/pretty-notes"},{name:"Track-Your-Reading",shortDescription:"An app for younger students to track their reading through calendar, achievement and shelf features.",description:"For annoying little kids.",url:"https://github.com/Geraldine-Mendoza/SwiftAppFinal-1"},{name:"GitHub Evaluator",shortDescription:"A website allowing employers to check the quality of a Github user's code through complexity metrics.",description:"I don't know what this is.",url:"https://github.com/Geraldine-Mendoza/Hack-the-North2019"}],isModalOpen:!1,openProject:{name:null,shortDescription:null,description:null}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"openModalWith",value:function(e){this.setState({gitProjects:this.state.gitProjects,isModalOpen:!0,openProject:e})}},{key:"hideModal",value:function(){console.log(this.state.gitProjects),this.setState({gitProjects:this.state.gitProjects,isModalOpen:!1,openProject:{name:null,shortDescription:null,description:null}})}},{key:"render",value:function(){var e=this,t=this.state.gitProjects;return r.a.createElement("div",{id:"Projects",className:"projects-all"},r.a.createElement("div",{className:"projects-overview"},r.a.createElement("h1",null,"Projects")),r.a.createElement(P.a,{show:this.state.isModalOpen,onHide:function(){return e.setState({gitProjects:e.state.gitProjects,isModalOpen:!1,openProject:e.state.openProject})},size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},r.a.createElement(P.a.Header,{closeButton:!0}),r.a.createElement(P.a.Body,null,r.a.createElement("h1",null,this.state.openProject.name)," ",r.a.createElement("hr",null),r.a.createElement("div",{className:"modal-image"},r.a.createElement(j.a,{src:C.a})),r.a.createElement("p",null,this.state.openProject.description))),r.a.createElement(p.a,{className:"card-deck mx-auto"},r.a.createElement(d.a,{className:"card-row"},t.map((function(e,t){return r.a.createElement(h.a,{style:{maxWidth:"380px",paddingBottom:"2em",margin:"0 auto",minWidth:"300px"}},r.a.createElement(O.a,{className:"project-card"},r.a.createElement(O.a.Img,{variant:"top",src:C.a}),r.a.createElement(O.a.Body,null,r.a.createElement(O.a.Title,null,e.name),r.a.createElement(O.a.Text,null,e.shortDescription),r.a.createElement(E.a,{variant:"primary",href:e.url},"Learn More"))))})))))}}]),t}(n.Component);a(59),a(60);function M(){return r.a.createElement(p.a,{id:"Contact"},r.a.createElement(d.a,{className:"justify-content-center"},r.a.createElement("h1",null,"Contact")),r.a.createElement(d.a,{className:"justify-content-center"},r.a.createElement(h.a,{style:{minWidth:"260px"}},r.a.createElement("a",{href:"https://github.com/Geraldine-Mendoza"},r.a.createElement(E.a,{style:{"background-color":"#9ca6d9 !important"},block:!0},r.a.createElement("h3",null,"Github")))),r.a.createElement(h.a,{style:{minWidth:"260px"}},r.a.createElement(E.a,{block:!0},r.a.createElement("h3",null,"LinkedIn"))),r.a.createElement(h.a,{style:{minWidth:"260px"}},r.a.createElement(E.a,{block:!0},r.a.createElement("div",{className:"button-div"},r.a.createElement("h3",null,"Email"))))))}var w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={menuCategories:[{name:"Home",subCat:[]},{name:"About",subCat:[]},{name:"Projects",subCat:[]},{name:"Contact",subCat:[]}]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,{categories:this.state.menuCategories}),r.a.createElement(k,null),r.a.createElement(x,null),r.a.createElement(M,null),r.a.createElement("div",{style:{height:"8vh"}}))}}]),t}(n.Component);a(61);l.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.da52f6da.chunk.js.map