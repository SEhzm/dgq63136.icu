import{E as S,e as Q,r as N,f as A,v as I,l as s,d as J,q as j,n as G,o as M,p as O,b as L,m as R}from"./element-plus.8000f9e8.js";import{r as u}from"./request.30469306.js";import{_ as X}from"./index.821bfadd.js";import{r as $,_ as H,j as K,o as _,c as W,a as m,V as a,P as o,Q as Y,O as Z,T as c}from"./@vue.7a8f7aed.js";import"./lodash-es.2e98bc53.js";import"./@vueuse.65cb1fed.js";import"./@element-plus.b9e6ff10.js";import"./@popperjs.c75af06c.js";import"./@ctrl.f8748455.js";import"./dayjs.9b60f51a.js";import"./aplayer.9b49dac4.js";import"./async-validator.dee29e8b.js";import"./memoize-one.297ddbcb.js";import"./normalize-wheel-es.ed76fb12.js";import"./@floating-ui.c9ffdb72.js";import"./axios.28bc18a3.js";import"./vue-router.e9f6b670.js";import"./video.js.88a0551f.js";const ee={class:"card"},ae={class:"pagination-wrapper"},te={class:"dialog-footer"},le={__name:"AllBarrage",setup(oe){const g=$(!0),f={table:[{required:!0,message:"请选择分栏",trigger:"blur"}],barrage:[{required:!0,message:"请输入弹幕",trigger:"blur"}]},e=H({tableData:[],total:0,displayedData:[],pageSize:200,currentPage:1,dialogFormVisible:!1,table:"",barrage:"",ip:"",loadingMore:!1}),i=(t=1)=>{u.get("/dgq/allBarrage/Page",{params:{status:0}}).then(l=>{e.tableData=l.data||[],e.total=e.tableData.length,e.displayedData=e.tableData.slice(0,e.pageSize),g.value=!1}).catch(l=>{console.error("加载数据失败:",l)})};i(e.currentPage);const v=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})};K(()=>{window.onscroll=function(){(document.documentElement.scrollTop||document.body.scrollTop)>=900?totop.value.style.display="block":totop.value.style.display="none"}}),i(e.currentPage);const h=t=>{y(t),v()},y=t=>{e.tableData.length>0&&(e.displayedData=[],e.displayedData=e.tableData.slice(0+(t-1)*e.pageSize,t*e.pageSize))},V=()=>{i(),s({message:"复制成功",type:"success"})},q=()=>{s.error("复制失败，请更换浏览器或手动复制,请勿使用夸克浏览器")},C=t=>{const l=t.barrage;let r=document.createElement("input");r.value=l,document.body.appendChild(r),r.select();try{document.execCommand("Copy"),V(),console.log("内容已复制到剪贴板"),u.post("/dgq/addCnt",{PageNum:e.currentPage,table:"allbarrage",id:t.id}).then(()=>{setTimeout(()=>i(e.currentPage),50)})}catch(d){console.error("复制失败:",d),q()}document.body.removeChild(r)},E=()=>{e.table="",e.barrage="",e.dialogFormVisible=!0},w=()=>{e.table===""||e.barrage===""?s.error("请选择分栏或输入弹幕"):u.post("/dgq/addUnaudit",{table:e.table,barrage:e.barrage}).then(t=>{i(),e.dialogFormVisible=!1,t.code==="200"?s.success("投稿成功，待审核(一天内)"):s.error("请求失败")})},D=()=>{e.table===""||e.barrage===""?s.error("请选择分栏或输入弹幕"):u.post("/dgq/addUnaudit",{table:e.table,barrage:e.barrage}).then(t=>{i(),e.barrage="",t.code==="200"?s.success("投稿成功，待审核(一天内)"):s.error("请求失败")})};return(t,l)=>{const r=S,d=J,T=Q,x=N,k=j,n=G,B=M,b=O,P=L,z=R,U=A,F=I;return _(),W("div",null,[m("div",ee,[a(r,{type:"primary",class:"handleAdd",onClick:E},{default:o(()=>[c(" 投稿弹幕 ")]),_:1}),Y((_(),Z(T,{stripe:"",data:e.displayedData,"empty-text":"我还没有加载完喔~~",class:"eldtable","header-cell-style":{color:"#ff0000",fontSize:"13px",whitespace:"normal !important"},"cell-style":{},onRowClick:C},{default:o(()=>[a(d,{width:"50",prop:"id",label:"序号"}),a(d,{prop:"barrage","min-width":"90",label:"弹幕"}),a(d,{label:"",align:"center",width:"85"},{default:o(()=>[a(r,{type:"primary",label:"操作"},{default:o(()=>[c("复制")]),_:1})]),_:1}),a(d,{prop:"cnt",label:"复制次数",width:"55"})]),_:1},8,["data"])),[[F,g.value]])]),m("div",ae,[m("div",null,[a(x,{background:"",layout:"prev, pager, next, jumper",total:e.total,"pager-count":4,"page-size":e.pageSize,onCurrentChange:h},null,8,["total","page-size"])])]),a(k,{right:50,bottom:50}),a(U,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":l[3]||(l[3]=p=>e.dialogFormVisible=p),draggable:"",title:"投稿弹幕",width:"82%"},{footer:o(()=>[m("div",te,[a(r,{onClick:l[2]||(l[2]=p=>e.dialogFormVisible=!1)},{default:o(()=>[c("关闭")]),_:1}),a(r,{type:"primary",onClick:w},{default:o(()=>[c(" 投稿并关闭 ")]),_:1}),a(r,{type:"primary",onClick:D},{default:o(()=>[c(" 连续投稿 ")]),_:1})])]),default:o(()=>[a(z,{model:e,"label-width":"100px",rules:f,"label-position":"right"},{default:o(()=>[a(b,{label:"分栏","label-width":100,prop:"table"},{default:o(()=>[a(B,{modelValue:e.table,"onUpdate:modelValue":l[0]||(l[0]=p=>e.table=p),placeholder:"选择上传的分栏"},{default:o(()=>[a(n,{label:"2022年警钟长鸣",value:"dgq_J2022"}),a(n,{label:"2023年警钟长鸣",value:"dgq_J2023"}),a(n,{label:"2024年警钟长鸣",value:"dgq_J2024"}),a(n,{label:"+1",value:"dgq_p1"}),a(n,{label:"🐘超哥🐘",value:"dgq_ruibin"}),a(n,{label:"小团体",value:"dgq_XTT"}),a(n,{label:"DGQ",value:"dgq_DGQ"}),a(n,{label:"白字",value:"dgq_baizi"}),a(n,{label:"QUQU",value:"dgq_QUQU"})]),_:1},8,["modelValue"])]),_:1}),a(b,{label:"弹幕内容",prop:"barrage"},{default:o(()=>[a(P,{modelValue:e.barrage,"onUpdate:modelValue":l[1]||(l[1]=p=>e.barrage=p),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}},Ce=X(le,[["__scopeId","data-v-778e5428"]]);export{Ce as default};
