
# 🍨 Sorveteria Medrano - Projeto Final Vue.js

Projeto final da disciplina de **Desenvolvimento Web - CEUB (2025/1)**, baseado no repositório original de hambúrgueres do professor, agora **totalmente adaptado para uma sorveteria virtual**, com foco na excelência de UX, responsividade e funcionalidades exigidas para alcançar o conceito **SS (Superior com Satisfação)**.

---

## 🎯 Objetivo

Permitir que clientes façam **pedidos personalizados de sorvetes**, escolhendo:

- Sabor
- Tipo de embalagem (copo, casquinha, cascão, pote)
- Complementos (granulados, caldas etc.)
- Bebidas (água, café)

Com controle de status do pedido e gerenciamento completo.

---

## ✅ Funcionalidades Implementadas

### 🧩 Componente de Mensagem (`MensagemComponent.vue`)

- Mensagens tipo toast (sucesso ou alerta).
- Comportamento flutuante.
- Desaparece após 4 segundos.
- Reutilizado em múltiplos cenários.

### 📝 Validação de Formulário (PedidoComponent.vue)

- Verifica:
  - Nome do cliente preenchido
  - Tipo de embalagem selecionado
- Bloqueia envio se estiver incompleto.
- Exibe alertas amigáveis.

### ✅ Confirmação de Pedido

> Pedido realizado com sucesso! 🍦🎉

### 🧼 Lista Condicional de Pedidos

- Tabela de pedidos só aparece se houver registros.
- Senão, exibe:
  > Nenhum pedido cadastrado ainda 🍦
  >

### 🔁 Mensagens ao Atualizar ou Excluir Pedido

- Ao alterar status:
  - `Status do pedido #X atualizado com sucesso!`
- Ao excluir pedido:
  - `Pedido #X removido com sucesso!`

---

## 🎨 Troca Completa de Tema: Sorveteria

- "Hambúrguer" → **Sorvete**
- "Ponto da Carne" → **Tipo de Embalagem**
- Imagens reais de sorvete em `/public/img`
- Banco `db.json` refeito com:
  - Sabores
  - Complementos
  - Bebidas
  - Combos

---

## 💅 Estilização e Layout

- Cores doces e amigáveis:
  - Coral, creme, amarelo claro e fundo escuro contrastante
- **Banner** responsivo com chamada visual
- **Navbar** elegante com logo personalizada
- **Cards de produtos** horizontais com botão "Escolher Sorvete"
- **Responsividade total** (mobile e desktop)

---

## 🧪 Testes Realizados

- [X] Validação de campos obrigatórios
- [X] Toast de sucesso e alerta
- [X] Esconde tabela quando não há pedidos
- [X] Atualização de status do pedido
- [X] Exclusão de pedido com confirmação
- [X] Navegação fluida com Vue Router
- [X] Tema 100% adaptado
- [X] Layout e UI responsivos

---

## 🏁 Resultado

✅ Projeto **funcional, visualmente consistente e com experiência do usuário completa**.
Todos os critérios da disciplina foram cumpridos com atenção aos detalhes técnicos e visuais.

---

## 🧑‍💻 Desenvolvido por

**Elias Silva**
CEUB – Desenvolvimento Web – 2025/1
Tema: **🍨 Sorveteria Medrano**
