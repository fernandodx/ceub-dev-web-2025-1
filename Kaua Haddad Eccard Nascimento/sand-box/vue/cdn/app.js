const meuAppVue = {
    data() {
        return {
            nome : "Kauã Nascimento",
            idade : 18,
            inputText : ""
        };
    }
}

Vue.createApp(meuAppVue).mount ("#app");
