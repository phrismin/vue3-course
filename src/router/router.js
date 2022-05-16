import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import PostPages from "@/pages/PostPages";
import About from "@/pages/About";
import PostIdPage from "@/components/PostIdPage";
import PostPageWithStore from "@/pages/PostPageWithStore";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPages
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
    {
        path: '/store',
        component: PostPageWithStore
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_IRL)
})

export default router