(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),l=(n(17),n(3)),i=n(4),s=n(6),u=n(5),h=n(7),m=function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?200*200")}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,a)))},d=function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e,n){return r.a.createElement(m,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}))},b=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2 ma2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},f=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},e.children)},p=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({robots:t})})}},{key:"render",value:function(){var e=this,t=this.state.robots.filter(function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())});return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"pa2 ma2 f-subheadline lh-title light-yellow"},"RoboFriends"),r.a.createElement(b,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(d,{robots:t})))}}]),t}(a.Component),g=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,22)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)})};n(19);o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null))),g()},8:function(e,t,n){e.exports=n(21)}},[[8,3,2]]]);
//# sourceMappingURL=main.5ffdbbf2.chunk.js.map