// Adiciona um evento que é acionado quando o DOM é carregado
document.addEventListener('DOMContentLoaded', function(){
    // Seleciona todos os botões com atributo 'data-tab-button'
    const buttons = document.querySelectorAll('[data-tab-button]');
    // Seleciona todas as perguntas com atributo 'data-faq-question'
    const questions = document.querySelectorAll('[data-faq-question]');

    // Seleciona a seção hero
    const heroSection = document.querySelector('.hero');
    // Obtém a altura da seção hero
    const alturaHero = heroSection.clientHeight;

    // Adiciona um evento de rolagem à janela
    window.addEventListener('scroll', function() {
        // Obtém a posição atual de rolagem vertical
        const posicaoAtual = window.scrollY;

        // Verifica se a posição de rolagem está acima da altura da seção hero
        if (posicaoAtual < alturaHero) {
            // Oculta elementos do cabeçalho
            ocultaElementosDoHeader();
        } else {
            // Exibe elementos do cabeçalho
            exibeElementosDoHeader();
        }
    });

    // Itera sobre todos os botões
    for (let i = 0; i < buttons.length; i++) {
        // Adiciona um ouvinte de evento de clique para cada botão
        buttons[i].addEventListener('click', function(btn) {
            // Obtém o atributo 'data-tab-button' do botão clicado
            const abaAlvo = btn.target.dataset.tabButton;
            // Seleciona a aba correspondente com base no atributo 'data-tab-id' igual ao 'data-tab-button' do botão clicado
            const aba = document.querySelector('[data-tab-id=' + abaAlvo + ']');
            // Esconde todas as abas
            escondeTodasAbas();
            // Adiciona a classe para mostrar a aba correspondente
            aba.classList.add('shows__list--is-active');
            // Remove a classe de botão ativo de todos os botões
            removeBotaoAtivo();
            // Adiciona a classe de botão ativo ao botão clicado
            btn.target.classList.add('shows__tabs__button--is-active');
        });
    }

    // Itera sobre todas as perguntas
    for (let i = 0; i < questions.length; i++) {
        // Adiciona um ouvinte de evento de clique para cada pergunta
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
});

// Função para ocultar elementos do cabeçalho
function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

// Função para exibir elementos do cabeçalho
function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

// Função para abrir ou fechar a resposta de uma pergunta
function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

// Função para remover a classe de botão ativo de todos os botões
function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

// Função para esconder todas as abas
function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}