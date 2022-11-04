import { createApp } from "vue"
import { createPinia } from "pinia"
import { createRouter, createWebHashHistory } from "vue-router"

// - Import shared and global components


export default (routes) => {

    const router = createRouter({
        history: createWebHashHistory(),
        routes,
    })

    const app = createApp({
        mounted(){
            console.log("app mounted!!!");
        }
    })

    const pinia = createPinia()

    app.use(router)
    app.use(pinia)

    app.mount("#app")
}