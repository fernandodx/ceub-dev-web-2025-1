const meuAppVue = {

    data() {

        return {
            nome : "André Sousa",
            idade : 24,
            inputText: "",

        };
    },
};

Vue.createApp(meuAppVue).mount("#app")