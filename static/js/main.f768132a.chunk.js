(this["webpackJsonpreact-todo-list"]=this["webpackJsonpreact-todo-list"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),c=n.n(i),l=n(5),o=n(8),s=n(1),u=n(2),m=n(4),d=n(3),p=(n(14),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("h1",null,"To Do List")}}]),n}(a.Component)),h=(n(15),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("input",{type:"text",onChange:function(t){return e.props.onChange("tempVal",t.currentTarget.value)},value:this.props.state.tempVal,placeholder:"Please Enter Sth"}),r.a.createElement("button",{onClick:this.props.onCreate},"Create"),r.a.createElement("button",{onClick:this.props.onReset,className:"btn-bg-red"},"Reset")))}}]),n}(a.Component)),f=(n(16),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.onChange,n=e.onCreate,a=e.onUpdate,i=e.onDelete,c=e.onReset,l=e.state,o=l.items.map((function(e){return r.a.createElement("li",{key:e.id,id:e.id},r.a.createElement("input",{type:"text",value:e.val,onChange:function(t){return a(e.id,t.currentTarget.value)},className:"item"}),r.a.createElement("button",{onClick:function(){return i(e)},className:"btn-delete"},"X"))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,o),r.a.createElement(h,{state:l,onChange:t,onCreate:n,onReset:c}))}}]),n}(a.Component)),b=(n(17),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={tempId:0,tempVal:"",tempEdit:"",action:"Edit",items:[{id:0,val:"sleep",d:"d-none",action:"Edit"},{id:1,val:"eat",d:"d-none",action:"Edit"}]},e.handleChange=function(t,n){e.setState(Object(o.a)({},t,n))},e.handleCreate=function(){if(""!==e.state.tempVal){var t={id:1+Math.random(),val:e.state.tempVal},n=Object(l.a)(e.state.items);n.push(t),e.setState({items:n,tempVal:""})}},e.handleUpdate=function(t,n){var a=Object(l.a)(e.state.items);a.find((function(e){return e.id===t})).val=n,e.setState({items:a})},e.handleDelete=function(t){var n=Object(l.a)(e.state.items);n=n.filter((function(e){return e!==t})),e.setState({items:n})},e.handleReset=function(){e.setState({items:[]})},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(p,null),r.a.createElement(f,{onChange:this.handleChange,onCreate:this.handleCreate,onUpdate:this.handleUpdate,onReset:this.handleReset,onDelete:this.handleDelete,state:this.state})))}}]),n}(a.Component));c.a.render(r.a.createElement(b,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.f768132a.chunk.js.map