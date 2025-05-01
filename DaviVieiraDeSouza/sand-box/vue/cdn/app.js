const meuAppVue = {

    data() {
        return {
            nome: "Davi Vieira",
            idade: 20,
            inputText: "",
        };
    },
};

Vue.createApp(meuAppVue).mount("#app");