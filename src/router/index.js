import { createWebHistory, createRouter } from "vue-router";
import Login from '../views/auth/login.vue'
import Home from '../views/Home.vue'
import Dashboard from '../views/Home.vue'
import Bonus from '../views/bonus/index.vue'
import CreateBonus from '../views/bonus/create.vue'
import ViewDetail from '../views/bonus/show.vue'
import EditBonus from '../views/bonus/edit.vue'

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        meta: {Auth: true}
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/bonus',
        name: 'Bonus',
        component: Bonus,
        meta: {Auth: true}
    },
    {
        path: '/create/bonus',
        name: 'CreateBonus',
        component: CreateBonus,
        meta: {Auth: true}
    },
    {
        path: '/view/bonus/:id',
        name: 'ShowBonus',
        component: ViewDetail,
        meta: {Auth: true}
    },
    {
        path: '/edit/bonus/:id',
        name: 'EditBonus',
        component: EditBonus,
        meta: {Auth: true}
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.Auth)) {
        let isAuth = localStorage.getItem('token');
        if(!isAuth) {
            next({name: 'Login'})
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router