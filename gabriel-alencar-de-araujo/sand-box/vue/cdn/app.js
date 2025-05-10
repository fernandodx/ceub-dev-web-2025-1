const meuAppVue = {
  data() {
    return {
      nome: "Gabriel Alencar",
      idade: 20,
      inputText: "",
    };
  },
};

Vue.createApp(meuAppVue).mount("#app");
