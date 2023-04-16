
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
        name: 'Home',
        meta: { title: 'Home Page' }
      },
      {
        path: '/placeholder',
        component: () => import('pages/PlaceholderPage.vue'),
        name: 'bientot',
        meta: { title: 'Bientôt' }
      },
      {
        path: '/options',
        component: () => import('pages/OptionsPage.vue'),
        name: 'Options',
        meta: { title: 'Options' }
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
