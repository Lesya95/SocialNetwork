(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return u}));var a=n(141),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"2be884d6-9097-43dc-a1f4-bff05001988d"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollow:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))},getUserProfile:function(e){return console.warn("obsolete method, please profileAPI object"),c.getUserProfile(e)}},c={getUserProfile:function(e){return r.get("profile/"+e).then((function(e){return e.data}))},getStatus:function(e){return r.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return r.put("profile/status",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveUserData:function(e){return r.put("profile",e).then((function(e){return e.data}))}},i={me:function(){return r.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a}).then((function(e){return e.data}))},logout:function(){return r.delete("auth/login").then((function(e){return e.data}))}},u={getCaptchaUrl:function(){return r.get("security/get-captcha-url")}}},102:function(e,t,n){e.exports={title:"Initial_title__3V1np",img:"Initial_img__3OKN9"}},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(47),r=n(4),o={dialogsData:[{id:1,name:"Mark",imageSrc:"https://yt3.ggpht.com/a/AATXAJxthr9nDPbKhJIu5DEsJ0uHsPH0WSEDQF7uZo5pDA=s900-c-k-c0xffffffff-no-rj-mo"},{id:2,name:"John",imageSrc:"https://yt3.ggpht.com/a/AATXAJzHLJfkjoU61FIkVK5ye1LJgQbIngHPy87DRVgm=s900-c-k-c0xffffffff-no-rj-mo"},{id:3,name:"Maria",imageSrc:"https://yt3.ggpht.com/a/AATXAJyR7U5ykD6u7x_aAONJV7DOiGSchVoMXy_xRDqUYg=s900-c-k-c0xffffffff-no-rj-mo"},{id:4,name:"Jain",imageSrc:"https://yt3.ggpht.com/a/AATXAJydcQ-trfDU7yDBaCQvHWGwc5S8vKeZbvzAdg=s900-c-k-c0xffffffff-no-rj-mo"},{id:5,name:"Sveta",imageSrc:"https://yt3.ggpht.com/a/AATXAJwrMtJcMHGB4FeIjrQUYWd2Pw5u6Pu9BzKpgQ=s900-c-k-c0xffffffff-no-rj-mo"},{id:6,name:"Masha",imageSrc:"https://yt3.ggpht.com/a/AATXAJxBep478nG6aewuVACbTn618sNqNKiiEEkPSagvVw=s900-c-k-c0xffffffff-no-rj-mo"},{id:7,name:"Lesya",imageSrc:"https://yt3.ggpht.com/a/AGF-l7-6g_aN-PuejAdg2u9oCU6a1WOqkI7o93OaiA=s900-c-k-c0xffffffff-no-rj-mo"}],messagesData:[{id:1,message:"Hi"},{id:2,message:"How are you doing?"},{id:3,message:"I'm fine and you?"},{id:4,message:"Thanks, I'm too"},{id:5,message:"What are you doing?"}]},c=function(e){return{type:"ADD-MESSAGE",newMessage:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":return Object(r.a)(Object(r.a)({},e),{},{messagesData:[].concat(Object(a.a)(e.messagesData),[{id:5,message:t.newMessage}])});default:return e}}},136:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return E})),n.d(t,"e",(function(){return v})),n.d(t,"b",(function(){return O}));var a=n(7),r=n.n(a),o=n(13),c=n(47),i=n(4),u=n(10),s=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(i.a)(Object(i.a)({},e),a):e}))},l="users/FOLLOW",f={users:[],pageSize:50,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},m=function(e){return{type:l,usersId:e}},p=function(e){return{type:"users/UNFOLLOW",usersId:e}},d=function(e){return{type:"users/SET_CURRENT_PAGE",pageNumber:e}},g=function(e){return{type:"users/TOGGLE_IS_FETCHING",isFetching:e}},h=function(e,t){return{type:"users/TOGGLE_IS_FOLLOWING_PROGRESS",followingInProgress:e,userId:t}},E=function(e,t){return function(){var n=Object(o.a)(r.a.mark((function n(a){var o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(g(!0)),n.next=3,u.d.getUsers(e,t);case 3:o=n.sent,a({type:"users/SET_USERS",users:o.items}),a({type:"users/SET_USERS_TOTAL_COUNT",count:o.totalCount}),a(g(!1));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},b=function(){var e=Object(o.a)(r.a.mark((function e(t,n,a,o){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(h(!0,n)),e.next=3,a(n);case 3:0===e.sent.resultCode&&t(o(n)),t(h(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),v=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:b(n,e,u.d.unfollow.bind(u.d),p);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:b(n,e,u.d.follow.bind(u.d),m);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),{},{users:s(e.users,t.usersId,"id",{followed:!0})});case"users/UNFOLLOW":return Object(i.a)(Object(i.a)({},e),{},{users:s(e.users,t.usersId,"id",{followed:!1})});case"users/SET_USERS":return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case"users/SET_CURRENT_PAGE":return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.pageNumber});case"users/SET_USERS_TOTAL_COUNT":return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.count});case"users/TOGGLE_IS_FETCHING":return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case"users/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.followingInProgress?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):[e.followingInProgress.filter((function(e){return e!=t.userId}))]});default:return e}}},138:function(e,t,n){e.exports=n.p+"static/media/preloader.e4399d40.svg"},140:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAACzUlEQVRoge2aT2sUMRjGf93VeulW8KZYkAou2Ba0HpWeBf+dvHpQ6dVPotha9TMohaKiILV612PrUarbVVBU2FlvVtZDZpBm/nSTvBOj5AfvYbq8T94nk0kymUIkEolEIpH/jTngFZAAA8NI0tw571Vbchb4iblRPX4BFzzXbswI8A53s1lsAg2vDgyZRc5sFqckC5TuvVlhPYATkmLShk8K60E9nSjCAeAL8kP6c6odDKPAGeAN8mazeA2cTtuqlQlgGbv11HckwArQdjH7LQAjpvE9rd2Y5QCKt42HZaZGKgwnQGuIjgmRBNhf9EOV4YFgAR3gEfAUeA90078fBo4A54FLWA7FEqq8FSIxtLrAPNAcor0GcBm1nZRo2xjXBleAMYt2W6jR8E8Zvo3bLq4BLDjWYIzLnS0yO5Oa2AB+pLGB6pzpEtMud9qL4S3yw3gfcA/1fluWtw0skd9JtYCPIRu+WmD2pUH+WoHp66Ea/kB+Nr5voXNH02iiRk5whhe1/Bmqh3HV8J7StJakDEu+Dz/Trq9Z6jfT3CrtWjDt0WNa/lsLjSzWNa22hUbthvXZue9gONG0xqQM13kiaNXLJblidUoaPqRdbzlodbTrgw5aO5A0PKldrzpo6blHHbSGxvSZ0dfPadQSY7MsHde07lro1G64Q37jYbN+Lmgaewh04zEgv36OAi8M8leBvZrGvGUtXgx3yR8LjaKGe9Xw3kbdWd3sOPApZMMD1Ctd0WQ4BdxCbSr6aawDN8k/s6Qajx3q8GY4ew5dDwAWHWswxqWx7E7bnHqOA08E2jfGtcEB6lvTDdRMuxsN4Ar2z+xQhn0d03b5c0y7yc5j2kngHHAxvZai0Jsvw3+DQm9B/ztBHVQZ7nurQp5e2Q9VhtdqKMQXz22S2qhPjxIzps/4isPkN4H69NgLwMhu0QMeuJiNRCKRSCQSibjwG2bFBYpMiCD+AAAAAElFTkSuQmCC"},142:function(e,t){e.exports="data:image/png;base64,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"},15:function(e,t,n){e.exports={image:"ProfileInfo_image__2IOiM",user:"ProfileInfo_user__3Ssha",containerUserImg:"ProfileInfo_containerUserImg__GRJKv",userImg:"ProfileInfo_userImg__1w9AT",uploadingPhoto:"ProfileInfo_uploadingPhoto__2eyEA",label:"ProfileInfo_label__1RQbZ",userInfo:"ProfileInfo_userInfo__2w2L3",statusBlock:"ProfileInfo_statusBlock__3UtKv",status:"ProfileInfo_status__1qG64",statusInput:"ProfileInfo_statusInput__1t3lW",button:"ProfileInfo_button__1wVHl"}},16:function(e,t,n){e.exports={header:"Header_header__b4xWV",headerContainer:"Header_headerContainer__20vwW",logo:"Header_logo__2EWBn",logoImg:"Header_logoImg__pqIlG",ava:"Header_ava__2p0pl",loginBlock:"Header_loginBlock__1bjT0",login:"Header_login__2EiJF",block:"Header_block__396ku",logout:"Header_logout__2_s-a",headerBurger:"Header_headerBurger__1zfZN",active:"Header_active__1SqS9"}},169:function(e,t,n){e.exports=n(300)},171:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){},179:function(e,t,n){},18:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return m}));var a=n(51),r=n(0),o=n.n(r),c=n(31),i=n.n(c),u=n(94),s=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,r=e.children,c=n&&a;return o.a.createElement("div",{className:i.a.formControl+" "+(c?i.a.error:"")},r,c&&o.a.createElement("span",null,a))},l=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,["input","meta"]));return o.a.createElement(s,e,o.a.createElement("textarea",Object.assign({className:i.a.textarea},t,n)))},f=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,["input","meta"]));return o.a.createElement(s,e,o.a.createElement("input",Object.assign({},t,n)))},m=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"text",c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;return o.a.createElement("div",{className:i.a.containerForm},o.a.createElement(u.a,{component:e,name:t,placeholder:a,validate:n,type:r}),c)}},300:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);n(171),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(68),c=n.n(o),i=n(38),u=n(39),s=n(42),l=n(41),f=(n(175),n(176),function(){return r.a.createElement("div",null,"News")}),m=(n(177),function(e){return r.a.createElement("div",null,"Videos")}),p=(n(178),function(e){return r.a.createElement("div",null,"Musics")}),d=(n(179),function(e){return r.a.createElement("div",null,"Settings")}),g=n(9),h=n(37),E=n(14),b=n(36),v=n.n(b),O=function(e){return r.a.createElement("div",{className:"".concat(v.a.item)},r.a.createElement(h.b,{to:e.url,activeClassName:v.a.active},e.name))},A=function(e){var t=e.navbarItem.map((function(e){return r.a.createElement(O,{name:e.name,url:e.url,key:e.id})}));return r.a.createElement("aside",{className:e.burgerEditMode?v.a.aside+" "+v.a.active:v.a.aside},r.a.createElement("nav",null,t))},j=Object(E.b)((function(e){return{navbarItem:e.sidebar.sidebar,burgerEditMode:e.sidebar.burgerEditMode}}))(A),U=n(56),I=n(54),w=n(51),S=n(15),k=n.n(S),T=n(69),P=n(70),_=n.n(P),x=function(e){var t=Object(a.useState)(!1),n=Object(I.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)(e.status),u=Object(I.a)(i,2),s=u[0],l=u[1];Object(a.useEffect)((function(){l(e.status)}),[e.status]);return r.a.createElement("div",{className:k.a.statusBlock},!o&&r.a.createElement("div",{className:k.a.status},r.a.createElement("span",{onClick:function(){c(!0)}},e.status||"not status")),o&&r.a.createElement("div",null,r.a.createElement("input",{className:k.a.statusInput,autoFocus:!0,onBlur:function(){c(!1),e.updateUserStatus(s)},onChange:function(e){l(e.currentTarget.value)},value:s})))},y=n(18),N=n(134),C=n(31),R=n.n(C),G=Object(N.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,n=e.profileInfo,a=e.error;return r.a.createElement("form",null,a&&r.a.createElement("div",{className:R.a.totalError},a),r.a.createElement("div",null,"Full Name: ",Object(y.c)(y.a,"fullName",[],"Full name")),r.a.createElement("div",null,r.a.createElement("span",null,"Looking for a job:"),Object(y.c)(y.a,"lookingForAJob",[],"","checkbox")),r.a.createElement("div",null,"My professional skills:",Object(y.c)(y.b,"lookingForAJobDescription",[],"My professional skills")),r.a.createElement("div",null,"About me:",Object(y.c)(y.b,"aboutMe",[],"AboutMe")),r.a.createElement("div",null,Object.keys(n.contacts).map((function(e){return r.a.createElement("div",{key:e}," ",e,": ",Object(y.c)(y.a,"contacts."+e,[],e))}))),r.a.createElement("div",null,r.a.createElement("button",{className:R.a.button,onClick:t},"Save")))})),H=n(140),D=n.n(H),L=function(e){var t=e.contactTitle,n=e.contactValue;return n?r.a.createElement("li",null,t," : ",n):null},B=function(e){var t=e.profileInfo,n=e.isOwner,a=e.goToEditMode;return r.a.createElement("div",null,r.a.createElement("div",null,"Looking for a job: ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&r.a.createElement("div",null,"My professional skills:",t.lookingForAJobDescription?t.lookingForAJobDescription:null),r.a.createElement("div",null,"About me:  ",t.aboutMe?t.aboutMe:null),r.a.createElement("div",null,r.a.createElement("ul",null,Object.keys(t.contacts).map((function(e){return r.a.createElement(L,{key:e,contactTitle:e,contactValue:t.contacts[e]})})))),n&&r.a.createElement("div",null,r.a.createElement("button",{className:k.a.button,onClick:a},"Edit")))},M=function(e){var t=e.profileInfo,n=e.isOwner,o=e.saveUserData,c=Object(w.a)(e,["profileInfo","isOwner","saveUserData"]),i=Object(a.useState)(!1),u=Object(I.a)(i,2),s=u[0],l=u[1];return t?r.a.createElement("div",null,r.a.createElement("div",{className:k.a.image},r.a.createElement("img",{src:"https://uploadfile.bizhizu.cn/up/0c/61/27/0c6127d7f40b099800fd5e2c33b6e9d1.jpg.source.jpg",alt:"img"})),r.a.createElement("div",{className:k.a.user},r.a.createElement("div",{className:k.a.containerUserImg},r.a.createElement("div",{className:k.a.userImg},r.a.createElement("img",{src:t.photos.large||_.a,alt:"userImg"}),n&&r.a.createElement("div",{className:k.a.uploadingPhoto},r.a.createElement("input",{id:"file",type:"file",onChange:function(e){e.target.files.length&&c.savePhoto(e.target.files[0])}}),r.a.createElement("label",{className:k.a.label,htmlFor:"file"},r.a.createElement("img",{className:k.a.iconPhoto,src:D.a,alt:"iconPhoto"}))))),r.a.createElement("div",{className:k.a.userInfo},r.a.createElement("div",{className:"user__name"},r.a.createElement("h1",null,t.fullName)),r.a.createElement(x,{status:c.status,updateUserStatus:c.updateUserStatus}),s?r.a.createElement(G,{initialValues:t,profileInfo:t,onSubmit:function(e){o(e).then((function(){l(!1)}))}}):r.a.createElement(B,{profileInfo:t,isOwner:n,goToEditMode:function(){return l(!0)}})))):r.a.createElement(T.a,null)},z=n(7),F=n.n(z),K=n(13),X=n(47),q=n(4),V=n(10),Q=n(28),W="profile/ADD-POST",J={postsData:[{id:1,message:"Lorem ipsum dolor sit amet consectetur adipisicing elite. Under dicta mode maxime, hic cuppa debits, place quake Cheque autumn liquid incident! Eum labour aliquot aerial?",imgSrc:"https://klike.net/uploads/posts/2019-03/1551511784_4.jpg",valueLike:12},{id:2,message:"Lorem ipsum dolor sit amet consectetur adipisicing elite. Under dicta mode maxime, hic cuppa debits, place quake Cheque autumn liquid incident! Eum labour aliquot aerial?",imgSrc:"https://i.pinimg.com/564x/3c/e6/25/3ce625ab130460755d1475fb033652f2.jpg",valueLike:39}],profileInfo:null,status:" "},Z=function(e){return{type:"profile/UPDATE_USER_STATUS",statusText:e}},Y=function(e){return function(){var t=Object(K.a)(F.a.mark((function t(n){var a;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V.d.getUserProfile(e);case 2:a=t.sent,n({type:"profile/SET_USER_PROFILE",profileInfo:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return Object(q.a)(Object(q.a)({},e),{},{postsData:[].concat(Object(X.a)(e.postsData),[{id:3,message:t.newPost,imgSrc:"https://klike.net/uploads/posts/2019-03/1551511784_4.jpg",valueLike:0}])});case"profile/DELETE_POST":return Object(q.a)(Object(q.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!=t.postId}))});case"profile/SET_USER_PROFILE":return Object(q.a)(Object(q.a)({},e),{},{profileInfo:t.profileInfo});case"profile/SET_USER_STATUS":case"profile/UPDATE_USER_STATUS":return Object(q.a)(Object(q.a)({},e),{},{status:t.statusText});case"profile/SAVE_PHOTO_SUCCESS":return Object(q.a)(Object(q.a)({},e),{},{profileInfo:Object(q.a)(Object(q.a)({},e.profileInfo),{},{photos:t.photos})});default:return e}},ee=n(75),te=n.n(ee),ne=n(76),ae=n.n(ne),re=function(e){return r.a.createElement("div",{className:ae.a.item},r.a.createElement("div",{className:ae.a.post},r.a.createElement("img",{src:e.imgSrc,alt:"img"}),r.a.createElement("p",null,e.message)),r.a.createElement("a",{href:"#",className:ae.a.like},"\u2665 like ",r.a.createElement("span",null,e.valueLike)," "))},oe=n(94),ce=n(93),ie=r.a.memo((function(e){var t=e.postsData.map((function(e){return r.a.createElement(re,{message:e.message,imgSrc:e.imgSrc,valueLike:e.valueLike,key:e.id})}));return r.a.createElement("div",{className:te.a.container},r.a.createElement("h4",null,"My post"),r.a.createElement(se,{onSubmit:function(t){e.addPost(t.newPost)}}),r.a.createElement("div",{className:"posts"},t))})),ue=Object(ce.a)(15),se=Object(N.a)({form:"post"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",{className:te.a.newPost},r.a.createElement(oe.a,{component:y.b,name:"newPost",placeholder:"Enter new post",validate:[ce.b,ue]}),r.a.createElement("button",{className:te.a.button},"Add post")))})),le=ie,fe=Object(E.b)((function(e){return{postsData:e.profilePage.postsData}}),(function(e){return{addPost:function(t){e(function(e){return{type:W,newPost:e}}(t))}}}))(le),me=function(e){var t;return r.a.createElement("div",null,r.a.createElement(M,(t={saveUserData:e.saveUserData,profileInfo:e.profileInfo,savePhoto:e.savePhoto,isOwner:e.isOwner,status:e.status},Object(U.a)(t,"profileInfo",e.profileInfo),Object(U.a)(t,"updateUserStatus",e.updateUserStatus),t)),r.a.createElement(fe,null))},pe=n(8),de=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return r.a.createElement(me,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto}))}}]),n}(r.a.Component),ge=Object(pe.d)(Object(E.b)((function(e){return{profileInfo:e.profilePage.profileInfo,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:Y,getUserStatus:function(e){return function(){var t=Object(K.a)(F.a.mark((function t(n){var a;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V.b.getStatus(e);case 2:a=t.sent,n({type:"profile/SET_USER_STATUS",statusText:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateUserStatus:function(e){return function(){var t=Object(K.a)(F.a.mark((function t(n){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,V.b.updateStatus(e);case 3:0===t.sent.resultCode&&n(Z(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(K.a)(F.a.mark((function t(n){var a;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V.b.savePhoto(e);case 2:0===(a=t.sent).resultCode&&n({type:"profile/SAVE_PHOTO_SUCCESS",photos:a.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},saveUserData:function(e){return function(){var t=Object(K.a)(F.a.mark((function t(n,a){var r,o;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.id,t.next=3,V.b.saveUserData(e);case 3:if(0!==(o=t.sent).resultCode){t.next=8;break}n(Y(r)),t.next=10;break;case 8:return n(Object(Q.a)("edit-profile",{_error:o.messages[0]})),t.abrupt("return",Promise.reject(o.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}),g.g)(de),he=n(16),Ee=n.n(he),be=n(142),ve=n.n(be),Oe=function(e){return r.a.createElement("header",{className:Ee.a.header},r.a.createElement("div",{className:"container "+Ee.a.headerContainer},r.a.createElement("div",{className:Ee.a.logo},r.a.createElement("img",{className:Ee.a.logoImg,src:ve.a,alt:"img"}),e.burgerEditMode?r.a.createElement("div",{onClick:function(){e.setToggleBurgerMenu(!1)},className:Ee.a.headerBurger+" "+Ee.a.active},r.a.createElement("span",null)):r.a.createElement("div",{onClick:function(){e.setToggleBurgerMenu(!0)},className:Ee.a.headerBurger},r.a.createElement("span",null))),r.a.createElement("div",{className:Ee.a.loginBlock},e.isAuth?r.a.createElement("div",{className:Ee.a.block},e.imgSrc?r.a.createElement("img",{className:Ee.a.ava,src:e.imgSrc}):r.a.createElement("img",{className:Ee.a.ava,src:_.a}),r.a.createElement("span",null,e.login),r.a.createElement("button",{className:Ee.a.logout,onClick:e.logout},"Log out")):r.a.createElement("div",{className:Ee.a.login},r.a.createElement(h.b,{to:"/login"},"Login")))))},Ae=n(35),je={sidebar:[{id:0,name:"Profile",url:"/profile"},{id:1,name:"Users",url:"/users"},{id:2,name:"Messages",url:"/dialogs"},{id:3,name:"News",url:"/news"},{id:4,name:"Videos",url:"/videos"},{id:5,name:"Musics",url:"/musics"},{id:6,name:"Settings",url:"/settings"}],burgerEditMode:!1},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"sidebar/TOGGLE_BURGER_MENU":return Object(q.a)(Object(q.a)({},e),{},{burgerEditMode:t.isToggle});default:return e}},Ie=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;V.b.getUserProfile(this.props.userId).then((function(t){e.props.setAuthUserImg(t.photos.small)}))}},{key:"render",value:function(){return r.a.createElement(Oe,this.props)}}]),n}(r.a.Component),we=Object(E.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,userId:e.auth.id,imgSrc:e.auth.imgSrc,burgerEditMode:e.sidebar.burgerEditMode}}),(function(e){return{logout:function(){e(Object(Ae.d)())},setAuthUserImg:function(t){e(Object(Ae.e)(t))},setToggleBurgerMenu:function(t){e(function(e){return{type:"sidebar/TOGGLE_BURGER_MENU",isToggle:e}}(t))}}}))(Ie),Se={initialized:!1},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(q.a)(Object(q.a)({},e),{},{initialized:!0});default:return e}},Te=n(133),Pe=n(136),_e=n(143),xe=n(135),ye=Object(pe.c)({profilePage:$,dialogsPage:Te.b,sidebar:Ue,usersPage:Pe.a,auth:Ae.a,form:xe.a,app:ke}),Ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pe.d,Ce=Object(pe.e)(ye,Ne(Object(pe.a)(_e.a)));window.__store__=Ce;var Re=Ce,Ge=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...")},r.a.createElement(e,t))}},He=n(102),De=n.n(He),Le=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:De.a.title},"SOCIAL NETWORK FOR PROGRAMMERS"),r.a.createElement("div",{className:De.a.img},r.a.createElement("img",{src:"https://lvivity.com/wp-content/uploads/2020/02/highest-paying.jpg"})))},Be=r.a.lazy((function(){return n.e(4).then(n.bind(null,307))})),Me=r.a.lazy((function(){return n.e(3).then(n.bind(null,306))})),ze=r.a.lazy((function(){return n.e(5).then(n.bind(null,305))})),Fe=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).catchAllUnhandledErrors=function(e){console.log(e.reason)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",null,r.a.createElement(we,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(j,null),r.a.createElement("div",{className:"app-content"},r.a.createElement(g.d,null,r.a.createElement(g.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(ge,null)}}),r.a.createElement(g.b,{path:"/dialogs",render:Ge(Be)}),r.a.createElement(g.b,{path:"/users",render:Ge(Me)}),r.a.createElement(g.b,{path:"/login",render:Ge(ze)}),r.a.createElement(g.b,{path:"/news",render:function(){return r.a.createElement(f,null)}}),r.a.createElement(g.b,{path:"/videos",render:function(){return r.a.createElement(m,null)}}),r.a.createElement(g.b,{path:"/musics",render:function(){return r.a.createElement(p,null)}}),r.a.createElement(g.b,{path:"/settings",render:function(){return r.a.createElement(d,null)}}),r.a.createElement(g.b,{exact:!0,path:"/",render:function(){return r.a.createElement(Le,null)}}),r.a.createElement(g.b,{path:"*",render:function(){return r.a.createElement("div",null," 404 NOT FOUND ")}})))))):r.a.createElement(T.a,null)}}]),n}(r.a.Component),Ke=Object(pe.d)(g.g,Object(E.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(Ae.b)());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(Fe),Xe=function(){return r.a.createElement(r.a.StrictMode,null,r.a.createElement(h.a,null,r.a.createElement(E.a,{store:Re},r.a.createElement(Ke,null))))};c.a.render(r.a.createElement(Xe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},31:function(e,t,n){e.exports={formControl:"FormsControls_formControl__1wdIA",error:"FormsControls_error__1m5w4",totalError:"FormsControls_totalError__1BUCq",button:"FormsControls_button__2NXgs",checkbox:"FormsControls_checkbox__3pnXe",containerForm:"FormsControls_containerForm__i7t_4"}},35:function(e,t,n){"use strict";n.d(t,"e",(function(){return f})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return g}));var a=n(7),r=n.n(a),o=n(13),c=n(4),i=n(10),u=n(28),s={id:null,email:null,login:null,imgSrc:null,isAuth:!1,captchaUrl:null},l=function(e,t,n,a){return{type:"auth/SET_USER_DATA",payload:{id:e,email:t,login:n,isAuth:a}}},f=function(e){return{type:"auth/SET_USER_IMG",imgSrc:e}},m=function(e){return{type:"auth/GET_CAPTCHA_URL_SUCCESS",captchaUrl:e}},p=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a,o,c,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.me();case 2:0==(n=e.sent).resultCode&&(a=n.data,o=a.id,c=a.email,u=a.login,t(l(o,c,u,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(e,t,n,a){return function(){var c=Object(o.a)(r.a.mark((function o(c){var s,l,f;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.a.login(e,t,n,a);case 2:0==(s=r.sent).resultCode?c(p()):(10===s.resultCode&&c(h()),l=s.messages.length>0?s.messages[0]:"Something is wrong",f=Object(u.a)("login",{_error:l}),c(f));case 4:case"end":return r.stop()}}),o)})));return function(e){return c.apply(this,arguments)}}()},g=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.logout();case 2:0==e.sent.resultCode&&t(l(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.c.getCaptchaUrl();case 2:n=e.sent,a=n.data.url,t(m(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return Object(c.a)(Object(c.a)({},e),t.payload);case"auth/SET_USER_IMG":return Object(c.a)(Object(c.a)({},e),{},{imgSrc:t.imgSrc});case"auth/GET_CAPTCHA_URL_SUCCESS":return Object(c.a)(Object(c.a)({},e),{},{captchaUrl:t.captchaUrl});default:return e}}},36:function(e,t,n){e.exports={aside:"Navbar_aside__20qG5",item:"Navbar_item__2_BK_",active:"Navbar_active__S5zQ-"}},69:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(138),c=n.n(o),i=n(99),u=n.n(i);t.a=function(e){return r.a.createElement("div",{className:u.a.preloader},r.a.createElement("div",{className:u.a.preloaderContainer},r.a.createElement("img",{src:c.a,alt:"img"})))}},70:function(e,t,n){e.exports=n.p+"static/media/ava.4119cbff.jpg"},75:function(e,t,n){e.exports={newPost:"MyPosts_newPost__13O5Q",container:"MyPosts_container__23nWI"}},76:function(e,t,n){e.exports={item:"Post_item__3hDUv",like:"Post_like__N8r1C",post:"Post_post__2rEr0"}},93:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},99:function(e,t,n){e.exports={preloader:"Preloader_preloader__3ctgF",preloaderContainer:"Preloader_preloaderContainer__36Yyc"}}},[[169,1,2]]]);
//# sourceMappingURL=main.f36f2dc2.chunk.js.map