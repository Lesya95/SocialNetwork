(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return i}));var a=n(140),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"2be884d6-9097-43dc-a1f4-bff05001988d"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollow:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))},getUserProfile:function(e){return console.warn("obsolete method, please profileAPI object"),c.getUserProfile(e)}},c={getUserProfile:function(e){return r.get("profile/"+e).then((function(e){return e.data}))},getStatus:function(e){return r.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return r.put("profile/status",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveUserData:function(e){return r.put("profile",e).then((function(e){return e.data}))}},u={me:function(){return r.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a}).then((function(e){return e.data}))},logout:function(){return r.delete("auth/login").then((function(e){return e.data}))}},i={getCaptchaUrl:function(){return r.get("security/get-captcha-url")}}},100:function(e,t,n){e.exports={newPost:"MyPosts_newPost__13O5Q",container:"MyPosts_container__23nWI"}},101:function(e,t,n){e.exports={title:"Initial_title__3V1np",img:"Initial_img__3OKN9"}},104:function(e,t,n){e.exports=n.p+"static/media/ava.4119cbff.jpg"},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(46),r=n(4),o={dialogsData:[{id:1,name:"Mark",imageSrc:"https://yt3.ggpht.com/a/AATXAJxthr9nDPbKhJIu5DEsJ0uHsPH0WSEDQF7uZo5pDA=s900-c-k-c0xffffffff-no-rj-mo"},{id:2,name:"John",imageSrc:"https://yt3.ggpht.com/a/AATXAJzHLJfkjoU61FIkVK5ye1LJgQbIngHPy87DRVgm=s900-c-k-c0xffffffff-no-rj-mo"},{id:3,name:"Maria",imageSrc:"https://yt3.ggpht.com/a/AATXAJyR7U5ykD6u7x_aAONJV7DOiGSchVoMXy_xRDqUYg=s900-c-k-c0xffffffff-no-rj-mo"},{id:4,name:"Jain",imageSrc:"https://yt3.ggpht.com/a/AATXAJydcQ-trfDU7yDBaCQvHWGwc5S8vKeZbvzAdg=s900-c-k-c0xffffffff-no-rj-mo"},{id:5,name:"Sveta",imageSrc:"https://yt3.ggpht.com/a/AATXAJwrMtJcMHGB4FeIjrQUYWd2Pw5u6Pu9BzKpgQ=s900-c-k-c0xffffffff-no-rj-mo"},{id:6,name:"Masha",imageSrc:"https://yt3.ggpht.com/a/AATXAJxBep478nG6aewuVACbTn618sNqNKiiEEkPSagvVw=s900-c-k-c0xffffffff-no-rj-mo"},{id:7,name:"Lesya",imageSrc:"https://yt3.ggpht.com/a/AGF-l7-6g_aN-PuejAdg2u9oCU6a1WOqkI7o93OaiA=s900-c-k-c0xffffffff-no-rj-mo"}],messagesData:[{id:1,message:"Hi"},{id:2,message:"How are you doing?"},{id:3,message:"I'm fine and you?"},{id:4,message:"Thanks, I'm too"},{id:5,message:"What are you doing?"}]},c=function(e){return{type:"ADD-MESSAGE",newMessage:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":return Object(r.a)(Object(r.a)({},e),{},{messagesData:[].concat(Object(a.a)(e.messagesData),[{id:5,message:t.newMessage}])});default:return e}}},136:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return v})),n.d(t,"e",(function(){return b})),n.d(t,"b",(function(){return O}));var a=n(7),r=n.n(a),o=n(13),c=n(46),u=n(4),i=n(10),s=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(u.a)(Object(u.a)({},e),a):e}))},l="users/FOLLOW",f={users:[],pageSize:50,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},p=function(e){return{type:l,usersId:e}},m=function(e){return{type:"users/UNFOLLOW",usersId:e}},d=function(e){return{type:"users/SET_CURRENT_PAGE",pageNumber:e}},h=function(e){return{type:"users/TOGGLE_IS_FETCHING",isFetching:e}},g=function(e,t){return{type:"users/TOGGLE_IS_FOLLOWING_PROGRESS",followingInProgress:e,userId:t}},v=function(e,t){return function(){var n=Object(o.a)(r.a.mark((function n(a){var o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(h(!0)),n.next=3,i.d.getUsers(e,t);case 3:o=n.sent,a({type:"users/SET_USERS",users:o.items}),a({type:"users/SET_USERS_TOTAL_COUNT",count:o.totalCount}),a(h(!1));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},E=function(){var e=Object(o.a)(r.a.mark((function e(t,n,a,o){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(g(!0,n)),e.next=3,a(n);case 3:0===e.sent.resultCode&&t(o(n)),t(g(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),b=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:E(n,e,i.d.unfollow.bind(i.d),m);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:E(n,e,i.d.follow.bind(i.d),p);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(u.a)(Object(u.a)({},e),{},{users:s(e.users,t.usersId,"id",{followed:!0})});case"users/UNFOLLOW":return Object(u.a)(Object(u.a)({},e),{},{users:s(e.users,t.usersId,"id",{followed:!1})});case"users/SET_USERS":return Object(u.a)(Object(u.a)({},e),{},{users:t.users});case"users/SET_CURRENT_PAGE":return Object(u.a)(Object(u.a)({},e),{},{currentPage:t.pageNumber});case"users/SET_USERS_TOTAL_COUNT":return Object(u.a)(Object(u.a)({},e),{},{totalUsersCount:t.count});case"users/TOGGLE_IS_FETCHING":return Object(u.a)(Object(u.a)({},e),{},{isFetching:t.isFetching});case"users/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(u.a)(Object(u.a)({},e),{},{followingInProgress:t.followingInProgress?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):[e.followingInProgress.filter((function(e){return e!=t.userId}))]});default:return e}}},138:function(e,t,n){e.exports=n.p+"static/media/preloader.e4399d40.svg"},141:function(e,t){e.exports="data:image/png;base64,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"},16:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return p}));var a=n(50),r=n(0),o=n.n(r),c=n(42),u=n.n(c),i=n(92),s=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,r=e.children,c=n&&a;return o.a.createElement("div",{className:u.a.formControl+" "+(c?u.a.error:"")},r,c&&o.a.createElement("span",null,a))},l=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,["input","meta"]));return o.a.createElement(s,e,o.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,["input","meta"]));return o.a.createElement(s,e,o.a.createElement("input",Object.assign({},t,n)))},p=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"text",c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;return o.a.createElement("div",null,o.a.createElement(i.a,{component:e,name:t,placeholder:a,validate:n,type:r}),c)}},168:function(e,t,n){e.exports=n(299)},170:function(e,t,n){},174:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){},20:function(e,t,n){e.exports={image:"ProfileInfo_image__2IOiM",user:"ProfileInfo_user__3Ssha",containerUserImg:"ProfileInfo_containerUserImg__GRJKv",userImg:"ProfileInfo_userImg__1w9AT",userInfo:"ProfileInfo_userInfo__2w2L3",statusBlock:"ProfileInfo_statusBlock__3UtKv",status:"ProfileInfo_status__1qG64",statusInput:"ProfileInfo_statusInput__1t3lW",button:"ProfileInfo_button__1wVHl"}},299:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);n(170),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(68),c=n.n(o),u=n(36),i=n(37),s=n(40),l=n(39),f=(n(174),n(175),function(){return r.a.createElement("div",null,"News")}),p=(n(176),function(e){return r.a.createElement("div",null,"Videos")}),m=(n(177),function(e){return r.a.createElement("div",null,"Musics")}),d=(n(178),function(e){return r.a.createElement("div",null,"Settings")}),h=n(9),g=n(35),v=n(14),E=n(55),b=n.n(E),O=function(e){return r.a.createElement("div",{className:"".concat(b.a.item)},r.a.createElement(g.b,{to:e.url,activeClassName:b.a.active},e.name))},j=function(e){var t=e.navbarItem.map((function(e){return r.a.createElement(O,{name:e.name,url:e.url,key:e.id})}));return r.a.createElement("nav",{className:b.a.nav},t)},A=Object(v.b)((function(e){return{navbarItem:e.sidebar.sidebar}}))(j),U=n(56),I=n(53),w=n(50),S=n(20),T=n.n(S),k=n(69),y=n(104),P=n.n(y),x=function(e){var t=Object(a.useState)(!1),n=Object(I.a)(t,2),o=n[0],c=n[1],u=Object(a.useState)(e.status),i=Object(I.a)(u,2),s=i[0],l=i[1];Object(a.useEffect)((function(){l(e.status)}),[e.status]);return r.a.createElement("div",{className:T.a.statusBlock},!o&&r.a.createElement("div",{className:T.a.status},r.a.createElement("span",{onDoubleClick:function(){c(!0)}},e.status||"not status")),o&&r.a.createElement("div",null,r.a.createElement("input",{className:T.a.statusInput,autoFocus:!0,onBlur:function(){c(!1),e.updateUserStatus(s)},onChange:function(e){l(e.currentTarget.value)},value:s})))},_=n(16),C=n(134),N=n(42),R=n.n(N),G=Object(C.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,n=e.profileInfo,a=e.error;return r.a.createElement("form",null,a&&r.a.createElement("div",{className:R.a.totalError},a),r.a.createElement("div",null,"Full Name: ",Object(_.c)(_.a,"fullName",[],"Full name")),r.a.createElement("div",null,"Looking for a job:",Object(_.c)(_.a,"lookingForAJob",[],"","checkbox")),r.a.createElement("div",null,"My professional skills:",Object(_.c)(_.b,"lookingForAJobDescription",[],"My professional skills")),r.a.createElement("div",null,"About me:",Object(_.c)(_.b,"aboutMe",[],"AboutMe")),r.a.createElement("div",null,"Contacts: ",Object.keys(n.contacts).map((function(e){return r.a.createElement("div",{key:e}," ",e,": ",Object(_.c)(_.a,"contacts."+e,[],e))}))),r.a.createElement("div",null,r.a.createElement("button",{className:R.a.button,onClick:t},"Save")))})),D=function(e){var t=e.contactTitle,n=e.contactValue;return n?r.a.createElement("li",null,t," : ",n):null},H=function(e){var t=e.profileInfo,n=e.isOwner,a=e.goToEditMode;return r.a.createElement("div",null,r.a.createElement("div",null,"Looking for a job: ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&r.a.createElement("div",null,"My professional skills:",t.lookingForAJobDescription?t.lookingForAJobDescription:null),r.a.createElement("div",null,"About me:  ",t.aboutMe?t.aboutMe:null),r.a.createElement("div",null,"Contacts:",r.a.createElement("ul",null,Object.keys(t.contacts).map((function(e){return r.a.createElement(D,{key:e,contactTitle:e,contactValue:t.contacts[e]})})))),n&&r.a.createElement("div",null,r.a.createElement("button",{className:T.a.button,onClick:a},"Edit")))},L=function(e){var t=e.profileInfo,n=e.isOwner,o=e.saveUserData,c=Object(w.a)(e,["profileInfo","isOwner","saveUserData"]),u=Object(a.useState)(!1),i=Object(I.a)(u,2),s=i[0],l=i[1];return t?r.a.createElement("div",null,r.a.createElement("div",{className:T.a.image},r.a.createElement("img",{src:"https://uploadfile.bizhizu.cn/up/0c/61/27/0c6127d7f40b099800fd5e2c33b6e9d1.jpg.source.jpg",alt:"img"})),r.a.createElement("div",{className:T.a.user},r.a.createElement("div",{className:T.a.containerUserImg},r.a.createElement("div",{className:T.a.userImg},r.a.createElement("img",{src:t.photos.large||P.a,alt:"userImg"}),n&&r.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&c.savePhoto(e.target.files[0])}}))),r.a.createElement("div",{className:T.a.userInfo},r.a.createElement("div",{className:"user__name"},r.a.createElement("h1",null,t.fullName)),r.a.createElement(x,{status:c.status,updateUserStatus:c.updateUserStatus}),s?r.a.createElement(G,{initialValues:t,profileInfo:t,onSubmit:function(e){o(e).then((function(){l(!1)}))}}):r.a.createElement(H,{profileInfo:t,isOwner:n,goToEditMode:function(){return l(!0)}})))):r.a.createElement(k.a,null)},z=n(7),K=n.n(z),F=n(13),X=n(46),M=n(4),B=n(10),J=n(27),V="profile/ADD-POST",q={postsData:[{id:1,message:"Lorem ipsum dolor sit amet consectetur adipisicing elite. Under dicta mode maxime, hic cuppa debits, place quake Cheque autumn liquid incident! Eum labour aliquot aerial?",imgSrc:"https://klike.net/uploads/posts/2019-03/1551511784_4.jpg",valueLike:12},{id:2,message:"Lorem ipsum dolor sit amet consectetur adipisicing elite. Under dicta mode maxime, hic cuppa debits, place quake Cheque autumn liquid incident! Eum labour aliquot aerial?",imgSrc:"https://i.pinimg.com/564x/3c/e6/25/3ce625ab130460755d1475fb033652f2.jpg",valueLike:39}],profileInfo:null,status:" "},W=function(e){return{type:"profile/UPDATE_USER_STATUS",statusText:e}},Q=function(e){return function(){var t=Object(F.a)(K.a.mark((function t(n){var a;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.d.getUserProfile(e);case 2:a=t.sent,n({type:"profile/SET_USER_PROFILE",profileInfo:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(M.a)(Object(M.a)({},e),{},{postsData:[].concat(Object(X.a)(e.postsData),[{id:3,message:t.newPost,imgSrc:"https://klike.net/uploads/posts/2019-03/1551511784_4.jpg",valueLike:0}])});case"profile/DELETE_POST":return Object(M.a)(Object(M.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!=t.postId}))});case"profile/SET_USER_PROFILE":return Object(M.a)(Object(M.a)({},e),{},{profileInfo:t.profileInfo});case"profile/SET_USER_STATUS":case"profile/UPDATE_USER_STATUS":return Object(M.a)(Object(M.a)({},e),{},{status:t.statusText});case"profile/SAVE_PHOTO_SUCCESS":return Object(M.a)(Object(M.a)({},e),{},{profileInfo:Object(M.a)(Object(M.a)({},e.profileInfo),{},{photos:t.photos})});default:return e}},Y=n(100),$=n.n(Y),ee=n(74),te=n.n(ee),ne=function(e){return r.a.createElement("div",{className:te.a.item},r.a.createElement("div",{className:te.a.post},r.a.createElement("img",{src:e.imgSrc,alt:"img"}),r.a.createElement("p",null,e.message)),r.a.createElement("a",{href:"#",className:te.a.like},"\u2665 like ",r.a.createElement("span",null,e.valueLike)," "))},ae=n(92),re=n(91),oe=r.a.memo((function(e){var t=e.postsData.map((function(e){return r.a.createElement(ne,{message:e.message,imgSrc:e.imgSrc,valueLike:e.valueLike,key:e.id})}));return r.a.createElement("div",{className:$.a.container},r.a.createElement("h4",null,"My post"),r.a.createElement(ue,{onSubmit:function(t){e.addPost(t.newPost)}}),r.a.createElement("div",{className:"posts"},t))})),ce=Object(re.a)(15),ue=Object(C.a)({form:"post"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",{className:$.a.newPost},r.a.createElement(ae.a,{component:_.b,name:"newPost",placeholder:"Enter new post",validate:[re.b,ce]}),r.a.createElement("button",null,"Add post")))})),ie=oe,se=Object(v.b)((function(e){return{postsData:e.profilePage.postsData}}),(function(e){return{addPost:function(t){e(function(e){return{type:V,newPost:e}}(t))}}}))(ie),le=function(e){var t;return r.a.createElement("div",null,r.a.createElement(L,(t={saveUserData:e.saveUserData,profileInfo:e.profileInfo,savePhoto:e.savePhoto,isOwner:e.isOwner,status:e.status},Object(U.a)(t,"profileInfo",e.profileInfo),Object(U.a)(t,"updateUserStatus",e.updateUserStatus),t)),r.a.createElement(se,null))},fe=n(8),pe=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return r.a.createElement(le,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto}))}}]),n}(r.a.Component),me=Object(fe.d)(Object(v.b)((function(e){return{profileInfo:e.profilePage.profileInfo,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:Q,getUserStatus:function(e){return function(){var t=Object(F.a)(K.a.mark((function t(n){var a;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.b.getStatus(e);case 2:a=t.sent,n({type:"profile/SET_USER_STATUS",statusText:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateUserStatus:function(e){return function(){var t=Object(F.a)(K.a.mark((function t(n){return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,B.b.updateStatus(e);case 3:0===t.sent.resultCode&&n(W(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(F.a)(K.a.mark((function t(n){var a;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.b.savePhoto(e);case 2:0===(a=t.sent).resultCode&&n({type:"profile/SAVE_PHOTO_SUCCESS",photos:a.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},saveUserData:function(e){return function(){var t=Object(F.a)(K.a.mark((function t(n,a){var r,o;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.id,t.next=3,B.b.saveUserData(e);case 3:if(0!==(o=t.sent).resultCode){t.next=8;break}n(Q(r)),t.next=10;break;case 8:return n(Object(J.a)("edit-profile",{_error:o.messages[0]})),t.abrupt("return",Promise.reject(o.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}),h.g)(pe),de=n(34),he=n.n(de),ge=n(141),ve=n.n(ge),Ee=function(e){return r.a.createElement("header",{className:he.a.header},r.a.createElement("div",{className:he.a.container},r.a.createElement("img",{src:ve.a,alt:"img"}),r.a.createElement("div",{className:he.a.loginBlock},e.isAuth?r.a.createElement("div",{className:he.a.block},e.imgSrc?r.a.createElement("img",{className:he.a.ava,src:e.imgSrc}):null,r.a.createElement("span",null,e.login),r.a.createElement("button",{className:he.a.logout,onClick:e.logout},"Log out")):r.a.createElement(g.b,{to:"/login"},"Login"))))},be=n(33),Oe=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;B.b.getUserProfile(this.props.userId).then((function(t){e.props.setAuthUserImg(t.photos.small)}))}},{key:"render",value:function(){return r.a.createElement(Ee,this.props)}}]),n}(r.a.Component),je=Object(v.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,userId:e.auth.id,imgSrc:e.auth.imgSrc}}),{logout:be.d,setAuthUserImg:be.e})(Oe),Ae={initialized:!1},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(M.a)(Object(M.a)({},e),{},{initialized:!0});default:return e}},Ie=n(133),we={sidebar:[{id:0,name:"Profile",url:"/profile"},{id:1,name:"Users",url:"/users"},{id:2,name:"Messages",url:"/dialogs"},{id:3,name:"News",url:"/news"},{id:4,name:"Videos",url:"/videos"},{id:5,name:"Musics",url:"/musics"},{id:6,name:"Settings",url:"/settings"}]},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we;return e},Te=n(136),ke=n(142),ye=n(135),Pe=Object(fe.c)({profilePage:Z,dialogsPage:Ie.b,sidebar:Se,usersPage:Te.a,auth:be.a,form:ye.a,app:Ue}),xe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||fe.d,_e=Object(fe.e)(Pe,xe(Object(fe.a)(ke.a)));window.__store__=_e;var Ce=_e,Ne=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...")},r.a.createElement(e,t))}},Re=n(101),Ge=n.n(Re),De=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:Ge.a.title},"SOCIAL NETWORK FOR PROGRAMMERS"),r.a.createElement("img",{className:Ge.a.img,src:"https://lvivity.com/wp-content/uploads/2020/02/highest-paying.jpg"}))},He=r.a.lazy((function(){return n.e(4).then(n.bind(null,306))})),Le=r.a.lazy((function(){return n.e(3).then(n.bind(null,305))})),ze=r.a.lazy((function(){return n.e(5).then(n.bind(null,304))})),Ke=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).catchAllUnhandledErrors=function(e){console.log(e.reason)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(je,null),r.a.createElement("div",{className:"container"},r.a.createElement(A,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(me,null)}}),r.a.createElement(h.b,{path:"/dialogs",render:Ne(He)}),r.a.createElement(h.b,{path:"/users",render:Ne(Le)}),r.a.createElement(h.b,{path:"/login",render:Ne(ze)}),r.a.createElement(h.b,{path:"/news",render:function(){return r.a.createElement(f,null)}}),r.a.createElement(h.b,{path:"/videos",render:function(){return r.a.createElement(p,null)}}),r.a.createElement(h.b,{path:"/musics",render:function(){return r.a.createElement(m,null)}}),r.a.createElement(h.b,{path:"/settings",render:function(){return r.a.createElement(d,null)}}),r.a.createElement(h.b,{exact:!0,path:"/",render:function(){return r.a.createElement(De,null)}}),r.a.createElement(h.b,{path:"*",render:function(){return r.a.createElement("div",null," 404 NOT FOUND ")}}))))):r.a.createElement(k.a,null)}}]),n}(r.a.Component),Fe=Object(fe.d)(h.g,Object(v.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(be.b)());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(Ke),Xe=function(){return r.a.createElement(r.a.StrictMode,null,r.a.createElement(g.a,null,r.a.createElement(v.a,{store:Ce},r.a.createElement(Fe,null))))};c.a.render(r.a.createElement(Xe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},33:function(e,t,n){"use strict";n.d(t,"e",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return h}));var a=n(7),r=n.n(a),o=n(13),c=n(4),u=n(10),i=n(27),s={id:null,email:null,login:null,imgSrc:null,isAuth:!1,captchaUrl:null},l=function(e,t,n,a){return{type:"auth/SET_USER_DATA",payload:{id:e,email:t,login:n,isAuth:a}}},f=function(e){return{type:"auth/SET_USER_IMG",imgSrc:e}},p=function(e){return{type:"auth/GET_CAPTCHA_URL_SUCCESS",captchaUrl:e}},m=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a,o,c,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.me();case 2:0==(n=e.sent).resultCode&&(a=n.data,o=a.id,c=a.email,i=a.login,t(l(o,c,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(e,t,n,a){return function(){var c=Object(o.a)(r.a.mark((function o(c){var s,l,f;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.a.login(e,t,n,a);case 2:0==(s=r.sent).resultCode?c(m()):(10===s.resultCode&&c(g()),l=s.messages.length>0?s.messages[0]:"Something is wrong",f=Object(i.a)("login",{_error:l}),c(f));case 4:case"end":return r.stop()}}),o)})));return function(e){return c.apply(this,arguments)}}()},h=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.logout();case 2:0==e.sent.resultCode&&t(l(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.c.getCaptchaUrl();case 2:n=e.sent,a=n.data.url,t(p(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return Object(c.a)(Object(c.a)({},e),t.payload);case"auth/SET_USER_IMG":return Object(c.a)(Object(c.a)({},e),{},{imgSrc:t.imgSrc});case"auth/GET_CAPTCHA_URL_SUCCESS":return Object(c.a)(Object(c.a)({},e),{},{captchaUrl:t.captchaUrl});default:return e}}},34:function(e,t,n){e.exports={header:"Header_header__b4xWV",container:"Header_container__2B-ze",loginBlock:"Header_loginBlock__1bjT0",ava:"Header_ava__2p0pl",block:"Header_block__396ku",logout:"Header_logout__2_s-a"}},42:function(e,t,n){e.exports={formControl:"FormsControls_formControl__1wdIA",error:"FormsControls_error__1m5w4",totalError:"FormsControls_totalError__1BUCq",button:"FormsControls_button__2NXgs"}},55:function(e,t,n){e.exports={nav:"Navbar_nav__2AGzv",item:"Navbar_item__2_BK_",active:"Navbar_active__S5zQ-"}},69:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(138),c=n.n(o),u=n(97),i=n.n(u);t.a=function(e){return r.a.createElement("div",{className:i.a.preloader},r.a.createElement("div",{className:i.a.preloaderContainer},r.a.createElement("img",{src:c.a,alt:"img"})))}},74:function(e,t,n){e.exports={item:"Post_item__3hDUv",like:"Post_like__N8r1C",post:"Post_post__2rEr0"}},91:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},97:function(e,t,n){e.exports={preloader:"Preloader_preloader__3ctgF",preloaderContainer:"Preloader_preloaderContainer__36Yyc"}}},[[168,1,2]]]);
//# sourceMappingURL=main.db7ee029.chunk.js.map