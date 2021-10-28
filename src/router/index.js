// import deux methodes pour que le code peut marcher
import {
    createRouter,
    createWebHistory
} from "vue-router";

// chemins vers les composants (.vue)
import SuppliersList from "../components/SuppliersList";
import SuppliersMap from "../components/SuppliersMap";
import Supplier from "../components/Supplier";
import Home from "../components/Home";

const router = createRouter({
    routes: [{
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
        {
            path: "/",
            component: Home
        },


    ],

    history: createWebHistory()
})
// le router est pret pour etre utilisé
export default router