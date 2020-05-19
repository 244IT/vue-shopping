import Vue from "vue"
import Router from 'vue-router'

Vue.use(Router);

const ShoppingMall = () => import("../components/pages/ShoppingMall.vue");

export default new Router({
  routes: [
    {
      path: '/',
      component: ShoppingMall
    }
  ],
  mode: "history"
})
