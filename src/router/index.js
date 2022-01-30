import VueRouter from "vue-router";

import Home from '@/pages/Home';
import Videos from "@/pages/Videos";
import Screenshot from "@/pages/Screenshot";
import Download from "@/pages/Download";
import About from "@/pages/About";

const router = new VueRouter({
    mode:'hash',
    routes:[
        {
            path:'/',
            redirect:'/home',
            meta:{title:'Egosub'}
        },
        {
            name:'Home',
            path:'/home',
            component:Home,
            meta:{title:'Egosub - Home'}
        },
        {
            name:'Videos',
            path:'/videos',
            component:Videos,
            meta:{title:'Egosub - Videos'}
        },
        {
            name:'Screenshot',
            path:'/screenshot',
            component:Screenshot,
            meta:{title:'Egosub - Screenshot'}
        },
        {
            name:'Download',
            path:'/download',
            component:Download,
            meta:{title:'Egosub - Download'}
        },
        {
            name:'About',
            path:'/about',
            component:About,
            meta:{title:'Egosub - About'}
        }
    ]
});

//set web page title
router.afterEach((to,from) =>{
    document.title = to.meta.title || 'router test';
});

export default router;