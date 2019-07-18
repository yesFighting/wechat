import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

 const myCard = () => import('@/views/myCard.vue');
const Money = () => import('@/views/money.vue');
const Order = () => import('@/views/order.vue');
const RushMoney = () => import('@/views/RushMoney.vue');
const HealthCurr = () => import('@/views/healthCurr.vue');
const Coupon = () => import('@/views/coupon.vue');
const PasswordEdit = () => import('@/views/passwordEdit.vue');
const Payment = () => import('@/views/payment.vue');
const Unbound = () => import('@/views/unbound.vue');
const ModifyIF = () => import('@/views/modifyIF.vue');
const Aboutus = () => import('@/views/aboutus.vue');
const StoreRecharge = () => import('@/views/storeRecharge.vue');
//const Home = () => import('@/views/home.vue');
//import myCard from '@/views/myCard.vue'
// import Money from '@/views/money.vue'
// import RushMoney from '@/views/RushMoney.vue'
// import HealthCurr from '@/views/healthCurr.vue'
// import Coupon from '@/views/coupon.vue'
//  import PasswordEdit from '@/views/passwordEdit.vue'
//  import Payment from '@/views/payment.vue'
//  import Unbound from '@/views/unbound.vue'
//  import ModifyIF from '@/views/modifyIF.vue'
//  import Aboutus from '@/views/aboutus.vue'
//  import Order from '@/views/order.vue'
//  import StoreRecharge from '@/views/storeRecharge.vue'

export default new Router({
    routes:[
        {
            path:'/',
            name:'myCard',
            //  redirect:'mycard',
            component:myCard,
            // children:[
            // //    { path:'/core', component:myCore,}
            // ]
        },
        {
            path:'/order',
            component:Order
        },
        // {
        //     path:'/home',
        //     component:Home
        // },
        {
            path:'/money',
            component:Money
        },
        {
            path:'/rushMoney',
            component:RushMoney
        },
        {
            path:'/healthCurr',
            component:HealthCurr
        },
        {
            path:'/coupon',
            component:Coupon
        },
        {
            path:'/passwordedit',
            component:PasswordEdit
        },
        {
            path:'/payment',
            component:Payment
        },
        {
            path:'/unbound',
            component:Unbound
        },
        {
            path:'/modifyIF',
            component:ModifyIF
        },
        {
            path:'/aboutus',
            component:Aboutus
           
        },
        {
            path:'/storeRecharge',
            component:StoreRecharge
        }

    ]
})