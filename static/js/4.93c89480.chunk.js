(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{296:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__1rQF-",dialogsItems:"Dialogs_dialogsItems__VbEfY",active:"Dialogs_active__1g0Wh",dialog:"Dialogs_dialog__2jnO0",messages:"Dialogs_messages__JHx0d",message:"Dialogs_message__8zuxv",img:"Dialogs_img__gLt99",messagesBlock:"Dialogs_messagesBlock__2IsFx",newMessage:"Dialogs_newMessage__3C29Q",textarea:"Dialogs_textarea__3UEsj",button:"Dialogs_button__2PVWF"}},297:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var s=t(33),n=t(34),i=t(36),c=t(35),r=t(0),o=t.n(r),l=t(8),m=t(11),g=function(e){return{isAuth:e.auth.isAuth}},u=function(e){var a=function(a){Object(i.a)(r,a);var t=Object(c.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r,[{key:"render",value:function(){return this.props.isAuth?o.a.createElement(e,this.props):o.a.createElement(l.a,{to:"/login"})}}]),r}(o.a.Component);return Object(m.b)(g)(a)}},302:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),i=t(109),c=t(296),r=t.n(c),o=t(28),l=function(e){var a="/dialogs/"+e.id;return n.a.createElement("div",{className:r.a.dialog},n.a.createElement(o.b,{to:a,activeClassName:r.a.active},e.name),n.a.createElement("img",{className:r.a.img,src:e.imageSrc,alt:""}))},m=function(e){return n.a.createElement("div",{className:r.a.message},n.a.createElement("p",null,e.message))},g=t(90),u=t(131),d=t(99),_=t(85),b=Object(_.a)(5),f=Object(u.a)({form:"dialogs"})((function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement("div",{className:r.a.newMessage},n.a.createElement(g.a,{component:d.b,validate:[_.b,b],className:r.a.textarea,name:"newMessage",placeholder:"Enter your message"}),n.a.createElement("button",{className:r.a.button},"Send")))})),p=function(e){var a=e.dialogsPage.dialogsData.map((function(e){return n.a.createElement(l,{name:e.name,key:e.id,id:e.id,imageSrc:e.imageSrc})})),t=e.dialogsPage.messagesData.map((function(e){return n.a.createElement(m,{message:e.message,key:e.id})}));return n.a.createElement("div",{className:r.a.dialogs},n.a.createElement("div",{className:r.a.messages},n.a.createElement("div",{className:r.a.messagesBlock},t),n.a.createElement(f,{onSubmit:function(a){e.addMessage(a.newMessage)}})),n.a.createElement("div",{className:r.a.dialogsItems},a))},E=t(11),v=t(297),h=t(7);a.default=Object(h.d)(Object(E.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{addMessage:function(a){e(Object(i.a)(a))}}})),v.a)(p)}}]);
//# sourceMappingURL=4.93c89480.chunk.js.map