const meuAppVue = {
    data() {
        return {
            nome : "Isaque Oliveira",
            idade : 23,
            inputText : ""
        };
    },
};

Vue.createApp(meuAppVue).mount("#app");