const meuAppVue={

    data(){
        return{
            nome: "Livia Badu",
            idade: 43,
            inputText:"",
        };
    },
};
Vue.createApp(meuAppVue).mount("#app");
