import { createWebHistory, createRouter } from "vue-router";
import Login from '../views/auth/login.vue'
import Home from '../views/Home.vue'
import Bonus from '../views/bonus/index.vue'
import CreateBonus from '../views/bonus/create.vue'
import ViewDetail from '../views/bonus/show.vue'
import EditBonus from '../views/bonus/edit.vue'

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Home
    },
    {
        path: '/bonus',
        name: 'Bonus',
        component: Bonus
    },
    {
        path: '/create/bonus',
        name: 'CreateBonus',
        component: CreateBonus
    },
    {
        path: '/view/bonus/:id',
        name: 'ShowBonus',
        component: ViewDetail
    },
    {
        path: '/edit/bonus/:id',
        name: 'EditBonus',
        component: EditBonus
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router