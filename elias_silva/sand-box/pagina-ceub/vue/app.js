const meuAppVue = {

    data() {
        return {
        nome : "Elias Silva",
        idade : 23,
        inputText : ""
        };

    },

};

Vue.createApp(meuAppVue).mount("#app")