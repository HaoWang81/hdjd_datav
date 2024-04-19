import {createRouter, createWebHashHistory} from "vue-router";
import screen from "@/views/screen.vue";
import manage from "@/views/settings/manage.vue";

const routes = [
    {
        path: '/',
        name: 'screen',
        component: screen
    }, {
        path: '/settings/manage',
        name: 'manage',
        component: manage
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router