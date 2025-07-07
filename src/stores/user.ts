import { defineStore } from "pinia"
import axiosClient from "../axios"

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null as any
    }),
    getters: {
        isLoggedIn: (state) => !!state.user,
    },
    actions: {
        async fetchUser() {
            try {
                const response = await axiosClient.get('/api/user');
                this.user = response.data;
            } catch (error) {
                this.user = null;
            }
        }
    },
})