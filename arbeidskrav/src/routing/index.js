import { createRouter, createWebHistory } from "vue-router";
import Hjem from '../views/Hjem'
import PL from '../views/PL'
import Lag from '../views/Lag'
import FunFact from '../views/FunFact'
import Bilder from '../views/Bilder'


const routes = [
    {
        name: "Hjem",
        path: "/",
        component: Hjem
    },

    {
        name: "PL",
        path: "/premier-league",
        component: PL
    },
    {
    
        name: "lag",
        path: "/lag",
        component: Lag
    },

    {
        name: "Funfact",
        path: "/fun-fact",
        component: FunFact
    },

    {
        name: "Bilder",
        path: "/bilder",
        component: Bilder
    },
];






const router = createRouter({
    history : createWebHistory(),
    routes
});

export default router;