import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if ( to.hash ) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      }
    }
    return {
      x: 0,
      y: 0,
      behavior: 'smooth',
    }
  },
  routes: [
    {
      path: '/',
      name: 'About',
      component: () => import('../views/About.vue'),
    },
    {
      path: '/sign-up',
      name: 'Sign Up',
      component: () => import('../views/SignUp.vue'),
    },
    {
      path: '*',
      redirect: '/',
    }
  ],
})

export default router
