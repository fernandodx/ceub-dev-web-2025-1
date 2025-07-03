new Vue({
    el: '#app',
    data: {
        headerTitle: 'Formulário Dinâmico',
        headerColor: '#42b983',
        user: {
            name: '',
            age: null,
            favoriteColor: '#42b983',
            newsletter: false
        },
        baseColors: {
            primary: '#42b983',
            secondary: '#35495e'
        }
    },
    computed: {
        // Validação do nome
        isNameValid() {
            return this.user.name.length >= 3 || this.user.name.length === 0;
        },
        
        // Feedback da idade
        ageFeedback() {
            if (!this.user.age) return 'Informe sua idade';
            if (this.user.age < 18) return 'Você é menor de idade';
            if (this.user.age >= 18 && this.user.age < 60) return 'Você é adulto';
            return 'Você é idoso';
        },
        
        // Estilo dinâmico para o input de idade
        ageInputStyle() {
            if (!this.user.age) return {};
            
            return {
                borderColor: this.user.age < 18 ? '#ffc107' : 
                            this.user.age >= 60 ? '#ff9800' : '#4caf50',
                fontWeight: 'bold'
            };
        },
        
        // Estilo dinâmico para o feedback de idade
        ageFeedbackStyle() {
            if (!this.user.age) return { backgroundColor: '#f8f9fa' };
            
            return {
                backgroundColor: this.user.age < 18 ? '#fff3cd' : 
                               this.user.age >= 60 ? '#ffe0b2' : '#d4edda',
                color: this.user.age < 18 ? '#856404' : 
                      this.user.age >= 60 ? '#e65100' : '#155724'
            };
        },
        
        // Status do formulário
        formStatus() {
            return this.isNameValid ? 'Válido' : 'Inválido';
        },
        
        formStatusClass() {
            return {
                'status-valid': this.isNameValid,
                'status-invalid': !this.isNameValid
            };
        },
        
        // Visualização dos dados do usuário
        userDataPreview() {
            return {
                Nome: this.user.name || 'Não informado',
                Idade: this.user.age || 'Não informada',
                'Cor Favorita': this.user.favoriteColor,
                Newsletter: this.user.newsletter ? 'Assinado' : 'Não assinado'
            };
        },
        
        // Estilo dinâmico para a seção de saída
        outputSectionStyle() {
            return {
                borderTop: `4px solid ${this.user.favoriteColor}`
            };
        },
        
        // Estilo dinâmico para o rodapé
        footerStyle() {
            return {
                backgroundColor: this.user.favoriteColor,
                color: this.getContrastColor(this.user.favoriteColor)
            };
        }
    },
    methods: {
        // Atualiza o cabeçalho com o nome do usuário
        updateHeader() {
            if (this.user.name.trim() !== '') {
                this.headerTitle = `Bem-vindo, ${this.user.name}!`;
            } else {
                this.headerTitle = 'Formulário Dinâmico';
            }
        },
        
        // Atualiza o tema com base na cor favorita
        updateTheme() {
            this.headerColor = this.user.favoriteColor;
        },
        
        // Função para calcular cor de contraste (preto ou branco)
        getContrastColor(hexColor) {
            // Converte hex para RGB
            const r = parseInt(hexColor.substr(1, 2), 16);
            const g = parseInt(hexColor.substr(3, 2), 16);
            const b = parseInt(hexColor.substr(5, 2), 16);
            
            // Calcula luminosidade
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            
            return luminance > 0.5 ? '#000000' : '#ffffff';
        }
    }
});

