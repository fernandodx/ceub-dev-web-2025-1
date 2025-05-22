import { createRouter, createWebHistory } from "vue-router";
import MenuViewVue from "@/views/MenuView.vue";
import PedidosViewVue from "@/views/PedidosView.vue";
import ConfiguracaoPedidoViewVue from "@/views/ConfiguracaoPedidoView.vue";


const routes = [

  const routes = [
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
  {
    path: "/menu",
    name: "menu",
    component: MenuView,
  },
  const routes = [
    {
      path: "/pedidos",
      name: "pedidos",
      component: PedidosView,
    },
  
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
