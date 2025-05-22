const meuAppVue = {
    data() {
        return{
            nome : "Fernado Dias",
            idade : 37,
            inputText : "",
        };
    },
};

Vue.createApp(meuAppVue).mount("#app");