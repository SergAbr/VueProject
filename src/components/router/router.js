import Main from '@/components/pages/Main';
import { createRouter, createWebHistory } from 'vue-router';
import PostPage from '@/components/pages/PostPage';
import About from '@/components/pages/About';
import PostIdPage from '@/components/pages/PostIdPage';
import PostPageWithStore from '@/components/pages/PostPageWithStore';
import PostPageCompositionApi from '@/components/pages/PostPageCompositionApi';
import Notes from '@/components/pages/Notes';

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/posts',
    component: PostPage,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/posts/:id',
    component: PostIdPage,
  },
  {
    path: '/store',
    component: PostPageWithStore,
  },
  {
    path: '/composition',
    component: PostPageCompositionApi,
  },
  {
    path: '/notes',
    component: Notes,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
