import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite'
import Order from '../pages/Order'
import Profile from '../pages/Profile'
import Search from '../pages/Search'
Vue.use(VueRouter)
export default new VueRouter({
    routes: [{
            path: '/msite',
            component: Msite
        },
        {
            path: '/order',
            component: Order
        },
        {
            path: '/profile',
            component: Profile
        },
        {
            path: '/search',
            component: Search
        },
        {
            path: '/',
            redirect: Msite

        }
    ]
})