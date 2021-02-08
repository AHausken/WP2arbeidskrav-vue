import { createRouter, createWebHistory } from "vue-router";
import Hjem from '../views/Hjem'
import OmMeg from '../views/OmMeg'
import Tur from '../views/Tur'
import Fotball from '../views/Fotball'
import Reising from '../views/Reising'


const routes = [
    {
        name: "Hjem",
        path: "/",
        component: Hjem
    },

    {
        name: "OmMeg",
        path: "/om-meg",
        component: OmMeg
    },
    {
    
        name: "Tur",
        path: "/tur",
        component: Tur
    },

    {
        name: "Fotball",
        path: "/fotball",
        component: Fotball
    },

    {
        name: "Reising",
        path: "/reising",
        component: Reising
    },
];






const router = createRouter({
    history : createWebHistory(),
    routes
});

export default router;