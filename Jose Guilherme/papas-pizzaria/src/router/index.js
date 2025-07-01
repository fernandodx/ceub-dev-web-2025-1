import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PedidosView from '@/views/PedidosView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/pedidos', name: 'pedidos', component: PedidosView },
  // Redirect para evitar 404 ao acessar rota inexistente
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})