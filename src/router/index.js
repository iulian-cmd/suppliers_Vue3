import {
    createRouter,
    createWebHistory
} from "vue-router";

import SuppliersList from "../components/SuppliersList.vue"
import SuppliersMap from "../components/SuppliersMap.vue"
import Supplier from "../components/Supplier"
import Home from "../components/Home.vue"

const router = createRouter({
    routes: [{
            path: "/",
            component: Home
        },
        {
            path: "/SuppliersList",
            component: SuppliersList
        },
        {
            path: "/SuppliersMap",
            component: SuppliersMap
        },
        {
            path: "/supplier",
            component: Supplier
        },
        // {
        //     path: "/suppliers",
        //     component: Supplier
        // },
    ],
    history: createWebHistory()
})

export default router