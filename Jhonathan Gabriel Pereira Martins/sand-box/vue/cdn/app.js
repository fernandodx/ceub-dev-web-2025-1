const meuAppVue = {

    data() {
        return {
            nome : "Jhonathan Gabriel",
            idade : 21,
            inputText : ""
        };
    },
};

Vue.createApp(meuAppVue).mount("#app");