const meuAppVue = {
   data() {
        return {
            nome : "Victor Hugo",
            idade: 21,
            inputText : "",
        };
    },
};

Vue.createApp(meuAppVue).mount("#app");
