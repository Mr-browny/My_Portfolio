
const routes = [
  // {
  //   path: '/',
  //   component: () => import('layouts/PreLoaderLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/Index.vue') }
  //   ]
  // },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') },
      { path: 'home', component: () => import('pages/main/index.vue'), name: "home" },
      { path: 'about', component: () => import('pages/main/about.vue'), name: "about" },
      { path: 'contact', component: () => import('pages/main/contact.vue'), name: "contact" },
      { path: 'blog', component: () => import('pages/main/blog.vue'), name: "blog" },
      { path: 'vblog', component: () => import('pages/main/vblog.vue'), name: "vblog" },
      { path: 'portfolio', component: () => import('pages/main/portfolio.vue'), name: "portfolio" },
      { path: 'portfolio/:id', component: () => import('pages/main/_id/project.vue'), name: "project" },
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: "/", component: () => import('pages/Login.vue'), name: "login" },  
    ]
  },
  {
    path: '/setup',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: "/", component: () => import('pages/setup/index.vue'), name: "Admin" }, 
      { path: "dashboard", component: () => import('pages/setup/dashboard.vue'), name: "dashboard" }, 
      { path: "message", component: () => import('pages/setup/message.vue'), name: "message" }, 
      { path: "singleMessage/:messageId", component: () => import('pages/setup/id/singleMessage.vue'), name: "singleMessage" }, 
      { path: "portfolio", component: () => import('pages/setup/portfolio.vue'), name: "allPortfolio" }, 
      { path: "blog", component: () => import('pages/setup/blog.vue'), name: "adminBlog" }, 
      { path: "singleBlog/:blogId", component: () => import('pages/setup/id/singleBlog.vue'), name: "singleAdminBlog" }, 
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
