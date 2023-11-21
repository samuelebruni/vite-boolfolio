// 0
import { createRouter, createWebHashHistory } from 'vue-router';

// 1
import HomeView from "./views/HomeView.vue";
import AboutView from './views/AboutView.vue';
import ContactView from "./views/ContactView.vue";
import ProjectsView from "./views/ProjectsView.vue";
import SingleProjectView from "./views/SingleProjectView.vue";
import NotFoundView from './views/NotFoundView.vue';
// 2
const routes = [
    {
        path: '/',
        component: HomeView,
        name: 'home'
    },
    {
        path: '/about',
        component: AboutView,
        name: 'about'
    },
    {
        path: '/contact',
        component: ContactView,
        name: 'contact'
    },
    {
        path: '/projects',
        component: ProjectsView,
        name: 'projects'
    },
    {
        path: '/project/:slug',
        name: 'project',
        component: SingleProjectView,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFoundView
    },
];

// 3
const router = createRouter(
    {
        history: createWebHashHistory(),
        routes
    });

// export
export { router }