import { createWebHistory, createRouter } from 'vue-router'
import type { NavigationGuardNext } from 'vue-router'
import DefaultLayout from './components/DefaultLayout.vue'
import Login from './pages/Login.vue'
import Home from './pages/Home.vue'
import MyImages from './pages/MyImages.vue'
import Signup from './pages/Signup.vue'
import NotFound from './pages/NotFound.vue'
import { useUserStore } from './stores/user'

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            { path: '/', name: 'Home', component: Home },
            { path: '/images', name: 'MyImages', component: MyImages }
        ],
        beforeEnter: async (_to: any, _from: any, next: NavigationGuardNext) => {
            try {
                const userStore = useUserStore();
                await userStore.fetchUser();
                next();
            } catch (error) {
                // Cancel navigation if data fetching fails
                next(false); 
            }
        }
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
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router