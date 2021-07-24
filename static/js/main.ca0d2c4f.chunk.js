(this.webpackJsonpaga=this.webpackJsonpaga||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(8),r=a.n(n),o=a(2),l=(a(14),a(15),function(e,t){localStorage.setItem(e,JSON.stringify(t))}),i=function(e){return!localStorage.getItem(e)&&l(e,[]),JSON.parse(localStorage.getItem(e))},u=a(0),j=c.a.createContext(),b=function(e){var t=e.children,a={theme:"dark",subtheme:"gray",text:"white",background:"dark-background",button:"button--dark"},c={theme:"light",subtheme:"silver",text:"black",background:"light-background"},n=Object(s.useState)("light"),r=Object(o.a)(n,2),l=r[0],i=r[1],b=Object(s.useState)(c),d=Object(o.a)(b,2),h=d[0],m=d[1];return Object(u.jsx)(j.Provider,{value:{theme:h.theme,subtheme:h.subtheme,text:h.text,background:h.background,button:h.button,toggle:function(){"light"===l?(i("dark"),m(a)):(i("light"),m(c))}},children:t})},d=function(e){var t=e.authorization,a=e.status,c=e.setStatus,n=Object(s.useContext)(j).text;return Object(u.jsx)(u.Fragment,{children:"admin"===t.login?Object(u.jsx)("input",{className:"blog__status ".concat(n),onChange:function(e){var t=e.target;return c(t.value)},onBlur:function(e){var t=e.target;l("status",t.value)},type:"text",value:a,onKeyPress:function(e){var t=e.target;"Enter"===e.key&&(l("status",t.value),t.blur())},placeholder:"This is status",maxLength:"40"}):Object(u.jsx)("input",{className:"blog__status-uneditable ".concat(n),readOnly:!0,value:a,placeholder:"This is status"})})},h=function(e){var t=e.value,a=e.onClick,c=Object(s.useContext)(j),n=c.subtheme,r=c.button;return Object(u.jsx)("button",{className:"button ".concat(n," ").concat(r),onClick:a,children:t})},m=function(e){var t=e.updatePostsData,a=e.id,c=Object(s.useState)({}),n=Object(o.a)(c,2),r=n[0],l=n[1],b=Object(s.useState)(""),d=Object(o.a)(b,2),m=d[0],g=d[1],O=Object(s.useContext)(j).subtheme,A=i("posts"),x=i("authorizedUser");return Object(u.jsxs)("form",{className:"blog__form",children:[Object(u.jsx)("textarea",{className:"blog__field ".concat(O),resize:"none",maxLength:150,placeholder:"New post...",onChange:function(e){var t=e.target;l({id:a,user:x.name,value:t.value,login:x.login?x.login:"guest"}),g(t.value)},value:m}),Object(u.jsx)(h,{value:"Submit",onClick:function(e){e.preventDefault(),r.value&&r.value.length>=3?(A.splice(0,0,r),t(A),g("")):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043c\u0438\u043d\u0438\u043c\u0443\u043c 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0430")}})]})},g="data:image/jpeg;base64,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",O=a.p+"static/media/iconGuest.9f7e86e9.svg",A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAABmJLR0QA/wD/AP+gvaeTAAAFRklEQVRYhe2ZW2xURRzGv5lzzu45u2cv3W3pzdqWWy/QYEBEQFEhMSE0Ag/IVXggMRgf8JKKMWLEPkiCxPBmYtBACAK+EEkwYiIG5OKFIGgJoUDBpiB0e9vb2d1z5owPFCz1bNnOLsGHfm9z+Z/vtzOT2f/MAGMaU1aRh/C9agDhwXISQDsAq9AmhdCc4qCvJZXOLAj5vXZZyM8AoDeWoF3dA26v5j4V6Y99COB4IczyhVaK/N6dRV5t8Zb1zf5Fs5vg96j3dbCYjUMnz+Pdzw5G+2LJr3tjidcBpPMxzQs6HPDufOGJuhW731/nccnyiH1TGRMbtu9NHj7ddqI3mlgIgIn6SqKBABoCuufTozve1N3KyMAAIEsSXpo7TfnxXHvp373RlGmxU6LGVDRQV11rXlv8rJYL8D0zSvB5y2qdEvIBAE3UWxzaq816urE2d+JBVRYHMauxlgJoFvUWhmbMrqosKRKKXbngST3s9y0S9RaGNhkLFge8QrGTq8ZBlkm9qLcwNAUB52Kxj5eGYDL2mLi3uDiHGLVXdYMx7hY1FocmYIzZQqFcdIoGJQwtS9Ltmz0DQrEZi0EiRDgfEV/ThFy63NUtFNsTjUOSaZ+wt2hgf9w41955W+ivuHcgAYmQHlFvYehUJnPs8M9tCZHYqzcjSFusQ9Q7n93j5MW/bqEnOnrun/64Eu+LJn4VNc4H2nYr8qEDR8+Megs5du6yBeCYqHE+0LjdF93cuuvbZNzIPT2+ciOC7v6YCeC8qG9e0AA6AL63ddfhnKm37fs+nUyblwDMgGA+L5pPUwDzFZ9nk2GxJb+0XfU11pShobp8RIjfLl7H5n1H5OCiGRUskVrBM2wjKMlwZp8FkPMyG+0vVSRVWUcUudVTXaKF503xB2eMJ9yycX3zV9i/aS3mT69zDLxyI4J5b+9A8VvN8DVWAQCMzgi69h6PD5zt6DPjxnIAOR0MRjPSs2SveiI4ffzSCRubQxXL5qj6pHIi6ypkvwbPtBp8sXU/COeYWVcNid5ZeRazseu701i9bQ/CG16Ef1rNvyMQ8CD0TINLr68MDJy5+jKnfICb9gN3lZxGWlKUVyXd/cnEd5b4/E3VWfuZ/QlEdv6A/t87MLm2HIzZaL92E8UzJyGwbDbUytCIsRfe2xNLd8e22EZ6e17QVFM2uop8rY1b1/hcId+DugMAWCINo6sH1K1ArQiBKrlNqBUz8OcbX8ZSkb41YPhGDFrCQlfQd6Bpx3pdCYol/KOV0RlBW8vuPituNAC45YyVXWHZox6t/2hlQK3IPq2FlhLwALYtJzu6y+20edCpT9Z9WtHVj0sXTvd6J5Q9PMIsKlv8lALYSwGUOrVngy7nHKsqls0RPl3kI+pWUPzcVJkqdJVju2OlLK8tmd9EJe8jYQYAFM2t12RdW+7U5ggt6+5Xws9PEb5MKYQ81SVgycxUpzYnaDdLmbXeieUPGWtkyT4NRJEJgHHD25ygq1xhPUOkfHOp/KVVhlIAaobXO5GVKEFd7JhdYMkBjQAIDq93gja5/b9gxuC1yn/uG5ygE3YiXehnDSExI2MDiA+vd4K+lo5EH91eN0TcYhx33m3uk9NVrcGBxIWW3RZRKKduxQYAQimXNMUGoTKhlEq6G0SSXCCApGsuQkCpSwZ1jXz7y5kNZmQAACyRSnHGAXBup62MnTLvzbCdNqnR2eMFoA7/RrZlUAegakjZA2Do6EsA/EPKKgCNypRS1aUTkLvZFYXNBvsRA5SmObMsyzDv3vIkcf/7y/CyAeAIgEwWzjGNabj+AVNovNClvK53AAAAAElFTkSuQmCC",x=function(e){var t=e.post,a=e.posts,c=e.date,n=e.toggleEditModal,r=e.id,l=e.updatePostsData,i=Object(s.useState)(t.value),b=Object(o.a)(i,2),d=b[0],h=b[1],m=Object(s.useContext)(j),x=m.theme,p=m.subtheme;return Object(u.jsx)("div",{className:"post__modal ".concat(x),children:Object(u.jsxs)("div",{className:"post__modal-content",children:[Object(u.jsx)("img",{className:"post__modal-icon",alt:"Post user icon",src:"Artur Volokhin"===t.user?g:t.user?A:O}),Object(u.jsxs)("div",{className:"post__modal-header",children:[Object(u.jsx)("span",{className:"post__modal-user",children:t.user?t.user:"Guest"}),Object(u.jsx)("span",{children:c})]}),Object(u.jsx)("textarea",{className:"post__modal-message ".concat(p),value:d,onChange:function(e){var t=e.target;h(t.value)},autoFocus:!0}),Object(u.jsx)("div",{className:"post__modal-submit ".concat(x),onClick:function(){var e=a.findIndex((function(e){return e.id===r}));-1!==e?(t.value=d,a.splice(e,1,t),l(a),n(!1)):(n(!1),alert("\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0439 \u043f\u043e\u0441\u0442 \u0443\u0434\u0430\u043b\u0451\u043d!"))}}),Object(u.jsx)("div",{className:"post__modal-cancel ".concat(x),onClick:function(){return n(!1)}})]})})},p=function(e){var t=e.post,a=e.posts,c=e.date,n=e.id,r=e.updatePostsData,o=e.handleClickEdit,l=e.authorization,i=Object(s.useContext)(j).subtheme;return Object(u.jsxs)("article",{className:"blog__post",id:n,children:[Object(u.jsx)("img",{className:"blog__post-icon",alt:"Post user icon",src:"Artur Volokhin"===t.user?g:t.user?A:O}),Object(u.jsxs)("div",{className:"blog__post-content",children:[Object(u.jsxs)("div",{className:"blog__post-header",children:[Object(u.jsx)("span",{className:"blog__post-user",children:t.user?t.user:"Guest"}),Object(u.jsxs)("div",{className:"blog__post-article",children:[Object(u.jsx)("span",{children:c}),"admin"===l.login||l.login===t.login?Object(u.jsx)("div",{className:"blog__dropdown",children:Object(u.jsxs)("ul",{className:"blog__settings ".concat(i),children:[Object(u.jsx)("li",{className:"blog__settings-item",onClick:function(e){var t=e.target,s=a.findIndex((function(e){return e.id===t.id}));a.splice(s,1),r(a)},id:n,children:"Delete post"}),Object(u.jsx)("li",{className:"blog__settings-item",onClick:o,id:n,children:"Edit"})]})}):null]})]}),Object(u.jsx)("div",{className:"blog__post-main",children:Object(u.jsx)("p",{children:t.value})})]})]})},v=function(e){var t=e.authorization,a=e.updatePostsData,c=Object(s.useState)(!1),n=Object(o.a)(c,2),r=n[0],l=n[1],j=Object(s.useState)(null),b=Object(o.a)(j,2),d=b[0],h=b[1],m=Object(s.useState)(null),g=Object(o.a)(m,2),O=g[0],A=g[1],v=i("posts"),f=(new Date).toJSON().slice(0,10),N=function(e){var t=e.target,a=v.find((function(e){return e.id===t.id}));A(t.id),!r&&l(!0),h(a)};return Object(u.jsxs)("section",{className:"blog__wall",children:[Object(u.jsx)("h2",{className:"subtitle",children:"Posts wall:"}),"admin"===t.login&&Object(u.jsx)("p",{className:"blog__wall-delete",onClick:function(){localStorage.removeItem("posts"),a([])},children:"Delete all posts"}),r&&t&&Object(u.jsx)(x,{post:d,date:f,toggleEditModal:l,posts:v,id:O,updatePostsData:a}),v.map((function(e,s){return Object(u.jsx)(p,{post:e,posts:v,date:f,id:e.id,updatePostsData:a,handleClickEdit:N,authorization:t},e.id)}))]})},f=a(19),N=function(e){var t=e.authorization,a=Object(s.useState)(i("status")),c=Object(o.a)(a,2),n=c[0],r=c[1],j=Object(s.useState)(i("posts")),b=Object(o.a)(j,2),h=(b[0],b[1]),g=Object(f.a)(),O=function(e){l("posts",e),h(e)};return Object(u.jsxs)("section",{className:"blog",children:[Object(u.jsx)(d,{authorization:t,status:n,setStatus:r}),Object(u.jsx)(m,{updatePostsData:O,id:g}),Object(u.jsx)(v,{updatePostsData:O,authorization:t})]})},_=function(e){var t=e.avatar;return Object(u.jsx)("img",{src:t,alt:"avatar",width:"300px"})},k=function(e){var t=e.name,a=e.value;return Object(u.jsxs)("li",{className:"user__info-item",children:[Object(u.jsx)("span",{children:t})," ",Object(u.jsx)("span",{className:"user__info-item--data",children:a})]})},E=function(e){var t=e.toggleUserInfoEdit,a=e.authorization,s=i("userInfo");return Object(u.jsxs)("article",{className:"section user__info",children:["admin"===a.login&&Object(u.jsx)("p",{className:"user__info-edit",onClick:t,children:"Edit"}),Object(u.jsx)("h2",{className:"subtitle",children:"Main information"}),Object(u.jsx)("ul",{className:"user__info-content",children:Object.entries(s).map((function(e,t){var a=Object(o.a)(e,2),s=a[0],c=a[1];return Object(u.jsx)(k,{name:s,value:c},t)}))})]})},Q=function(){return Object(u.jsxs)("article",{className:"section user__stack",children:[Object(u.jsx)("h2",{className:"subtitle",children:"My technologies stack"}),Object(u.jsx)("ul",{className:"user__stack-list",children:["html","css","js","react","webpack","git","npm"].map((function(e,t){return Object(u.jsx)("li",{className:"user__stack-item user__stack-item--"+e},t)}))})]})},B=function(){var e=Object(s.useContext)(j).text;return Object(u.jsxs)("article",{className:"section user__contacts",children:[Object(u.jsx)("h2",{className:"subtitle",children:"My contacts:"}),Object(u.jsxs)("ul",{className:"user__contacts-content",children:[Object(u.jsx)("li",{className:"user__contacts-item",children:Object(u.jsx)("a",{className:"user__contacts-link ".concat(e),href:"https://vk.com/arturvolokhin97",rel:"noreferrer",target:"_blank",children:"arturvolokhin97"})}),Object(u.jsx)("li",{className:"user__contacts-item",children:Object(u.jsx)("a",{className:"user__contacts-link ".concat(e),href:"https://github.com/arturvolokhin",rel:"noreferrer",target:"_blank",children:"arturvolokhin"})}),Object(u.jsx)("li",{className:"user__contacts-item",children:Object(u.jsx)("a",{className:"user__contacts-link ".concat(e),href:"https://github.com/arturvolokhin",rel:"noreferrer",target:"_blank",children:"arturvolokhin"})}),Object(u.jsx)("li",{className:"user__contacts-item",children:Object(u.jsx)("a",{className:"user__contacts-link ".concat(e),href:"mailto:artur.volokhin@mail.ru",children:"artur.volokhin@mail.ru"})})]})]})},C=a(5),M=a(7),I=function(e){var t=e.name,a=e.saveValue,c=e.placeholder,n=e.text,r=Object(s.useState)(n),l=Object(o.a)(r,2),i=l[0],b=l[1],d=Object(s.useContext)(j).subtheme;return Object(u.jsx)("input",{className:"user__edit-field ".concat(d),placeholder:c,name:t,onChange:function(e){var t=e.target;b(t.value)},onBlur:function(e){var t=e.target;a(t)},value:i,onKeyPress:function(e){var t=e.target;return"Enter"===e.key?t.blur():null},autoComplete:"off"})},S=function(e){var t=e.toggleUserInfoEdit,a=i("userInfo"),c=Object(s.useState)(a),n=Object(o.a)(c,2),r=n[0],b=n[1],d=Object(s.useContext)(j),h=d.theme,m=d.subtheme,g=function(e){b(Object(M.a)(Object(M.a)({},r),{},Object(C.a)({},e.name,e.value)))};return Object(u.jsxs)("form",{className:"user__edit ".concat(m),children:[Object.entries(a).map((function(e){var t=Object(o.a)(e,2),a=t[0],s=t[1];return Object(u.jsx)(I,{name:a,placeholder:a,saveValue:g,text:s},a)})),Object(u.jsxs)("div",{className:"user__edit-buttons",children:[Object(u.jsx)("div",{className:"post__modal-submit ".concat(h),onClick:function(e){e.preventDefault(),l("userInfo",r),t()}}),Object(u.jsx)("div",{className:"post__modal-cancel ".concat(h),onClick:t})]})]})},w=function(){var e=Object(s.useContext)(j).text;return Object(u.jsxs)("section",{className:"section projects",children:[Object(u.jsx)("h2",{className:"subtitle",children:"My projects:"}),Object(u.jsxs)("ul",{className:"projects__list",children:[Object(u.jsxs)("ol",{className:"projects__sublist",children:[Object(u.jsx)("li",{className:"projects__list-title ".concat(e),children:"Html + Css:"}),Object(u.jsx)("li",{className:"projects__item",children:Object(u.jsx)("a",{className:"projects__item-link ".concat(e),href:"https://github.com/arturvolokhin/dashboard",rel:"noreferrer",target:"_blank",children:"Dashboard"})}),Object(u.jsx)("li",{className:"projects__item",children:Object(u.jsx)("a",{className:"projects__item-link ".concat(e),href:"https://github.com/arturvolokhin/Konstruct",rel:"noreferrer",target:"_blank",children:"Landing page"})})]}),Object(u.jsxs)("ol",{className:"projects__sublist",children:[Object(u.jsx)("li",{className:"projects__list-title ".concat(e),children:"JavaScript:"}),Object(u.jsx)("li",{className:"projects__item",children:Object(u.jsx)("a",{className:"projects__item-link ".concat(e),href:"https://github.com/arturvolokhin/weather-app",rel:"noreferrer",target:"_blank",children:"Weather app"})}),Object(u.jsx)("li",{className:"projects__item",children:Object(u.jsx)("a",{className:"projects__item-link ".concat(e),href:"https://github.com/arturvolokhin/kanban",rel:"noreferrer",target:"_blank",children:"Kanban app"})}),Object(u.jsx)("li",{className:"projects__item",children:Object(u.jsx)("a",{className:"projects__item-link ".concat(e),href:"https://github.com/arturvolokhin/tic-tac-toe",rel:"noreferrer",target:"_blank",children:"Tic-tac-toe"})}),Object(u.jsx)("li",{className:"projects__item",children:Object(u.jsx)("a",{className:"projects__item-link ".concat(e),href:"https://github.com/arturvolokhin/arturvolokhin.github.io",rel:"noreferrer",target:"_blank",children:"Landing page"})})]}),Object(u.jsxs)("ol",{className:"projects__sublist",children:[Object(u.jsx)("li",{className:"projects__list-title ".concat(e),children:"React:"}),Object(u.jsx)("li",{className:"projects__item",children:Object(u.jsx)("a",{className:"projects__item-link ".concat(e),href:"https://github.com/arturvolokhin/weather-app-react",rel:"noreferrer",target:"_blank",children:"Weather app"})}),Object(u.jsx)("li",{className:"projects__item",children:Object(u.jsx)("a",{className:"projects__item-link ".concat(e),href:"https://github.com/arturvolokhin/myBlog-react",rel:"noreferrer",target:"_blank",children:"My blog"})}),Object(u.jsx)("li",{className:"projects__item",children:Object(u.jsx)("a",{className:"projects__item-link ".concat(e),href:"https://github.com/arturvolokhin/todo-react",rel:"noreferrer",target:"_blank",children:"Todo"})})]})]})]})},R=a.p+"static/media/avatar.9fe3b2af.jpg",z=function(e){var t=e.authorization,a=Object(s.useState)(!1),c=Object(o.a)(a,2),n=c[0],r=c[1],l=function(){t&&r(!n)};return Object(u.jsxs)("section",{className:"user",children:[Object(u.jsx)(_,{avatar:R}),Object(u.jsx)(E,{authorization:t,toggleUserInfoEdit:l}),Object(u.jsx)(Q,{}),Object(u.jsx)(w,{}),Object(u.jsx)(B,{}),n&&t?Object(u.jsx)(S,{toggleUserInfoEdit:l}):null]})},L=a.p+"static/media/icon.a02a4c2e.svg",y=function(){var e=Object(s.useContext)(j).toggle;return Object(u.jsxs)("label",{className:"switch",children:[Object(u.jsx)("input",{onClick:e,className:"switch__checkbox",type:"checkbox"}),Object(u.jsx)("span",{className:"switch__slider"})]})},V=function(e){var t=e.setAuthorization;return Object(u.jsx)(h,{onClick:function(){l("authorizedUser",!1),t(!1)},value:"Logout"})},G=function(e){var t=e.icon;return Object(u.jsxs)("div",{className:"title",children:[Object(u.jsx)("img",{className:"title__icon",src:t,alt:"icon",width:"40px"}),Object(u.jsx)("h1",{className:"title__text",children:"Artur's V. Blog"})]})},U=function(e){var t=e.toggleLoginModal;return Object(u.jsx)(h,{value:"Login",onClick:t})},D=function(e){var t=e.authorization,a=e.setAuthorization,c=e.toggleLoginModal,n=Object(s.useContext)(j).theme;return Object(u.jsxs)("header",{className:"header ".concat(n),children:[Object(u.jsx)(G,{icon:L}),Object(u.jsxs)("div",{className:"header__params",children:[t.login?Object(u.jsx)(V,{setAuthorization:a}):Object(u.jsx)(U,{toggleLoginModal:c}),Object(u.jsx)(y,{})]})]})},Y=function(){return Object(u.jsx)("p",{className:"description",children:"I'm studying to be a frontend developer at TeachMeSkills, looking for a job as an trainee or junior frontend"})},J=function(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)(Y,{})})},F=a(9),K=function(e){var t=e.isLoginModal,a=e.toggleLoginModal,c=e.toggleRegistrationModal,n=e.setAuthorization,r=Object(s.useState)(""),b=Object(o.a)(r,2),d=b[0],m=b[1],g=Object(s.useState)(""),O=Object(o.a)(g,2),A=O[0],x=O[1],p=Object(s.useContext)(j),v=p.theme,f=p.subtheme,N=function(e){var t={login:e.login,password:e.password,name:e.name};l("authorizedUser",t),n(t)};return Object(u.jsxs)("article",{className:t?"modal visible ".concat(v):"modal",children:[Object(u.jsx)("div",{className:"close",onClick:a}),Object(u.jsx)("h2",{className:"subtitle",children:"Already Registered? Enter your data:"}),Object(u.jsxs)("form",{className:"modal__form",children:[Object(u.jsx)("input",{className:"modal__field ".concat(f),onChange:function(e){var t=e.target;return m(t.value)},type:"login",value:d,placeholder:"Login",maxLength:"16",autoFocus:!0}),Object(u.jsx)("input",{className:"modal__field ".concat(f),onChange:function(e){var t=e.target;return x(t.value)},type:"password",value:A,placeholder:"Password",maxLength:"16"}),Object(u.jsx)(h,{value:"Submit",onClick:function(e){e.preventDefault();var t=i("usersRegData").filter((function(e){return e.login===d&&e.password===A}));t.length>0?N.apply(void 0,Object(F.a)(t)):alert("\u0412\u044b \u0432\u0432\u0435\u043b\u0438 \u043d\u0435 \u0432\u0435\u0440\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"),m(""),x(""),a()}})]}),Object(u.jsx)("h2",{className:"subtitle modal__registration-link",onClick:function(){a(),c()},children:"Not Registered? Click me"})]})},P=function(e){var t=e.isRegistrationModal,a=e.toggleRegistrationModal,c=e.toggleLoginModal,n=Object(s.useContext)(j),r=n.theme,b=n.subtheme,d=Object(s.useState)(""),m=Object(o.a)(d,2),g=m[0],O=m[1],A=Object(s.useState)(""),x=Object(o.a)(A,2),p=x[0],v=x[1],f=Object(s.useState)(""),N=Object(o.a)(f,2),_=N[0],k=N[1],E=Object(s.useState)("Invalid login"),Q=Object(o.a)(E,2),B=Q[0],C=Q[1],M=Object(s.useState)("Invalid password"),I=Object(o.a)(M,2),S=I[0],w=I[1],R=Object(s.useState)("Invalid name"),z=Object(o.a)(R,2),L=z[0],y=z[1],V=Object(s.useState)(!1),G=Object(o.a)(V,2),U=G[0],D=G[1],Y=Object(s.useState)(!1),J=Object(o.a)(Y,2),F=J[0],K=J[1],P=Object(s.useState)(!1),X=Object(o.a)(P,2),W=X[0],Z=X[1],H=function(e){var t=e.target,a=/[A-Za-z0-9]{5,16}$/,s="Please enter at least 5 characters\n            and only numbers and Latin letters";switch(t.name){case"email":t.value.match(a)?D(!1):(C(s),D(!0));break;case"password":t.value.match(a)?K(!1):(w(s),K(!0));break;case"name":t.value.match(/[A-Za-z]{3,16}$/)?Z(!1):(y("Please enter at least 3 characters and only Latin letters"),Z(!0))}};return Object(u.jsxs)("article",{className:t?"modal visible ".concat(r):"modal",children:[Object(u.jsx)("div",{className:"close",onClick:a}),Object(u.jsx)("h2",{className:"subtitle",children:"Enter your data:"}),Object(u.jsxs)("form",{className:"modal__form",children:[U&&Object(u.jsx)("p",{style:{color:"red"},children:B}),Object(u.jsx)("input",{className:"modal__field ".concat(b),onChange:function(e){var t=e.target;return O(t.value)},type:"login",value:g,placeholder:"Login",maxLength:"16",onBlur:H,name:"email",autoFocus:!0}),F&&Object(u.jsx)("p",{style:{color:"red"},children:S}),Object(u.jsx)("input",{className:"modal__field ".concat(b),onChange:function(e){var t=e.target;return v(t.value)},type:"password",value:p,placeholder:"Password",maxLength:"16",onBlur:H,name:"password"}),W&&Object(u.jsx)("p",{style:{color:"red"},children:L}),Object(u.jsx)("input",{className:"modal__field ".concat(b),onChange:function(e){var t=e.target;return k(t.value)},type:"text",value:_,placeholder:"Your name",maxLength:"16",onBlur:H,name:"name"}),!(U||F||W)&&Object(u.jsx)(h,{value:"Submit",onClick:function(e){e.preventDefault(),!localStorage.usersRegData&&l("usersRegData",[]),function(){var e={login:p,password:p,name:_},t=i("usersRegData");t.push(e),l("usersRegData",t)}(),O(""),v(""),k(""),a(),c()}})]})]})},X=function(e){var t=e.setAuthorization,a=e.toggleLoginModal,c=e.isLoginModal,n=Object(s.useState)(!1),r=Object(o.a)(n,2),l=r[0],i=r[1],j=function(){i(!l)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(K,{isLoginModal:c,toggleLoginModal:a,setAuthorization:t,toggleRegistrationModal:j}),Object(u.jsx)(P,{toggleLoginModal:a,isRegistrationModal:l,toggleRegistrationModal:j})]})},W=function(){var e=Object(s.useState)(i("authorizedUser")),t=Object(o.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(!1),r=Object(o.a)(n,2),l=r[0],b=r[1],d=Object(s.useContext)(j),h=d.theme,m=d.background,g=function(){b(!l)};window.innerWidth;return Object(u.jsx)("div",{className:"container ".concat(m),children:Object(u.jsxs)("div",{className:"wrapper ".concat(h),children:[Object(u.jsx)(D,{authorization:a,toggleLoginModal:g,setAuthorization:c}),Object(u.jsxs)("main",{className:"main",children:[Object(u.jsx)(z,{authorization:a}),Object(u.jsx)(N,{authorization:a}),Object(u.jsx)(X,{isLoginModal:l,toggleLoginModal:g,setAuthorization:c})]}),Object(u.jsx)(J,{})]})})};!function(){if(0===i("userInfo").length){l("userInfo",{Name:"Artur Volokhin",Birthday:"20.11.1997","Live to":"Minsk, Belarus"})}}(),r.a.render(Object(u.jsx)(b,{children:Object(u.jsx)(W,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.ca0d2c4f.chunk.js.map