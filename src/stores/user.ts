import { defineStore } from "pinia"
import axiosClient from "../axios"

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null as any
    }),
    actions: {
        fetchUser() {
            axiosClient.get('/api/user')
                .then(response => {
                    console.log(response)
                    this.user = response
                })
        }
    },
})