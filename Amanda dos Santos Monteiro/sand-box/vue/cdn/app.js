const meuAppVue = {
    data(){
        return{
            nome : "Amanda Monteiro",
            idade: 22,
            inputText : "",
        };
    },
};

Vue.createApp(meuAppVue).mount("#app");
 