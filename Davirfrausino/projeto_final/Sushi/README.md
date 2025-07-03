# 🍣 Sushi Order - Projeto Final Vue.js

Este é o projeto final da disciplina de Desenvolvimento Web do CEUB (2025/1), baseado no repositório original do professor (hambúrguer), **adaptado para o tema de sushi**, com foco total nos critérios para atingir o conceito **SS (Superior com Satisfação)**.

---

## 🎯 Objetivo

Permitir que clientes façam pedidos personalizados de sushis, escolhendo o tipo de peixe, complementos e bebidas japonesas, com controle de status e gerenciamento dos pedidos.

---

## ✅ Funcionalidades Implementadas

### 🧩 1. Componente de Mensagem (`MensagemComponent.vue`)

- Exibe **mensagens de sucesso e alerta**.
- Utiliza `props` para tipo (`sucesso` ou `alerta`) e texto da mensagem.
- Comportamento flutuante (toast): aparece no topo da tela e desaparece após 4 segundos.
- Usado para feedback no formulário de pedido, alteração de status e exclusão de pedidos.

### 📝 2. Validação de Formulário (PedidoComponent.vue)

- Verifica se o campo `nome do cliente` e `tipo de peixe` foram preenchidos.
- Exibe mensagem de alerta caso os campos obrigatórios estejam vazios.
- Envia o pedido apenas se os campos forem válidos.

### ✅ 3. Mensagem de Sucesso ao Enviar Pedido

- Após enviar o pedido com sucesso, exibe a mensagem:
  > Pedido realizado com sucesso! 🎉

### 🧼 4. Esconde Tabela Quando Não Houver Pedidos

- Na listagem de pedidos (`ListaPedidoComponent.vue`), a tabela não é exibida se o array de pedidos estiver vazio.

### 🔁 5. Mensagens ao Atualizar Status ou Excluir Pedido

- Altera status do pedido com dropdown.
- Ao alterar o status ou excluir um pedido, exibe mensagem de sucesso correspondente:
  - **Status alterado com sucesso!**
  - **Pedido excluído com sucesso!**

---

## ⭐ Troca Completa de Tema (Para Sushi)

- **Nome e labels alterados**:

  - "Hambúrguer" → "Sushi"
  - "Ponto da Carne" → "Tipo de Peixe"
  - "Bebidas" → "Bebidas Japonesas"
  - Botão: “Confirmar Pedido 🍱”

- **Banco de dados alterado (`db.json`)**:

  - Itens e descrições condizentes com pratos japoneses.
  - IDs, nomes e imagens atualizadas.

- **Imagens**:
  - Logo e banner atualizados para tema de sushi.
  - Usadas imagens reais de pratos japoneses em `/assets/img`.

---

## 💅 Estilização e Layout

- Paleta de cores alterada para tons japoneses:
  - Fundo escuro com contrastes em **laranja (🍊 #ff4d00)** e branco.
- `BannerComponent.vue`:
  - Cobre toda a tela com imagem responsiva.
  - Estático e ajustado com `background-size: cover`.
- `FooterComponent.vue`:
  - Rodapé com design moderno e ícones sociais (em desenvolvimento).
- `NavBarComponent.vue`:
  - Responsiva com hover e cores temáticas.

---

## 🧪 Testes de Funcionalidade

- [x] Validação de campos obrigatórios
- [x] Mensagem de sucesso ao criar pedido
- [x] Tabela esconde se não há pedidos
- [x] Mensagens ao atualizar status
- [x] Mensagens ao deletar pedido
- [x] Troca total do tema
- [x] Estilo responsivo em todas as páginas
- [x] Componente de mensagem reutilizável funcional

---

## 🏁 Resultado

✅ **Todos os requisitos para conceito SS foram cumpridos com sucesso.**  
Projeto responsivo, estilizado, validado, funcional e com UX amigável.

---

## 🧑‍💻 Desenvolvido por

**Davi Rosa Frausino**  
CEUB – Desenvolvimento Web – 2025/1  
Tema: 🍣 Sushi Order
