import { createWebHistory, createRouter } from 'vue-router'
import routes from './routes';
import { useUserStore } from '../stores/user';

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(async (to, _from) => {
    const userStore = useUserStore();
    await userStore.fetchUser();

    if (to.meta.auth && !userStore.isLoggedIn) {
        return {
            name: "Login",
            query: {
                redirect: to.fullPath,
            },
        };
    } else if (to.meta.guest && userStore.isLoggedIn) {
        return {
            name: "Home",
        };
    }
});

export default router