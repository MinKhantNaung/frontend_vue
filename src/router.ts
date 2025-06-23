import { createWebHistory, createRouter } from 'vue-router'
import DefaultLayout from './components/DefaultLayout.vue'
import Login from './pages/Login.vue'
import Home from './pages/Home.vue'
import MyImages from './pages/MyImages.vue'
import Signup from './pages/Signup.vue'

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            { path: '/', name: 'Home', component: Home },
            { path: '/images', name: 'MyImages', component: MyImages }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router