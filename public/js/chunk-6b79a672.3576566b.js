(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b79a672"],{"02f4":function(t,n,e){var r=e("4588"),o=e("be13");t.exports=function(t){return function(n,e){var a,i,c=String(o(n)),u=r(e),s=c.length;return u<0||u>=s?t?"":void 0:(a=c.charCodeAt(u),a<55296||a>56319||u+1===s||(i=c.charCodeAt(u+1))<56320||i>57343?t?c.charAt(u):a:t?c.slice(u,u+2):i-56320+(a-55296<<10)+65536)}}},"0a49":function(t,n,e){var r=e("9b43"),o=e("626a"),a=e("4bf8"),i=e("9def"),c=e("cd1c");t.exports=function(t,n){var e=1==t,u=2==t,s=3==t,f=4==t,l=6==t,d=5==t||l,h=n||c;return function(n,c,m){for(var p,b,g=a(n),y=o(g),v=r(c,m,3),w=i(y.length),O=0,S=e?h(n,w):u?h(n,0):void 0;w>O;O++)if((d||O in y)&&(p=y[O],b=v(p,O,g),t))if(e)S[O]=b;else if(b)switch(t){case 3:return!0;case 5:return p;case 6:return O;case 2:S.push(p)}else if(f)return!1;return l?-1:s||f?f:S}}},"0bfb":function(t,n,e){"use strict";var r=e("cb7c");t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},1169:function(t,n,e){var r=e("2d95");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"11e9":function(t,n,e){var r=e("52a7"),o=e("4630"),a=e("6821"),i=e("6a99"),c=e("69a8"),u=e("c69a"),s=Object.getOwnPropertyDescriptor;n.f=e("9e1e")?s:function(t,n){if(t=a(t),n=i(n,!0),u)try{return s(t,n)}catch(e){}if(c(t,n))return o(!r.f.call(t,n),t[n])}},"1c4c":function(t,n,e){"use strict";var r=e("9b43"),o=e("5ca1"),a=e("4bf8"),i=e("1fa8"),c=e("33a4"),u=e("9def"),s=e("f1ae"),f=e("27ee");o(o.S+o.F*!e("5cc5")((function(t){Array.from(t)})),"Array",{from:function(t){var n,e,o,l,d=a(t),h="function"==typeof this?this:Array,m=arguments.length,p=m>1?arguments[1]:void 0,b=void 0!==p,g=0,y=f(d);if(b&&(p=r(p,m>2?arguments[2]:void 0,2)),void 0==y||h==Array&&c(y))for(n=u(d.length),e=new h(n);n>g;g++)s(e,g,b?p(d[g],g):d[g]);else for(l=y.call(d),e=new h;!(o=l.next()).done;g++)s(e,g,b?i(l,p,[o.value,g],!0):o.value);return e.length=g,e}})},"2b83":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"admin-login"},[e("div",{staticClass:"login-box"},[e("h2",[t._v("文档管理系统")]),e("el-tabs",{model:{value:t.active,callback:function(n){t.active=n},expression:"active"}},[e("el-tab-pane",{attrs:{label:"账号登录",name:"account"}},[e("div",{staticClass:"login-form"},[e("el-input",{attrs:{"prefix-icon":"el-icon-user-solid",placeholder:"用户名/手机号"},model:{value:t.formData.username,callback:function(n){t.$set(t.formData,"username",n)},expression:"formData.username"}}),e("el-input",{attrs:{type:"password","prefix-icon":"el-icon-s-goods",placeholder:"输入密码"},model:{value:t.formData.userpass,callback:function(n){t.$set(t.formData,"userpass",n)},expression:"formData.userpass"}}),e("el-input",{staticClass:"code-input",attrs:{"prefix-icon":"el-icon-s-goods",placeholder:"输入图形验证码"},nativeOn:{keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.login(n)}},model:{value:t.formData.code,callback:function(n){t.$set(t.formData,"code",n)},expression:"formData.code"}},[e("img",{attrs:{slot:"append",src:t.code,alt:""},on:{click:t.getCode},slot:"append"})])],1),t.thirdPartyList.length?e("div",{staticClass:"login-thirdParty"},[e("span",{staticClass:"title"},[t._v("第三方账号登录")]),e("div",{staticClass:"icon-list"},t._l(t.thirdPartyList,(function(n){return e("img",{key:n.name,staticClass:"icon-block",attrs:{src:n.logo,title:n.name},on:{click:function(e){return t.thirdPartyIconClick(n.redirect_url)}}})})),0)]):t._e(),e("el-button",{staticClass:"login-btn",on:{click:t.login}},[t._v("登录")])],1)],1)],1),t._m(0)])},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"footer"},[t._v("\n      Powered by "),e("a",{attrs:{href:"https://www.w7.cc"}},[t._v("微擎云计算©www.w7.cc")])])}],a=(e("ac6a"),e("ac4d"),e("8a81"),e("5df3"),e("1c4c"),e("7f7f"),e("6b54"),e("7514"),e("1c1e")),i=e("4ec3");function c(t,n){var e;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=u(t))||n&&t&&"number"===typeof t.length){e&&(t=e);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==e.return||e.return()}finally{if(c)throw a}}}}function u(t,n){if(t){if("string"===typeof t)return s(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?s(t,n):void 0}}function s(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var f={name:"adminLoginPage",data:function(){return{autofocus:!1,active:"account",code:"",formData:{username:"",userpass:"",code:"",phone:"",phoneCode:""},thirdPartyList:[]}},beforeRouteEnter:function(t,n,e){var r=t.query.code,o=t.query.redirect_url,c=t.query.app_id;r?a["a"].post("/common/auth/third-party-login",{code:r,app_id:c}).then((function(t){t&&t.data.is_need_bind?e("/bind"):t&&t.data.has_login?e((function(n){1==t.data.has_login?n.$confirm(t.data.message,"",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["b"])({change_token:t.data.change_token}).then((function(){n.$message({type:"success",message:"切换账户成功!"}),n.$router.push({name:"admin"})}))})).catch((function(){n.$message({type:"info",message:"已取消"}),n.$router.push({name:"admin"})})):2==t.data.has_login?n.$confirm(t.data.message,"",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["a"])({bind_token:t.data.bind_token}).then((function(){n.$message({type:"success",message:"绑定账户成功!"}),n.$router.push({name:"admin"})}))})).catch((function(){n.$message({type:"info",message:"已取消"}),n.$router.push({name:"admin"})})):3==t.data.has_login&&n.$confirm(t.data.message,"",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["t"])({source_token:t.data.source_token}).then((function(){n.$router.push({name:"adminBind"})}))})).catch((function(){n.$message({type:"info",message:"已取消"}),n.$router.push({name:"admin"})}))})):t&&"success"==t.data?e("/admin/document"):o?window.open(o,"_self"):e("/admin/document")})).catch((function(){})):a["a"].post("/common/auth/default-login-url").then((function(t){t.data?window.open(t.data,"_self"):e()})).catch((function(t){}))},created:function(){this.getCode(),this.getThirdParty()},methods:{systemDetection:function(){var t=this;Object(i["r"])().then((function(n){if(200==n.code){var e,r=c(n.data);try{for(r.s();!(e=r.n()).done;){var o=e.value;1!=o.id||o.enable||t.$router.push({name:"install"})}}catch(a){r.e(a)}finally{r.f()}}})).catch((function(t){}))},showFind:function(){this.$message({message:"请联系管理员修改或使用密码找回工具修改"})},getCode:function(){var t=this;this.$post("/common/verifycode/image").then((function(n){200==n.code?t.code=n.data.img:t.$message.error(n.message)}))},login:function(){var t=this;this.$post("/common/auth/login",this.formData).then((function(){var n=t.$message("登录成功");setTimeout((function(){n.close();var e=localStorage.recordHref;e?location.href=e:t.$router.push("/admin/document")}),500)})).catch((function(){t.formData.code="",document.getElementsByClassName("el-input__inner")[2].focus(),t.getCode()}))},getThirdParty:function(){var t=this;this.$post("/common/auth/method",{redirect_url:localStorage.recordHref||this.$route.query.redirect_url}).then((function(n){if(t.thirdPartyList=n.data||[],200==n.code&&n.data.length){var e=n.data.find((function(t){return 3==t.id}));document.cookie;if(e){var r=location.origin+"/admin-login";Object(i["u"])({appDomain:"api.w7.cc",redirect_type:"ajax",redirect_method:"POST",redirect_url:r}).then((function(){n&&n.data&&n.data.is_online&&window.open(e.redirect_url,"_target")}))}}}))},thirdPartyIconClick:function(t){window.open(t,"_self")}}},l=f,d=e("2877"),h=Object(d["a"])(l,r,o,!1,null,null,null);n["default"]=h.exports},"37c8":function(t,n,e){n.f=e("2b4c")},3846:function(t,n,e){e("9e1e")&&"g"!=/./g.flags&&e("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:e("0bfb")})},"3a72":function(t,n,e){var r=e("7726"),o=e("8378"),a=e("2d00"),i=e("37c8"),c=e("86cc").f;t.exports=function(t){var n=o.Symbol||(o.Symbol=a?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:i.f(t)})}},"4ec3":function(t,n,e){"use strict";e.d(n,"d",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"i",(function(){return i})),e.d(n,"q",(function(){return c})),e.d(n,"w",(function(){return u})),e.d(n,"g",(function(){return s})),e.d(n,"f",(function(){return f})),e.d(n,"o",(function(){return l})),e.d(n,"p",(function(){return d})),e.d(n,"r",(function(){return h})),e.d(n,"m",(function(){return m})),e.d(n,"n",(function(){return p})),e.d(n,"k",(function(){return b})),e.d(n,"j",(function(){return g})),e.d(n,"h",(function(){return y})),e.d(n,"e",(function(){return v})),e.d(n,"s",(function(){return w})),e.d(n,"b",(function(){return O})),e.d(n,"a",(function(){return S})),e.d(n,"t",(function(){return _})),e.d(n,"u",(function(){return j})),e.d(n,"v",(function(){return x})),e.d(n,"l",(function(){return k}));var r=e("1c1e"),o=function(t){return Object(r["a"])({url:"/admin/document/create",data:t,method:"post"})},a=function(t){return Object(r["a"])({url:"/admin/chapter/create",data:t,method:"post"})},i=function(t){return Object(r["a"])({url:"/admin/document/chapterapi/getApiLabel",data:t,method:"get"})},c=function(t){return Object(r["a"])({url:"/admin/chapter/save",data:t,method:"post"})},u=function(t){return Object(r["a"])({url:"/admin/chapter/content",data:t,method:"post"})},s=function(t){return Object(r["a"])({url:"/admin/document/all",data:t,method:"post"})},f=function(t){return Object(r["a"])({url:"/admin/chapter/detail",data:t,method:"post"})},l=function(t){return Object(r["a"])({url:"/common/auth/getlogouturl",data:t,method:"get"})},d=function(t){return Object(r["a"])({url:"/document/chapter/record",data:t,method:"post"})},h=function(t){return Object(r["a"])({url:"/install/systemDetection",data:t,method:"post"})},m=function(t){return Object(r["a"])({url:"/install/install",data:t,method:"post"})},p=function(t){return Object(r["a"])({url:"/install/config",data:t,method:"post"})},b=function(t){return Object(r["a"])({url:"/admin/user/all",data:t,method:"post"})},g=function(t){return Object(r["a"])({url:"/document/chapter/search",data:t,method:"post"})},y=function(t){return Object(r["a"])({url:"/document/detail",data:t,method:"post"})},v=function(t){return Object(r["a"])({url:"/admin/document/delete",data:t,method:"post"})},w=function(t){return Object(r["a"])({url:"/common/auth/third-party-login-bind",data:t,method:"post"})},O=function(t){return Object(r["a"])({url:"/common/auth/changeThirdPartyUser",data:t,method:"post"})},S=function(t){return Object(r["a"])({url:"/common/auth/bindThirdPartyUser",data:t,method:"post"})},_=function(t){return Object(r["a"])({url:"/common/auth/ThirdPartyUserCacheIn",data:t,method:"post"})},j=function(t){return Object(r["a"])({url:"https://api.w7.cc/oauth/authorize/try-sync-login",data:t,method:"post"})},x=function(t){return Object(r["a"])({url:"/common/auth/unbind",data:t,method:"post"})},k=function(t){return Object(r["a"])({url:"/admin/chapter/import ",data:t,method:"post"})}},"5df3":function(t,n,e){"use strict";var r=e("02f4")(!0);e("01f9")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})}))},"67ab":function(t,n,e){var r=e("ca5a")("meta"),o=e("d3f4"),a=e("69a8"),i=e("86cc").f,c=0,u=Object.isExtensible||function(){return!0},s=!e("79e5")((function(){return u(Object.preventExtensions({}))})),f=function(t){i(t,r,{value:{i:"O"+ ++c,w:{}}})},l=function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,r)){if(!u(t))return"F";if(!n)return"E";f(t)}return t[r].i},d=function(t,n){if(!a(t,r)){if(!u(t))return!0;if(!n)return!1;f(t)}return t[r].w},h=function(t){return s&&m.NEED&&u(t)&&!a(t,r)&&f(t),t},m=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:d,onFreeze:h}},"6b54":function(t,n,e){"use strict";e("3846");var r=e("cb7c"),o=e("0bfb"),a=e("9e1e"),i="toString",c=/./[i],u=function(t){e("2aba")(RegExp.prototype,i,t,!0)};e("79e5")((function(){return"/a/b"!=c.call({source:"a",flags:"b"})}))?u((function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!a&&t instanceof RegExp?o.call(t):void 0)})):c.name!=i&&u((function(){return c.call(this)}))},7514:function(t,n,e){"use strict";var r=e("5ca1"),o=e("0a49")(5),a="find",i=!0;a in[]&&Array(1)[a]((function(){i=!1})),r(r.P+r.F*i,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),e("9c6c")(a)},"7bbc":function(t,n,e){var r=e("6821"),o=e("9093").f,a={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(n){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==a.call(t)?c(t):o(r(t))}},"8a81":function(t,n,e){"use strict";var r=e("7726"),o=e("69a8"),a=e("9e1e"),i=e("5ca1"),c=e("2aba"),u=e("67ab").KEY,s=e("79e5"),f=e("5537"),l=e("7f20"),d=e("ca5a"),h=e("2b4c"),m=e("37c8"),p=e("3a72"),b=e("d4c0"),g=e("1169"),y=e("cb7c"),v=e("d3f4"),w=e("4bf8"),O=e("6821"),S=e("6a99"),_=e("4630"),j=e("2aeb"),x=e("7bbc"),k=e("11e9"),P=e("2621"),C=e("86cc"),L=e("0d58"),T=k.f,$=C.f,A=x.f,D=r.Symbol,E=r.JSON,N=E&&E.stringify,F="prototype",M=h("_hidden"),I=h("toPrimitive"),B={}.propertyIsEnumerable,R=f("symbol-registry"),G=f("symbols"),V=f("op-symbols"),q=Object[F],H="function"==typeof D&&!!P.f,J=r.QObject,U=!J||!J[F]||!J[F].findChild,K=a&&s((function(){return 7!=j($({},"a",{get:function(){return $(this,"a",{value:7}).a}})).a}))?function(t,n,e){var r=T(q,n);r&&delete q[n],$(t,n,e),r&&t!==q&&$(q,n,r)}:$,W=function(t){var n=G[t]=j(D[F]);return n._k=t,n},z=H&&"symbol"==typeof D.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof D},Y=function(t,n,e){return t===q&&Y(V,n,e),y(t),n=S(n,!0),y(e),o(G,n)?(e.enumerable?(o(t,M)&&t[M][n]&&(t[M][n]=!1),e=j(e,{enumerable:_(0,!1)})):(o(t,M)||$(t,M,_(1,{})),t[M][n]=!0),K(t,n,e)):$(t,n,e)},Q=function(t,n){y(t);var e,r=b(n=O(n)),o=0,a=r.length;while(a>o)Y(t,e=r[o++],n[e]);return t},X=function(t,n){return void 0===n?j(t):Q(j(t),n)},Z=function(t){var n=B.call(this,t=S(t,!0));return!(this===q&&o(G,t)&&!o(V,t))&&(!(n||!o(this,t)||!o(G,t)||o(this,M)&&this[M][t])||n)},tt=function(t,n){if(t=O(t),n=S(n,!0),t!==q||!o(G,n)||o(V,n)){var e=T(t,n);return!e||!o(G,n)||o(t,M)&&t[M][n]||(e.enumerable=!0),e}},nt=function(t){var n,e=A(O(t)),r=[],a=0;while(e.length>a)o(G,n=e[a++])||n==M||n==u||r.push(n);return r},et=function(t){var n,e=t===q,r=A(e?V:O(t)),a=[],i=0;while(r.length>i)!o(G,n=r[i++])||e&&!o(q,n)||a.push(G[n]);return a};H||(D=function(){if(this instanceof D)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),n=function(e){this===q&&n.call(V,e),o(this,M)&&o(this[M],t)&&(this[M][t]=!1),K(this,t,_(1,e))};return a&&U&&K(q,t,{configurable:!0,set:n}),W(t)},c(D[F],"toString",(function(){return this._k})),k.f=tt,C.f=Y,e("9093").f=x.f=nt,e("52a7").f=Z,P.f=et,a&&!e("2d00")&&c(q,"propertyIsEnumerable",Z,!0),m.f=function(t){return W(h(t))}),i(i.G+i.W+i.F*!H,{Symbol:D});for(var rt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ot=0;rt.length>ot;)h(rt[ot++]);for(var at=L(h.store),it=0;at.length>it;)p(at[it++]);i(i.S+i.F*!H,"Symbol",{for:function(t){return o(R,t+="")?R[t]:R[t]=D(t)},keyFor:function(t){if(!z(t))throw TypeError(t+" is not a symbol!");for(var n in R)if(R[n]===t)return n},useSetter:function(){U=!0},useSimple:function(){U=!1}}),i(i.S+i.F*!H,"Object",{create:X,defineProperty:Y,defineProperties:Q,getOwnPropertyDescriptor:tt,getOwnPropertyNames:nt,getOwnPropertySymbols:et});var ct=s((function(){P.f(1)}));i(i.S+i.F*ct,"Object",{getOwnPropertySymbols:function(t){return P.f(w(t))}}),E&&i(i.S+i.F*(!H||s((function(){var t=D();return"[null]"!=N([t])||"{}"!=N({a:t})||"{}"!=N(Object(t))}))),"JSON",{stringify:function(t){var n,e,r=[t],o=1;while(arguments.length>o)r.push(arguments[o++]);if(e=n=r[1],(v(n)||void 0!==t)&&!z(t))return g(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!z(n))return n}),r[1]=n,N.apply(E,r)}}),D[F][I]||e("32e9")(D[F],I,D[F].valueOf),l(D,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},9093:function(t,n,e){var r=e("ce10"),o=e("e11e").concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},ac4d:function(t,n,e){e("3a72")("asyncIterator")},ac6a:function(t,n,e){for(var r=e("cadf"),o=e("0d58"),a=e("2aba"),i=e("7726"),c=e("32e9"),u=e("84f2"),s=e("2b4c"),f=s("iterator"),l=s("toStringTag"),d=u.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=o(h),p=0;p<m.length;p++){var b,g=m[p],y=h[g],v=i[g],w=v&&v.prototype;if(w&&(w[f]||c(w,f,d),w[l]||c(w,l,g),u[g]=d,y))for(b in r)w[b]||a(w,b,r[b],!0)}},cd1c:function(t,n,e){var r=e("e853");t.exports=function(t,n){return new(r(t))(n)}},d4c0:function(t,n,e){var r=e("0d58"),o=e("2621"),a=e("52a7");t.exports=function(t){var n=r(t),e=o.f;if(e){var i,c=e(t),u=a.f,s=0;while(c.length>s)u.call(t,i=c[s++])&&n.push(i)}return n}},e853:function(t,n,e){var r=e("d3f4"),o=e("1169"),a=e("2b4c")("species");t.exports=function(t){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)||(n=void 0),r(n)&&(n=n[a],null===n&&(n=void 0))),void 0===n?Array:n}},f1ae:function(t,n,e){"use strict";var r=e("86cc"),o=e("4630");t.exports=function(t,n,e){n in t?r.f(t,n,o(0,e)):t[n]=e}}}]);