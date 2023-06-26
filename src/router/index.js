import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        redirect: "/login",
        component: () => import('@/views/layouts/Authlayout.vue'),
        children: [
            {
                path: "/login",
                name: "login",
                component: () => import('@/views/auth/Login.vue'),
            },
        ]
    },

    {
        path: "/dashboard",
        redirect: "/home",
        component: () => import('@/views/layouts/layout.vue'),
        children: [
            {
                path: "/home",
                name: "home",
                component: () => import('@/views/home/Home.vue'),
            },
            {
                path: "/404",
                name: "page404",
                component: () => import('@/views/404/Page404.vue'),
            },
        ]
    },
    {
        path: "/nothing",
        redirect: "/404",
        children: [
            {
                path: "/404",
                name: "page404",
                component: () => import('@/views/404/Page404.vue'),
            },
        ]
    },
];          

const router = createRouter({
    history: createWebHistory(),
    routes,
});



export default router;