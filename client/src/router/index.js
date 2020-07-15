import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/tutorials/:tutorialName',
        name: 'Tutorial',
        // lazy loading
        component: () => import('../views/Tutorial.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        // lazy loading
        component: () => import('../views/Contact.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router