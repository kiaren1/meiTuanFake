import { createRouter, createWebHashHistory } from 'vue-router';
import {showToast} from 'vant'
import home from '../views/home/shoppingHome.vue'
import order from '../views/order/shoppingOrder.vue'
import cart from '../views/cart/shoppingCart.vue'
import mine from '../views/mine/shoppingMine.vue'
import store from '../views/store/shoppingStore.vue'
import createOrder from '../views/createOrder/createOrder.vue'
import shoppingAddress from '../views/address/shoppingAddress.vue'
import addressEdit from '../views/addressEdit/addressEdit.vue'
import userInfo from '../views/userInfo/userInfo.vue'
import logIn from '../views/logIn/logIn.vue'
import registerPage from '../views/register/registerPage.vue'

//路由定义
const routes=[
{
    path:'/',
    component:home
},
{
    path:'/home',
    component:home
},
{
path:'/order',
component:order,
meta: {
    isAuth: true
  }
},
{
    path:'/cart',
    component:cart,
},
{
    path:'/mine',
    component:mine,
    meta: {
        isAuth: true
      }
},
{
    path:'/store',
    component:store
},
{
    path:'/createOrder',
    component:createOrder,
    meta: {
        isAuth: true
      }
},
{
    path:'/shoppingAddress',
    component:shoppingAddress
},
{
    path:'/addressEdit',
    component:addressEdit,
    meta: {
        isAuth: true
      }
},
{
    path:'/userInfo',
    component:userInfo,
    meta: {
        isAuth: true
      }
},
{
    path:'/logIn',
    component:logIn
},
{   path:'/registerPage',
    component:registerPage
}
]

// 注意要先创建和初始化router
const router =createRouter(
    {
    history:createWebHashHistory(),
    routes
},
);

//然后设置导航守卫
router.beforeEach((to,from,next)=>{
    if (to.meta.isAuth) {
        // 登录之后 会在localStorage里面 存储一个标识(有web浏览器提供)
        if (localStorage.isLogin === 'login') {
          next()
        } else {
          next('/login')
          showToast('请先登录')
        }
      } else {
        next()
      }
})
export default router;