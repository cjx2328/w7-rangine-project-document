(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1667b697"],{"0454":function(t,e,a){"use strict";var n=a("fa9a"),o=a.n(n);o.a},"3b2b":function(t,e,a){var n=a("7726"),o=a("5dbc"),i=a("86cc").f,r=a("9093").f,s=a("aae3"),c=a("0bfb"),l=n.RegExp,d=l,u=l.prototype,p=/a/g,m=/a/g,f=new l(p)!==p;if(a("9e1e")&&(!f||a("79e5")((function(){return m[a("2b4c")("match")]=!1,l(p)!=p||l(m)==m||"/a/i"!=l(p,"i")})))){l=function(t,e){var a=this instanceof l,n=s(t),i=void 0===e;return!a&&n&&t.constructor===l&&i?t:o(f?new d(n&&!i?t.source:t,e):d((n=t instanceof l)?t.source:t,n&&i?c.call(t):e),a?this:u,l)};for(var h=function(t){t in l||i(l,t,{configurable:!0,get:function(){return d[t]},set:function(e){d[t]=e}})},g=r(d),b=0;g.length>b;)h(g[b++]);u.constructor=l,l.prototype=u,a("2aba")(n,"RegExp",l)}a("7a56")("RegExp")},"49f7":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"document-setting"},[t.showAddManage?t._e():a("div",{staticClass:"document-setting-warpper"},[a("div",{staticClass:"nav"},[a("div",{staticClass:"nav-item",class:{active:0==t.active},on:{click:function(e){return t.onClickNav(0)}}},[0==t.active?a("p",{staticClass:"light-line"}):t._e(),t._v("\n          项目概览\n        ")]),a("div",{staticClass:"nav-item",class:{active:1==t.active},on:{click:function(e){return t.onClickNav(1)}}},[1==t.active?a("p",{staticClass:"light-line"}):t._e(),t._v("\n          权限管理\n        ")]),a("div",{staticClass:"nav-item",class:{active:2==t.active},on:{click:function(e){return t.onClickNav(2)}}},[2==t.active?a("p",{staticClass:"light-line"}):t._e(),t._v("\n          历史记录\n        ")])]),a("div",{staticClass:"content"},[0==t.active?a("div",{staticClass:"project"},[a("el-form",{key:"doc",ref:"docForm",staticClass:"w7-form__no-required-icon",attrs:{model:t.docData,rules:t.rules,"label-width":"85px","label-position":"left"}},[a("el-form-item",{staticClass:"cover-warpper",attrs:{label:"项目封面"}},[a("div",{staticClass:"upload-wrap"},[a("el-upload",{ref:"upload",attrs:{action:"/admin/upload/image",accept:".jpg,.jpeg,.png","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[a("div",{staticClass:"cover-img"},[t.docData.cover?a("img",{attrs:{src:t.docData.cover}}):t._e()])]),a("div",{staticClass:"cover-btn"},[a("el-upload",{ref:"upload",attrs:{action:"/admin/upload/image",accept:".jpg,.jpeg,.png","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[a("el-button",{attrs:{type:"primary",plain:""}},[t._v("上传封面")])],1),a("el-button",{staticClass:"cover-default",on:{click:function(e){t.docData.cover=""}}},[t._v("默认封面")])],1)],1),a("div",{staticClass:"el-upload__tip"},[t._v("格式要求：支持jpg、jpeg、png格式，图片小于5M，最佳图片比例2:1。")])]),a("el-form-item",{attrs:{label:"项目名称",prop:"name"}},[a("el-input",{model:{value:t.docData.name,callback:function(e){t.$set(t.docData,"name",e)},expression:"docData.name"}})],1),a("el-form-item",{attrs:{label:"公开性质"}},[a("el-select",{model:{value:t.docData.is_public,callback:function(e){t.$set(t.docData,"is_public",e)},expression:"docData.is_public"}},[a("el-option",{attrs:{label:"公开项目",value:"1"}}),a("el-option",{attrs:{label:"私有项目",value:"2"}})],1)],1),1!=t.docData.is_public?a("el-form-item",{attrs:{label:"查看权限"}},[a("el-select",{model:{value:t.docData.login_preview,callback:function(e){t.$set(t.docData,"login_preview",e)},expression:"docData.login_preview"}},[a("el-option",{attrs:{label:"仅限有权限者查看",value:"2"}}),a("el-option",{attrs:{label:"点击链接登录后查看",value:"3"}})],1)],1):t._e()],1),a("div",{staticClass:"btns"},[a("el-button",{attrs:{type:"primary"},on:{click:t.saveDoc}},[t._v("保存")]),a("el-button",{on:{click:t.delDoc}},[t._v("删除")])],1)],1):t._e(),1==t.active?a("div",{staticClass:"manage"},[a("div",{staticClass:"top"},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:t.openAddManage}},[t._v("添加权限")])],1),a("el-table",{key:"manageTable",staticClass:"w7-table",attrs:{"max-height":"370",data:t.details.operator,"header-cell-style":{background:"#f7f9fc",color:"#606266"}}},[a("el-table-column",{attrs:{prop:"username",label:"名称",width:"300px"}}),a("el-table-column",{attrs:{label:"身份",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.shwoEditRole&&t.selectUserId==e.row.id?a("el-select",{staticClass:"edit-role-change",on:{change:t.editRole},model:{value:t.selectUserRole,callback:function(e){t.selectUserRole=e},expression:"selectUserRole"}},t._l(t.role_list,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1):[1==e.row.acl.role?a("div",{staticClass:"identity"},[t._v(t._s(e.row.acl.name))]):[t._v(t._s(e.row.acl.name))]]]}}],null,!1,505741635)}),a("el-table-column",{attrs:{label:"操作",align:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{staticClass:"oper"},[2==t.details.is_public?a("el-tooltip",{attrs:{effect:"dark",content:"编辑",placement:"bottom"}},[t.details.acl.has_manage&&1!=e.row.acl.role?a("i",{staticClass:"wi wi-edit",on:{click:function(a){return a.stopPropagation(),t.editManage(e.row)}}}):t._e()]):t._e(),a("el-tooltip",{attrs:{effect:"dark",content:"删除",placement:"bottom"}},[t.details.acl.has_manage&&1!=e.row.acl.role?a("i",{staticClass:"wi wi-delete",on:{click:function(a){return t.removeManage(e.row.id)}}}):t._e()])],1)}}],null,!1,519701077)})],1)],1):t._e(),2==t.active?a("div",{staticClass:"history"},[a("el-table",{key:"historyTable",ref:"historyTableRef",staticClass:"w7-table",attrs:{data:t.historyList,"max-height":"370"}},[a("el-table-column",{attrs:{prop:"remark",label:"描述"}}),a("el-table-column",{attrs:{prop:"time",label:"时间",align:"right"}})],1),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next, total","prev-text":"上一页","next-text":"下一页","page-size":5,"current-page":t.currentPageHistory,"page-count":t.pageCountHistory,"hide-on-single-page":!0},on:{"current-change":t.getHistory,"update:currentPage":function(e){t.currentPageHistory=e},"update:current-page":function(e){t.currentPageHistory=e}}})],1):t._e()])]),t.showAddManage?a("div",{staticClass:"add-manage-header"},[a("el-link",{attrs:{underline:!1},on:{click:function(e){t.showAddManage=!1}}},[a("i",{staticClass:"el-icon-arrow-left"}),t._v("添加权限")]),a("el-link",{attrs:{underline:!1},on:{click:function(e){t.showAddManage=!1}}},[a("i",{staticClass:"el-icon-close"})])],1):t._e(),t.showAddManage?a("div",{staticClass:"add-manage-body"},[a("el-form",{key:"addManage",ref:"addManageForm",staticClass:"w7-form__no-required-icon",attrs:{model:t.addManageData,rules:t.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"用户名",prop:"username"}},[a("el-select",{attrs:{filterable:"",remote:"","reserve-keyword":"",placeholder:"请输入用户名","remote-method":t.remoteMethod,loading:t.loading},model:{value:t.addManageData.username,callback:function(e){t.$set(t.addManageData,"username",e)},expression:"addManageData.username"}},t._l(t.userOptions,(function(t){return a("el-option",{key:t.username,attrs:{label:t.username,value:t.username}})})),1)],1),a("el-form-item",{attrs:{label:"权限设置"}},[a("el-select",{model:{value:t.addManageData.role,callback:function(e){t.$set(t.addManageData,"role",e)},expression:"addManageData.role"}},t._l(t.role_list,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1)],1),a("div",{staticClass:"add-manage-footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.addManage}},[t._v("确 定")]),a("el-button",{on:{click:function(e){t.showAddManage=!1}}},[t._v("取 消")])],1)],1):t._e(),a("div",{staticClass:"reset-element"},[a("el-dialog",{staticClass:"delete-doc",attrs:{title:"删除文档",visible:t.deleteDocVisible,width:"570px",center:"",modal:!1,"modal-append-to-body":!1},on:{"update:visible":function(e){t.deleteDocVisible=e}}},[a("el-form",{staticStyle:{padding:"0 30px 20px"},attrs:{model:t.deleteDocForm}},[a("el-form-item",{attrs:{label:"文档名称：","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.deleteDocForm.name,callback:function(e){t.$set(t.deleteDocForm,"name",e)},expression:"deleteDocForm.name"}}),a("div",{staticClass:"el-form-item__error",staticStyle:{"margin-top":"5px"}},[t._v("删除文档须谨慎操作，一旦删除将无法恢复！")])],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.deleteDocVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.defineDeleteDoc}},[t._v("确 定")])],1)],1)],1)])},o=[],i=a("79ac"),r=i["a"],s=(a("6b3d"),a("0454"),a("2877")),c=Object(s["a"])(r,n,o,!1,null,"78e44758",null);e["a"]=c.exports},"4ec3":function(t,e,a){"use strict";a.d(e,"d",(function(){return o})),a.d(e,"c",(function(){return i})),a.d(e,"i",(function(){return r})),a.d(e,"q",(function(){return s})),a.d(e,"w",(function(){return c})),a.d(e,"g",(function(){return l})),a.d(e,"f",(function(){return d})),a.d(e,"o",(function(){return u})),a.d(e,"p",(function(){return p})),a.d(e,"r",(function(){return m})),a.d(e,"m",(function(){return f})),a.d(e,"n",(function(){return h})),a.d(e,"k",(function(){return g})),a.d(e,"j",(function(){return b})),a.d(e,"h",(function(){return v})),a.d(e,"e",(function(){return _})),a.d(e,"s",(function(){return y})),a.d(e,"b",(function(){return w})),a.d(e,"a",(function(){return D})),a.d(e,"t",(function(){return C})),a.d(e,"u",(function(){return k})),a.d(e,"v",(function(){return j})),a.d(e,"l",(function(){return M}));var n=a("1c1e"),o=function(t){return Object(n["a"])({url:"/admin/document/create",data:t,method:"post"})},i=function(t){return Object(n["a"])({url:"/admin/chapter/create",data:t,method:"post"})},r=function(t){return Object(n["a"])({url:"/admin/document/chapterapi/getApiLabel",data:t,method:"get"})},s=function(t){return Object(n["a"])({url:"/admin/chapter/save",data:t,method:"post"})},c=function(t){return Object(n["a"])({url:"/admin/chapter/content",data:t,method:"post"})},l=function(t){return Object(n["a"])({url:"/admin/document/all",data:t,method:"post"})},d=function(t){return Object(n["a"])({url:"/admin/chapter/detail",data:t,method:"post"})},u=function(t){return Object(n["a"])({url:"/common/auth/getlogouturl",data:t,method:"get"})},p=function(t){return Object(n["a"])({url:"/document/chapter/record",data:t,method:"post"})},m=function(t){return Object(n["a"])({url:"/install/systemDetection",data:t,method:"post"})},f=function(t){return Object(n["a"])({url:"/install/install",data:t,method:"post"})},h=function(t){return Object(n["a"])({url:"/install/config",data:t,method:"post"})},g=function(t){return Object(n["a"])({url:"/admin/user/all",data:t,method:"post"})},b=function(t){return Object(n["a"])({url:"/document/chapter/search",data:t,method:"post"})},v=function(t){return Object(n["a"])({url:"/document/detail",data:t,method:"post"})},_=function(t){return Object(n["a"])({url:"/admin/document/delete",data:t,method:"post"})},y=function(t){return Object(n["a"])({url:"/common/auth/third-party-login-bind",data:t,method:"post"})},w=function(t){return Object(n["a"])({url:"/common/auth/changeThirdPartyUser",data:t,method:"post"})},D=function(t){return Object(n["a"])({url:"/common/auth/bindThirdPartyUser",data:t,method:"post"})},C=function(t){return Object(n["a"])({url:"/common/auth/ThirdPartyUserCacheIn",data:t,method:"post"})},k=function(t){return Object(n["a"])({url:"https://api.w7.cc/oauth/authorize/try-sync-login",data:t,method:"post"})},j=function(t){return Object(n["a"])({url:"/common/auth/unbind",data:t,method:"post"})},M=function(t){return Object(n["a"])({url:"/admin/chapter/import ",data:t,method:"post"})}},"5dbc":function(t,e,a){var n=a("d3f4"),o=a("8b97").set;t.exports=function(t,e,a){var i,r=e.constructor;return r!==a&&"function"==typeof r&&(i=r.prototype)!==a.prototype&&n(i)&&o&&o(t,i),t}},"6b3d":function(t,e,a){"use strict";var n=a("ac8c"),o=a.n(n);o.a},"79ac":function(t,e,a){"use strict";(function(t){a("6b54"),a("7f7f");var n=a("4ec3");e["a"]={name:"setting",props:["id"],data:function(){return{active:0,details:"",docData:{cover:"",name:"",is_public:"1",login_preview:"2",is_public_Copy:""},rules:{name:[{required:!0,message:"请输入项目名称",trigger:"change"}],username:[{required:!0,message:"请输入用户名",trigger:"change"}]},addManageData:{},role_list:[],showAddManage:!1,shwoEditRole:!1,selectUserId:"",selectUserRole:"",historyList:[],currentPageHistory:1,pageCountHistory:0,totalHistory:0,userOptions:[],loading:!1,deleteDocVisible:!1,formLabelWidth:"120px",deleteDocForm:{name:"",document_id:""}}},watch:{id:function(t,e){this.active=0,this.getdetails()}},created:function(){this.getdetails()},mounted:function(){var e=this;t(document).on("click",(function(){e.shwoEditRole=!1}))},methods:{onClickNav:function(t){2==t&&this.getHistory(),this.active=t},getdetails:function(){var t=this;this.$post("/admin/document/detail",{document_id:this.id}).then((function(e){t.details=e.data;var a="",n="";1==e.data.is_public?(n=2,a=1):(e.data.is_public,n=e.data.is_public,a=2),t.docData={cover:e.data.cover||"",name:e.data.name,is_public:a,login_preview:n,is_public_Copy:e.data.is_public},t.docData.is_public=t.docData.is_public.toString(),t.docData.login_preview=t.docData.login_preview.toString(),t.role_list=e.data.role_list,t.addManageData.role=e.data.role_list[0].id,t.deleteDocForm.document_id=t.details.id}))},getHistory:function(){var t=this;this.$post("/admin/operate-log/get-by-document ",{document_id:this.id,page:this.currentPageHistory}).then((function(e){t.historyList=e.data.data||[],t.pageCountHistory=e.data.page_count,t.totalHistory=e.data.total,t.$refs.historyTableRef.bodyWrapper.scrollTop=0}))},handleAvatarSuccess:function(t){200===t.code?this.docData.cover=t.data.url:this.$message.error(t.message)},beforeAvatarUpload:function(t){var e="image/jpg"===t.type||"image/jpeg"===t.type||"image/png"===t.type,a=t.size/1024/1024<5;return e||this.$message.error("上传图片只支持jpg、jpeg、png格式!"),a||this.$message.error("上传图片大小不能超过 5MB!"),e&&a},saveDoc:function(){var t=this,e=this.docData.cover,a=this.docData.name,n=this.docData.login_preview,o=this.docData.is_public;o=1==o?1:2==n?2:3,this.$refs["docForm"].validate((function(n){n&&t.$post("/admin/document/update",{document_id:t.details.id,cover:e,name:a,is_public:o}).then((function(){t.getdetails(),t.$message({type:"success",message:"保存成功!"})}))}))},delDoc:function(){this.deleteDocVisible=!0},editManage:function(t){this.selectUserId=t.id,this.selectUserRole=t.acl.role,this.shwoEditRole=!0},editRole:function(){var t=this;this.$post("/admin/document/operator",{user_id:this.selectUserId,document_id:this.id,permission:this.selectUserRole}).then((function(){t.getdetails(),t.shwoEditRole=!1}))},removeManage:function(t){var e=this;this.$confirm("确定删除该操作员吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$post("/admin/document/operator",{user_id:t,document_id:e.id}).then((function(){e.getdetails(),e.$message("删除成功！")}))}))},openAddManage:function(){this.addManageData={username:"",role:this.role_list[0].id||""},this.showAddManage=!0},addManage:function(){var t=this,e=!0;for(var a in this.details.operator)if(this.details.operator[a].username==this.addManageData.username)return this.$message("用户已存在"),void(e=!1);e&&this.$refs["addManageForm"].validate((function(e){e&&t.$post("/admin/document/operator",{user_name:t.addManageData.username,document_id:t.id,permission:t.addManageData.role}).then((function(){t.getdetails(),t.$message("添加成功！"),t.showAddManage=!1}))}))},uploadCover:function(){this.$refs.upload.uploadFiles()},remoteMethod:function(t){var e=this;""!==t?(this.loading=!0,Object(n["k"])({no_self:1,name:t}).then((function(t){e.loading=!1,e.userOptions=t.data})).catch((function(t){e.loading=!1}))):this.userOptions=[]},defineDeleteDoc:function(){var t=this;Object(n["e"])(this.deleteDocForm).then((function(){t.$parent.handleClose(),t.deleteDocVisible=!1,t.deleteDocForm.name="",t.$message({type:"success",message:"删除成功!"}),t.$router.push("/admin/document/")}))}}}}).call(this,a("1157"))},"8b97":function(t,e,a){var n=a("d3f4"),o=a("cb7c"),i=function(t,e){if(o(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,a){return i(t,a),e?t.__proto__=a:n(t,a),t}}({},!1):void 0),check:i}},ac8c:function(t,e,a){},fa9a:function(t,e,a){}}]);