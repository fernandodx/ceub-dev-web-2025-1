<template>
    <div>
        <h1>Pedido</h1>
        <lista-pedido-component/>
    </div>
    
    </template>
    
    <script>  
    
    
        import listaPedidoComponent from '@/components/listaPedidoComponent.vue';

        export default {
            name : "PedidosView",
            components: {
                listaPedidoComponent
            }
        }
    
    </script>
    
    <style scoped></style>