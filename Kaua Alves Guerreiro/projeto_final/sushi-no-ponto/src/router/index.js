import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PedidosView from '../views/PedidosView.vue'  // usando path relativo, sem alias

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/pedidos', name: 'pedidos', component: PedidosView }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router