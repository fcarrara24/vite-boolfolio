import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';

import NotFound from './pages/NotFound.vue';



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    routes: [
        {
            path: "/",
            name: "home",
            component: AppHome,
        },
        {
            path: "/projects",
            name: "projects",
            component: () => import('./pages/AppProjects.vue')
        },
        {
            path: "/projects/:slug",
            name: "single-project",
            component: () => import('./pages/SingleProject.vue')
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: () => import('./pages/AppContact.vue')
        },
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: NotFound
        },


    ]
});

export default router;