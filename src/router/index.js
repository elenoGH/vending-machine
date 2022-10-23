import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'Home',
    component: () => import('./../views/Home.vue'),
    meta: {
      authorization: true,
    },
  },
  {
    path: '/welcome',
    name: 'TheWelcome',
    component: () => import('./../components/TheWelcome.vue'),
    meta: {
      authorization: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _from, next) => {
  //userStore.isCookieActive()
  //let usuario = userStore.getters.isLoggedIn
  //let authorization = to.matched.some((record) => record.meta.authorization)
  //if (authorization && !usuario) {
  //  next('login')
  //} else {
    next()
  //}
})

export default router
