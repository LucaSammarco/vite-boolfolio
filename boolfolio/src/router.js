import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import AppBlog from './pages/AppBlog.vue';
import Project from './pages/Project.vue';
import SingleProject from './pages/SingleProject.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            name: 'home',
            component: AppHome
        },
        {
            path: '/blog',
            name: 'posts',
            component: AppBlog
        },
        {
            path: '/Project',
            name: 'project',
            component: Project
        },
        {
                path: '/project/:id',
                name: 'single-project',
                component: SingleProject,
               
         

        }
    ]
});

export { router };
