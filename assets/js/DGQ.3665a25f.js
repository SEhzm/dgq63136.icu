import{E as U,e as z,r as F,f as B,v as G,l as s,d as S,n as N,o as I,p as J,b as A,m as O}from"./element-plus.8000f9e8.js";import{r as u}from"./request.30469306.js";import{_ as j}from"./index.821bfadd.js";import{r as L,_ as R,o as b,c as X,a as m,V as a,P as o,Q as $,O as H,T as c}from"./@vue.7a8f7aed.js";import"./lodash-es.2e98bc53.js";import"./@vueuse.65cb1fed.js";import"./@element-plus.b9e6ff10.js";import"./@popperjs.c75af06c.js";import"./@ctrl.f8748455.js";import"./dayjs.9b60f51a.js";import"./aplayer.9b49dac4.js";import"./async-validator.dee29e8b.js";import"./memoize-one.297ddbcb.js";import"./normalize-wheel-es.ed76fb12.js";import"./@floating-ui.c9ffdb72.js";import"./axios.28bc18a3.js";import"./vue-router.e9f6b670.js";import"./video.js.88a0551f.js";const K={class:"card"},M={class:"pagination-wrapper"},W={class:"dialog-footer"},Y={__name:"DGQ",setup(Z){const g=L(!0),f={table:[{required:!0,message:"请选择分栏",trigger:"blur"}],barrage:[{required:!0,message:"请输入弹幕",trigger:"blur"}]},e=R({tableData:[],total:0,pageSize:15,currentPage:1,dialogFormVisible:!1,table:"",barrage:""}),p=(r=1)=>{u.get("/dgq/DGQ/Page",{params:{pageNum:r,pageSize:e.pageSize}}).then(t=>{var l,n;e.tableData=((l=t.data)==null?void 0:l.list)||[],e.total=((n=t.data)==null?void 0:n.total)||0,g.value=!1}).catch(t=>{console.error("加载数据失败:",t)})};p(e.currentPage);const v=r=>{e.currentPage=r,p(r)},h=()=>{s({message:"复制成功",type:"success"})},y=()=>{s.error("复制失败，请更换浏览器或手动复制,请勿使用夸克浏览器")},V=r=>{const t=r.barrage;let l=document.createElement("input");l.value=t,document.body.appendChild(l),l.select();try{document.execCommand("Copy"),h(),console.log("内容已复制到剪贴板"),u.post("/dgq/addCnt",{PageNum:e.currentPage,table:"DGQ",id:r.id}).then(()=>{setTimeout(()=>p(e.currentPage),50)})}catch(n){console.error("复制失败:",n),y()}document.body.removeChild(l)},q=()=>{e.table="",e.barrage="",e.dialogFormVisible=!0},C=()=>{e.table===""||e.barrage===""?s.error("请选择分栏或输入弹幕"):u.post("/dgq/addUnaudit",{table:e.table,barrage:e.barrage}).then(r=>{p(),e.dialogFormVisible=!1,r.code==="200"?s.success("投稿成功，待审核(一天内)"):s.error("请求失败")})},E=()=>{e.table===""||e.barrage===""?s.error("请选择分栏或输入弹幕"):u.post("/dgq/addUnaudit",{table:e.table,barrage:e.barrage}).then(r=>{p(),e.barrage="",r.code==="200"?s.success("投稿成功，待审核(一天内)"):s.error("请求失败")})};return(r,t)=>{const l=U,n=S,x=z,D=F,i=N,Q=I,_=J,w=A,P=O,k=B,T=G;return b(),X("div",null,[m("div",K,[a(l,{type:"primary",class:"handleAdd",onClick:q},{default:o(()=>[c(" 投稿弹幕 ")]),_:1}),$((b(),H(x,{stripe:"",data:e.tableData,"empty-text":"我还没有加载完喔~~",class:"eldtable","header-cell-style":{color:"#ff0000",fontSize:"13px",whitespace:"normal !important"},"cell-style":{},onRowClick:V},{default:o(()=>[a(n,{width:"50",prop:"id",label:"序号"}),a(n,{prop:"barrage","min-width":"90",label:"弹幕"}),a(n,{label:"",align:"center",width:"85"},{default:o(()=>[a(l,{type:"primary",label:"操作"},{default:o(()=>[c("复制")]),_:1})]),_:1}),a(n,{prop:"cnt",label:"复制次数",width:"55"})]),_:1},8,["data"])),[[T,g.value]])]),m("div",M,[m("div",null,[a(D,{background:"",layout:"prev, pager, next, jumper",total:e.total,"pager-count":4,"page-size":e.pageSize,onCurrentChange:v},null,8,["total","page-size"])])]),a(k,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":t[3]||(t[3]=d=>e.dialogFormVisible=d),draggable:"",title:"投稿弹幕",width:"82%"},{footer:o(()=>[m("div",W,[a(l,{onClick:t[2]||(t[2]=d=>e.dialogFormVisible=!1)},{default:o(()=>[c("关闭")]),_:1}),a(l,{type:"primary",onClick:C},{default:o(()=>[c(" 投稿并关闭 ")]),_:1}),a(l,{type:"primary",onClick:E},{default:o(()=>[c(" 连续投稿 ")]),_:1})])]),default:o(()=>[a(P,{model:e,"label-width":"100px",rules:f,"label-position":"right"},{default:o(()=>[a(_,{label:"分栏","label-width":100,prop:"table"},{default:o(()=>[a(Q,{modelValue:e.table,"onUpdate:modelValue":t[0]||(t[0]=d=>e.table=d),placeholder:"选择上传的分栏"},{default:o(()=>[a(i,{label:"2022年警钟长鸣",value:"dgq_J2022"}),a(i,{label:"2023年警钟长鸣",value:"dgq_J2023"}),a(i,{label:"2024年警钟长鸣",value:"dgq_J2024"}),a(i,{label:"+1",value:"dgq_p1"}),a(i,{label:"🐘超哥🐘",value:"dgq_ruibin"}),a(i,{label:"小团体",value:"dgq_XTT"}),a(i,{label:"DGQ",value:"dgq_DGQ"}),a(i,{label:"白字",value:"dgq_baizi"}),a(i,{label:"QUQU",value:"dgq_QUQU"})]),_:1},8,["modelValue"])]),_:1}),a(_,{label:"弹幕内容",prop:"barrage"},{default:o(()=>[a(w,{modelValue:e.barrage,"onUpdate:modelValue":t[1]||(t[1]=d=>e.barrage=d),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}},ve=j(Y,[["__scopeId","data-v-26b2e139"]]);export{ve as default};
