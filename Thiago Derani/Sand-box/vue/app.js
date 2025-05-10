const meuAppVue = {
    data() {
      return {
        nome: "Thiago Derani",
        idade: 37,
        inputText: "",
      };
    },
  };
  
  Vue.createApp(meuAppVue).mount("#app");
  