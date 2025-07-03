import { createRouter, createWebHistory } from "vue-router";
import MenuView from "@/views/MenuView.vue";
import PedidosView from "@/views/PedidosView.vue";
import configuracaoPedidoView from "@/views/ConfiguracaoPedidoView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MenuView,
  },
  {
    path: "/menu",
    name: "menu",
    component: MenuView,
  },
  {
    path: "/pedidos",
    name: "pedidos",
    component: PedidosView,
  },
  { 
    path: "/config-pedido",
    name: "config-pedido",
    component: configuracaoPedidoView
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
