(function(t){function e(e){for(var n,o,r=e[0],c=e[1],l=e[2],f=0,p=[];f<r.length;f++)o=r[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,r=1;r<i.length;r++){var c=i[r];0!==a[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},a={app:0},s=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"06c2":function(t,e,i){t.exports=i.p+"img/hp.8e2a5280.png"},"0b53":function(t,e,i){},"0b63":function(t,e,i){t.exports=i.p+"img/eyetracking.9bfc0e6e.png"},"198e":function(t,e,i){"use strict";var n=i("62d7"),a=i.n(n);a.a},"2a24":function(t,e,i){t.exports=i.p+"img/Responsive.6966b82f.png"},"328e":function(t,e,i){"use strict";var n=i("e130"),a=i.n(n);a.a},3618:function(t,e,i){t.exports=i.p+"img/Unity_logo.11f6a6be.png"},"396d":function(t,e,i){t.exports=i.p+"img/me_color.ce962d9c.png"},"3c3d":function(t,e,i){},4153:function(t,e,i){"use strict";var n=i("0b53"),a=i.n(n);a.a},"50c47":function(t,e,i){"use strict";var n=i("a9b3"),a=i.n(n);a.a},"561a":function(t,e,i){"use strict";var n=i("c4b2"),a=i.n(n);a.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("MenuBar",{ref:"menubar",on:{move:t.move}}),i("Home",{ref:"home",on:{start:t.start}}),i("About",{ref:"about",on:{makeFun:t.makeFun}}),i("Skill",{ref:"skill"}),i("Project",{ref:"project"}),i("Contact",{ref:"contact"}),i("Footer",{ref:"footer"})],1)},s=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app_nav"},t._l(t.menuList,(function(e){return i("button",{key:e.id,staticClass:"title_font",on:{click:function(i){return t.move(e)}}},[t._v(t._s(e))])})),0)},r=[],c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Home"},[i("div",{staticClass:"home_blank"}),i("div",{staticClass:"home_container"},[t._m(0),i("button",{staticClass:"home_button",on:{click:function(e){return t.start()}}},[t._v("See More")])])])},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home_title"},[i("h1",{staticClass:"title_font"},[t._v("GAME DEVELOPER"),i("br"),t._v("EDEN JIN")])])}],u={methods:{start:function(){this.$emit("start")}}},f=u,p=(i("e13f"),i("2877")),d=Object(p["a"])(f,c,l,!1,null,"39b0e936",null),m=d.exports,v={data:function(){return{menuList:["HOME","ABOUT","SKILL","PROJECT","CONTACT"]}},methods:{move:function(t){this.$emit("move",t)}}},h=v,_=(i("4153"),Object(p["a"])(h,o,r,!1,null,null,null)),g=_.exports,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"About"},[i("div",{staticClass:"about_container"},[i("p",{staticClass:"about_top title_font"},[t._v("ABOUT")]),i("div",{staticClass:"about_strengthList"},t._l(t.strengthList,(function(e){return i("div",{key:e.id,staticClass:"about_strengthItem"},[i("div",{staticClass:"about_strengthImage"},[i("img",{attrs:{src:e.image}})]),i("p",{staticClass:"about_strengthText defaultBold_font"},[t._v(t._s(e.text))]),i("p",{staticClass:"about_strengthExplan defaultLight_font"},[t._v(t._s(e.explan))])])})),0),i("div",{staticClass:"about_introduce"},[t._m(0),i("div",{staticClass:"about_introText"},[i("p",{staticClass:"about_introTitle defaultBold_font"},[t._v("<< Developer Eden Jin >>")]),i("div",{staticClass:"about_introDetail defaultLight_font"},[t._v(" I'm Game Developer in "),i("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"https://www.google.com/maps/@37.0190952,126.9156497,3a,75y,67.4h,91.32t/data=!3m8!1e1!3m6!1sAF1QipM9Z_Io5TvMVEl3OiiOHBnLLC9vsodtH7ATZx6P!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipM9Z_Io5TvMVEl3OiiOHBnLLC9vsodtH7ATZx6P%3Dw203-h100-k-no-pi-0-ya97.91478-ro-0-fo100!7i8704!8i4352?hl=ko",target:"_blank"}},[t._v(" South Korea")]),t._v(" . "),i("br"),i("br"),t._v("I have a great passion for games, "),i("br"),t._v("efficient development and "),i("br"),t._v("never experienced user experience. "),i("br"),i("br"),t._v("I'm a challenger. "),i("br"),i("br"),t._v("Because I am not afraid of the new environment. "),i("br"),i("br"),i("br"),i("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.makeFun()}}},[t._v("Let's Make Something Fun!")])])])])])])},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about_introImage"},[n("img",{attrs:{src:i("396d")}})])}],y={data:function(){return{strengthList:[{image:i("a535"),text:"Fast",explan:"I learn and apply new things quickly. It's the biggest strength I've ever had."},{image:i("2a24"),text:"Responsive",explan:"My Games will work on any device, Mobile, Tablet, PC even Web."},{image:i("74a6"),text:"Intuitive",explan:"Coding with Unity Editor facilitates collaboration with others."},{image:i("acc1"),text:"Diversity",explan:"I have developed games in various development fields such as VR, AR, 2D, and 3D."}]}},methods:{makeFun:function(){this.$emit("makeFun")}}},k=y,x=(i("50c47"),Object(p["a"])(k,b,C,!1,null,null,null)),w=x.exports,$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Skill"},[i("div",{staticClass:"skill_container"},[i("p",{staticClass:"skill_top title_font"},[t._v("SKILL")]),i("div",{staticClass:"skill_list"},t._l(t.skillList,(function(e){return i("div",{key:e.id,staticClass:"skill_item"},[i("div",{staticClass:"skill_image"},[i("img",{attrs:{src:e.image}})]),i("div",{staticClass:"proficiency"},[i("p",{staticClass:"proficiency_title"},[t._v("Proficiency")]),t._v(" "+t._s(e.proficiency)+" ")]),i("div",{staticClass:"skill_text defaultBold_font"},[i("div",{staticClass:"skill_text_wrapper"},[t._v(" "+t._s(e.text)+" "),i("div",{staticClass:"indicator"})])])])})),0)])])},O=[],E={data:function(){return{skillList:[{image:i("3618"),text:"Unity",proficiency:"Intermediate"},{image:i("82e1"),text:"Unreal",proficiency:"Basic"},{image:i("8788"),text:"C#",proficiency:"Intermediate"},{image:i("deec"),text:"C++",proficiency:"Intermediate"}]}}},j=E,I=(i("9c3c"),Object(p["a"])(j,$,O,!1,null,null,null)),F=I.exports,L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Project"},[i("div",{staticClass:"project_container"},[i("p",{staticClass:"project_top title_font"},[t._v("PROJECT")]),i("div",{staticClass:"project_list"},t._l(t.projectList,(function(e){return i("div",{key:e.id,staticClass:"project_item"},[i("div",{staticClass:"project_imagebox"},[i("img",{staticClass:"project_image",attrs:{src:e.image}}),i("a",{staticClass:"project_link",staticStyle:{"text-decoration":"none"},attrs:{href:e.link,target:"_blank"}},[t._v("Go to Detail")])]),i("p",{staticClass:"project_title"},[t._v(t._s(e.title))]),i("p",{staticClass:"project_content defaultLight_font"},[t._v(t._s(e.content))]),i("p",{staticClass:"project_tag"},[t._v(t._s(e.tag))]),i("p",{staticClass:"project_date"},[t._v(t._s(e.date))])])})),0)])])},H=[],T={data:function(){return{projectList:[{image:i("699f"),link:"https://github.com/EDEN1109",title:"Finger Game",content:"손가락을 이용하여 진행하는 게임으로 지능발달에 도움이 된다.",tag:"#Unity #CS #PC",date:"2019. 05. ~ 2019. 09."},{image:i("0b63"),link:"https://github.com/EDEN1109",title:"Eye-Tracking Game",content:"안구인식을 통해 진행하는 게임으로 안구운동에 도움이 된다.",tag:"#Unity #CS #PC",date:"2019. 10. ~ 2020. 01."},{image:i("7e3b"),link:"https://github.com/EDEN1109",title:"I AM MOSQUITO",content:"모기가 되어 야생에서 살아남는 게임으로 제작중에 있다.",tag:"#Unreal #C++ #PC #Mobile #Online",date:"Web. 2020. 04. ~"}]}},methods:{go:function(t){this.$emit("go",t)}}},P=T,S=(i("fe55"),Object(p["a"])(P,L,H,!1,null,"7d88be82",null)),A=S.exports,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Contact"},[i("div",{staticClass:"contact_container"},[i("p",{staticClass:"contact_top title_font"},[t._v("CONTACT")]),i("div",{staticClass:"contact_list"},t._l(t.contactList,(function(e){return i("div",{key:e.id,staticClass:"contact_item"},[i("div",{staticClass:"contact_icon"},[i("img",{staticClass:"contact_image",attrs:{src:e.image}}),i("div",{staticClass:"contact_method defaultLight_font"},[t._v(" "+t._s(e.method)+" ")])]),i("div",{staticClass:"contact_privacy defaultLight_font"},[t._v(" "+t._s(e.privacy)+" ")])])})),0)])])},D=[],B={data:function(){return{contactList:[{image:i("9afb"),method:"Email",privacy:"eden-1109@naver.com"},{image:i("06c2"),method:"H.P.",privacy:"+82 - 10 - 4355 -8851"},{image:i("ee1c"),method:"Blog",privacy:"poison-dog-do-everything.tistory.com"}]}}},U=B,R=(i("198e"),Object(p["a"])(U,M,D,!1,null,"663b4a37",null)),N=R.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Footer"},[i("div",{staticClass:"footer_container"},[i("div",{staticClass:"source_copyright"},[i("a",{attrs:{href:"https://www.freepik.com/photos/technology"}},[t._v("Home Background Image Created by Freepik in Freepik.com"),i("br")]),i("a",{attrs:{href:"https://www.flaticon.com/authors/pixel-perfect"}},[t._v("Fast Icon Created by Pixel perfect in Flaticon.com"),i("br")]),i("a",{attrs:{href:"https://www.flaticon.com/authors/gregor-cresnar"}},[t._v("Intuitive Icon Created by Gregor Cresnar in Flaticon.com"),i("br")]),i("a",{attrs:{href:"https://www.freepik.com/"}},[t._v("Responsive Icon Created by Freepik in Freepik.com"),i("br")]),i("a",{attrs:{href:"https://www.flaticon.com/authors/pixel-perfect"}},[t._v("Diversity Icon Created by Pixel perfect in Flaticon.com"),i("br")]),i("a",{attrs:{href:"https://www.freepik.com/"}},[t._v("Contact Icons Created by Freepik in Freepik.com"),i("br")]),i("a",{attrs:{href:"http://greenegg.co.kr/"}},[t._v("BOKEH Font Designed by greenegg.co.kr")])]),i("p",{staticClass:"site_copyright"},[t._v("Copyright ⓒ 2020. EDEN JIN. All Rights Reserved.")])])])}],K={},V=K,Z=(i("328e"),i("561a"),Object(p["a"])(V,J,G,!1,null,"3e816da4",null)),Q=Z.exports,q={name:"App",components:{MenuBar:g,Home:m,About:w,Skill:F,Project:A,Contact:N,Footer:Q},methods:{move:function(t){var e;switch(t){case"HOME":e=0;break;case"ABOUT":e=this.$refs.home.$el.clientHeight;break;case"SKILL":e=this.$refs.home.$el.clientHeight+this.$refs.about.$el.clientHeight;break;case"PROJECT":e=this.$refs.home.$el.clientHeight+this.$refs.about.$el.clientHeight+this.$refs.skill.$el.clientHeight;break;case"CONTACT":e=this.$refs.home.$el.clientHeight+this.$refs.about.$el.clientHeight+this.$refs.skill.$el.clientHeight+this.$refs.project.$el.clientHeight;break}window.scroll({top:e,left:0,behavior:"smooth"})},start:function(){window.scroll({top:this.$refs.home.$el.clientHeight,left:0,behavior:"smooth"})},makeFun:function(){window.scroll({top:this.$refs.home.$el.clientHeight+this.$refs.about.$el.clientHeight+this.$refs.skill.$el.clientHeight+this.$refs.project.$el.clientHeight,left:0,behavior:"smooth"})}}},W=q,z=(i("5c0b"),Object(p["a"])(W,a,s,!1,null,null,null)),X=z.exports;n["a"].config.productionTip=!1,new n["a"]({el:"#app",render:function(t){return t(X)},components:{App:X},template:"<App/>"}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var n=i("9c0c"),a=i.n(n);a.a},"62d7":function(t,e,i){},"699f":function(t,e,i){t.exports=i.p+"img/finger.54d4c871.png"},"74a6":function(t,e,i){t.exports=i.p+"img/Intuitive.d1affb4b.png"},"7e3b":function(t,e,i){t.exports=i.p+"img/mosquito.b65fb2b2.png"},"82e1":function(t,e,i){t.exports=i.p+"img/Unreal_logo.cfde2ff7.png"},8788:function(t,e,i){t.exports=i.p+"img/CSharp_logo.dd82e0a0.png"},"9afb":function(t,e,i){t.exports=i.p+"img/email.f4d13af2.png"},"9c0c":function(t,e,i){},"9c3c":function(t,e,i){"use strict";var n=i("d830"),a=i.n(n);a.a},a535:function(t,e,i){t.exports=i.p+"img/Fast.ce9f91c8.png"},a9b3:function(t,e,i){},acc1:function(t,e,i){t.exports=i.p+"img/Diversity.31b3e73a.png"},c4b2:function(t,e,i){},d830:function(t,e,i){},de20:function(t,e,i){},deec:function(t,e,i){t.exports=i.p+"img/C++_logo.70fc175d.png"},e130:function(t,e,i){},e13f:function(t,e,i){"use strict";var n=i("de20"),a=i.n(n);a.a},ee1c:function(t,e,i){t.exports=i.p+"img/blog.e9b4d8e4.png"},fe55:function(t,e,i){"use strict";var n=i("3c3d"),a=i.n(n);a.a}});
//# sourceMappingURL=app.3a10ae37.js.map