// - Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 
//  Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

//  Passo 2 - identificar o clique no botão
botaoMostrarProjetos.addEventListener('click', () => {
    mostarMaisProjetos(); //refatorado
    //- Objetivo 2 - esconder o botão de mostrar mais 
    //  Passo 1 - pegar o botão e esconder ele
    esconderBotao(); //refatorado
});






function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}

function mostarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

