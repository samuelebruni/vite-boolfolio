// 0
import { createRouter, createWebHashHistory } from 'vue-router';

// 1
import HomeView from "./views/HomeView.vue";
import AboutView from './views/AboutView.vue';
import ContactView from "./views/ContactView.vue";
import ProjectsView from "./views/ProjectsView.vue";
import SingleProjectView from "./views/SingleProjectView.vue";
// 2
const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/contact', component: ContactView },
    { path: '/projects', component: ProjectsView },
    {
        path: '/project/:slug',
        name: 'project',
        component: SingleProjectView,
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