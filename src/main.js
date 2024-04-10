/*document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(btn) {
            const abaAlvo = btn.target.dataset.tabButton
            const aba = document.querySelector('[data-tab-id=' + abaAlvo + ']') 
            escondeTodasAbas()
            aba.classList.add('shows__list--is-active')
            removeBotaoAtivo()
            btn.target.classList.add('shows__tabs__button--is-active')
        })
    }

}
)

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
}
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove( 'shows__list--is-active' )
    }
}*/

//Versão simplificada
// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todos os botões com o atributo 'data-tab-button'
    const buttons = document.querySelectorAll('[data-tab-button]');

    // Percorre cada botão e adiciona um evento de clique
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            
        // Obtém o nome da aba alvo a partir do atributo 'data-tab-button' do botão clicado
        const abaAlvo = event.target.dataset.tabButton;
            
        // Localiza a aba correspondente pelo atributo 'data-tab-id'
        const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            
        // Chama a função 'showAba' para exibir a aba correta
        showAba(abaAlvo);
        });
    });
    
    // Função para exibir a aba especificada
    function showAba(abaAlvo) {
        
      // Verifica se existe alguma aba ativa no momento
        const abaAtiva = document.querySelector('.shows__list--is-active');
        if (abaAtiva) {
        // Remove a classe 'shows__list--is-active' da aba ativa atual
        abaAtiva.classList.remove('shows__list--is-active');
    }
    
      // Seleciona novamente a aba alvo
    const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
    
      // Adiciona a classe 'shows__list--is-active' à aba alvo, tornando-a visível
    aba.classList.add('shows__list--is-active');
    
      // Verifica se existe algum botão com a classe 'shows__tabs__button--is-active'
    const botaoAtivo = document.querySelector('.shows__tabs__button--is-active');
    if (botaoAtivo) {
        // Remove a classe 'shows__tabs__button--is-active' do botão ativo anterior
        botaoAtivo.classList.remove('shows__tabs__button--is-active');
    }
    
      // Adiciona a classe 'shows__tabs__button--is-active' ao botão clicado, marcando-o como ativo
    event.target.classList.add('shows__tabs__button--is-active');
    }
});
