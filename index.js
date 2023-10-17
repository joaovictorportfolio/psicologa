

// =================================== COMPONENTES =============================================== //

import * as componenteHeader from './components/header.js'
import * as componenteHero from './components/hero.js'
import * as componenteSection from './components/section.js'
import * as componenteCards from './components/cards.js'
import * as componenteSwiper from './components/swiper.js'
import * as componenteFooter from './components/footer.js'
import * as componenteTestimonial from './components/testimonial.js'





// =================================== FUNCOES =============================================== //


function removerSkeleton(){

    window.addEventListener('load', function() {
        // Quando a página carrega completamente
        // Remova as classes 'skeleton' e 'skeleton2' dos elementos
        document.querySelectorAll('.skeleton, .skeleton2').forEach(function(element) {
            element.classList.remove('skeleton');
            element.classList.remove('skeleton2');
        });
    });

}

function removerSelecaoNavbarGeral() {
    const aNavBarHeader = document.querySelectorAll('#ulNavBarHeader a');
    aNavBarHeader.forEach((a) => {
        a.classList.remove('text-white', 'rounded', 'bg-primary-700', 'lg:bg-transparent', 'lg:text-primary-700', 'dark:text-white');
        a.classList.add('text-gray-700', 'border-b', 'border-gray-100', 'hover:bg-gray-50', 'lg:hover:bg-transparent', 'lg:border-0', 'lg:hover:text-primary-700', 'dark:text-gray-400', 'lg:dark:hover-text-white', 'dark:hover-bg-gray-700', 'lg:dark:hover-bg-transparent', 'dark:border-gray-700');
    });
}

function controlarSelecaoNavBar() {
    const aNavBarHeader = document.querySelectorAll('#ulNavBarHeader a');
    aNavBarHeader.forEach((a) => {
        a.addEventListener('click', (event) => {
            const elementoClicado = event.target;
            removerSelecaoNavbarGeral();
            elementoClicado.classList.remove('text-gray-700', 'border-b', 'border-gray-100', 'hover:bg-gray-50', 'lg:hover:bg-transparent', 'lg:border-0', 'lg:hover:text-primary-700', 'dark:text-gray-400', 'lg:dark:hover-text-white', 'dark:hover-bg-gray-700', 'lg:dark:hover-bg-transparent', 'dark:border-gray-700');
            elementoClicado.classList.add('text-white', 'rounded', 'bg-primary-700', 'lg:bg-transparent', 'lg:text-primary-700', 'dark:text-white');
        });
    });
}

function removerSelecaoNavbar(a, elementoSelecionado) {
    const selecionadoClasses = 'text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 dark:text-white';
    const naoselecionadoClasses = 'text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 dark:text-gray-400 lg:dark:hover-text-white dark:hover-bg-gray-700 dark:hover-text-white lg:dark:hover-bg-transparent dark:border-gray-700';

    const classesRemover = elementoSelecionado === a ? naoselecionadoClasses : selecionadoClasses;
    const classesAdicionar = elementoSelecionado === a ? selecionadoClasses : naoselecionadoClasses;

    classesRemover.split(' ').forEach((classe) => a.classList.remove(classe));
    classesAdicionar.split(' ').forEach((classe) => a.classList.add(classe));
}

function controlarObservadorSections(){

    // Função a ser executada quando o elemento aparecer na tela
    function elementoNaTela(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                

                const idSecao = entry.target.id

                //console.log(idSecao)

            
                switch (idSecao) {
                case 'sectionInicio':
                    removerSelecaoNavbarGeral()
                    removerSelecaoNavbar(navbarInicio, navbarInicio)
                    break;
                case 'sectionSobremim':
                    removerSelecaoNavbarGeral()
                    removerSelecaoNavbar(navbarSobremim, navbarSobremim)
                    break;

                case 'sectionMeutrabalho':
                    removerSelecaoNavbarGeral()
                    removerSelecaoNavbar(navbarMeutrabalho, navbarMeutrabalho)
                    break;

                case 'sectionAbordagem':
                    removerSelecaoNavbarGeral()
                    removerSelecaoNavbar(navbarAbordagem, navbarAbordagem)
                    break;

                case 'footerContato':
                    removerSelecaoNavbarGeral()
                    removerSelecaoNavbar(navbarcontato, navbarcontato)
                    break;

                case 'sectioAvaliacao':
                    removerSelecaoNavbarGeral()
                    removerSelecaoNavbar(navbarAvaliacoes, navbarAvaliacoes)
                    break;

                default:
                    break;
                }


                
            }
        });
    }

    // Opções de configuração para o observador
    const options = {
        root: null, // O elemento raiz do viewport
        rootMargin: "0px", // Margem ao redor do viewport
        threshold: 0.5, // A porcentagem do elemento visível para acionar a função
    };

    // Crie um novo observador com a função de callback e as opções
    const observer = new IntersectionObserver(elementoNaTela, options);

    // Selecione o elemento que você deseja observar
    const elementoObservadoInicio = document.getElementById("sectionInicio");
    // item do menu do navbar
    const navbarInicio = document.getElementById('navbarInicio')

    // Selecione o elemento que você deseja observar
    const elementoObservadoSobremim = document.getElementById("sectionSobremim");
    // item do menu do navbar
    const navbarSobremim = document.getElementById('navbarSobremim')

    // Selecione o elemento que você deseja observar
    const elementoObservadoMeutrabalho = document.getElementById("sectionMeutrabalho");
    // item do menu do navbar
    const navbarMeutrabalho = document.getElementById('navbarMeuTrabalho')

    // Selecione o elemento que você deseja observar
    const elementoObservadoAbordagem = document.getElementById("sectionAbordagem");
    // item do menu do navbar
    const navbarAbordagem = document.getElementById('navbarAbordagem')

    // Selecione o elemento que você deseja observar
    const elementoObservadocontato = document.getElementById("footerContato");
    // item do menu do navbar
    const navbarcontato = document.getElementById('navbarContato')

    // Selecione o elemento que você deseja observar
    const elementoAvaliacoes = document.getElementById("sectioAvaliacao");
    // item do menu do navbar
    const navbarAvaliacoes = document.getElementById('navbarAvaliacao')

    // Comece a observar o elemento
    observer.observe(elementoObservadoInicio);
    observer.observe(elementoObservadoSobremim);
    observer.observe(elementoObservadoMeutrabalho);
    observer.observe(elementoObservadoAbordagem);
    observer.observe(elementoObservadocontato);
    observer.observe(elementoAvaliacoes);



}




// =================================== EXECUTAR =============================================== //

removerSkeleton()
controlarSelecaoNavBar()
controlarObservadorSections()

AOS.init();

