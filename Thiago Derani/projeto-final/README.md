# Pizzaria Artesanal - Sistema de Pedidos

Sistema de pedidos de pizza desenvolvido com Vue.js e JSON Server.

## ✅ Funcionalidades Implementadas

### Componente de Mensagens 
- Componente reutilizável `MensagemComponent.vue` para exibir mensagens de alerta e sucesso
- Utiliza `v-show` para exibir mensagens no momento certo
- Suporte a fechamento automático e manual
- Animações suaves de entrada

### Validação de Campos Obrigatórios 
- Validação no formulário de pedido para campos nome e tipo de massa
- Mensagens de erro específicas para cada campo
- Prevenção de envio com campos vazios

### Mensagem de Sucesso ao Confirmar Pedido 
- Exibição de mensagem de sucesso após criação bem-sucedida do pedido
- Limpeza automática do formulário após sucesso

### Esconder Tabela quando não há Pedidos 
- Tabela de pedidos só é exibida quando há pedidos cadastrados
- Mensagem amigável quando não há pedidos

### Mensagens em Ações 
- Mensagens de sucesso ao atualizar status do pedido
- Mensagens de sucesso ao deletar pedido
- Recarregamento automático da lista após ações

### Troca Completa do Tema para Pizzaria 
- Alteração completa do tema de hambúrguer para pizzaria
- Atualização de todos os textos e labels da interface
- Novo banco de dados com pizzas, tipos de massa e acompanhamentos
- Imagens atualizadas para o tema de pizzaria

## 🍕 Tema de Pizzaria

### Tipos de Massa
- Fina e crocante
- Tradicional
- Grossa e macia
- Sem borda

### Pizzas Disponíveis
- Margherita
- Pepperoni
- Quatro Queijos
- Calabresa
- Frango com Catupiry
- Portuguesa
- Vegetariana
- Pizza Especial da Casa

### Acompanhamentos
- Batata frita crocante
- Pão de alho
- Combo Bebida + Batata

### Bebidas
- Coca Cola Lata 350ml
- Suco Natural Laranja 300ml
- Água com Gás 500ml
- Refrigerante Guaraná 350ml

## 🚀 Como Executar

1. Instalar dependências:
```bash
npm install
```

2. Iniciar o JSON Server:
```bash
npm run bancojson
```

3. Iniciar o servidor de desenvolvimento:
```bash
npm run serve
```

