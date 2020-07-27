import vueRouter from 'vue-router';
import setting from "@/components/setting";
import search from "@/components/search";
var router = new vueRouter({
   routes:[
       {path:'/',component: search},
       {path:'/setting',component:setting}
   ]

});
export default router;
