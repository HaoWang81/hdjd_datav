import {createRouter, createWebHashHistory} from "vue-router";
import tie_details_mb from "@/views/screen/tie_details_mb.vue";
import tie_details from "@/views/screen/tie_details.vue";
import lv_monitor from "@/views/screen/lv_monitor.vue";
import tie_monitor from "@/views/screen/tie_monitor.vue";
import lv_details from "@/views/screen/lv_details.vue";
import setting_manage from "@/views/settings/manage.vue";
import home from "@/views/home.vue";
import datav from '@/views/datav.vue'

const routes = [
    {
        path: '/',
        name: '/',
        component: datav,
    },
    {
        path: '/screen',
        name: 'tie',
        component: tie_details
    },
    {
        path: '/screen/lv_monitor',
        name: 'lv_monitor',
        component: lv_monitor
    },
    {
        path: '/screen/tie_monitor',
        name: 'tie_monitor',
        component: tie_monitor
    },
    {
        path: '/datav',
        name: 'datav',
        component: datav,
        children: [
            {
                path: '/home',
                name: 'home',
                component: home,
            },
            {
                path: '/screen/lv',
                name: 'screen_lv',
                component: lv_details
            },
            {
                path: '/screen/tie',
                name: 'screen_tie',
                component: tie_details
            }, {
                path: '/screen/tie_mb',
                name: 'screen_tie_mb',
                component: tie_details_mb
            },
            {
                path: '/settings/manage',
                name: 'setting_manage',
                component: setting_manage
            }
        ]
    },


]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router