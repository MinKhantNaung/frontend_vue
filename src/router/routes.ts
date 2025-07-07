import DefaultLayout from "../components/DefaultLayout.vue";
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import MyImages from "../pages/MyImages.vue";
import NotFound from "../pages/NotFound.vue";
import Signup from "../pages/Signup.vue";

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            { path: '/', name: 'Home', component: Home },
            { path: '/images', name: 'MyImages', component: MyImages }
        ],
        meta: {
            auth: true,
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            guest: true,
        },
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup,
        meta: {
            guest: true,
        },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
]

export default routes;