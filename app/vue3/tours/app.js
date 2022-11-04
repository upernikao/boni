import mountApp from "BoniVue/app.js"

import componentIndex from "./apps/index.vue"
import componentShow from "./apps/show.vue"

mountApp([
    {
        path: "/",
        component: componentIndex
    },
    {
        path: "/:id",
        component: componentShow
    }
])