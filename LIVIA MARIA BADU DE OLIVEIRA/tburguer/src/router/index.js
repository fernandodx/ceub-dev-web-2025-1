import { createRouter, createWebHistory } from "vue-router";
import MenuView from "@/views/MenuView.vue";
import PedidosView from "@/views/PedidosView.vue";
import ConfiguracaoPedidoView from "@/views/ConfiguracaoPedidoView.vue";

const routes = [
  {
    path: "/",
    name: "menu",
    component: MenuView,
  },
  {
    path: "/menu",
   name: "menu",
   component:MenuView,
  },
  {
       path: "/pedidos",
      name: "pedidos",
      component:PedidosView,
  },
   
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
