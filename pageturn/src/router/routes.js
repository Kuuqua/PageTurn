const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Home/Index.vue') }],
  },
  // Other routes go here
]

export default routes

