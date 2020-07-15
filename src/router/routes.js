
const routes = [
  {
    path: '/',
    component: () => import('layouts/PreLoaderLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', component: () => import('pages/main/index.vue'), name: "home" },
      { path: 'about', component: () => import('pages/main/about.vue'), name: "about" },
      { path: 'contact', component: () => import('pages/main/contact.vue'), name: "contact" },
      { path: 'blog', component: () => import('pages/main/blog.vue'), name: "blog" },
      { path: 'vblog', component: () => import('pages/main/vblog.vue'), name: "vblog" },
      { path: 'portfolio', component: () => import('pages/main/portfolio.vue'), name: "portfolio" },
      { path: 'portfolio/:id', component: () => import('pages/main/_id/project.vue'), name: "project" },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
