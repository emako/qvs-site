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
            meta:{title:'egosub'}
        },
        {
            name:'Home',
            path:'/home',
            component:Home,
            meta:{title:'egosub - Home'}
        },
        {
            name:'Videos',
            path:'/videos',
            component:Videos,
            meta:{title:'egosub - Videos'}
        },
        {
            name:'Screenshot',
            path:'/screenshot',
            component:Screenshot,
            meta:{title:'egosub - Screenshots'}
        },
        {
            name:'Download',
            path:'/download',
            component:Download,
            meta:{title:'egosub - Download'}
        },
        {
            name:'About',
            path:'/about',
            component:About,
            meta:{title:'egosub - About'}
        }
    ]
});

router.afterEach((to,from) =>{
    //set web page titles
    document.title = to.meta.title || 'egosub';

    //reset to top after go to the next page
    window.scrollTo(0,0);
});

export default router;