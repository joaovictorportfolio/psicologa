

// =================================== COMPONENTES =============================================== //


class header01 extends HTMLElement {
    constructor() {
      super();

  
      this.innerHTML = `

    
  <!-- Codigo -->
  
  <header>

    <nav class="bg-white px-4 lg:px-6 py-2.5 dark:bg-gray-800/90 drop-shadow-md skeleton fixed w-full z-10">

        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

            <a href="#" class="flex items-center skeleton2">
                <img src="https://i.ibb.co/5YWrbR4/image.png" class="mr-3 h-10 sm:h-14" alt="Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white hidden">Flowbite</span>
            </a>

            <div class="flex items-center lg:order-2">

                <a href="#" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 hidden skeleton2">Log in</a>

                <a href="#" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 hidden skeleton2">Get started</a>

                <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 skeleton2" aria-controls="mobile-menu-2" aria-expanded="false">

                    <span class="sr-only">Open main menu</span>

                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>

                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>

                </button>

            </div>

            <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">

                <ul id="ulNavBarHeader" class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

                    <li>
                        <a href="#sectionInicio" id="navbarInicio" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white skeleton2" aria-current="page">Início</a>
                    </li>

                    <li>
                        <a href="#sectionSobremim" id="navbarSobremim" class="skeleton2 block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Sobre mim</a>
                    </li>
                    
                    <li>
                        <a href="#sectionMeutrabalho" id="navbarMeuTrabalho" class="skeleton2 block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Meu trabalho</a>
                    </li>

                    <li>
                        <a href="#sectionAbordagem" id="navbarAbordagem" class="skeleton2 block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Abordagem</a>
                    </li>

                    <li>
                        <a href="#sectioAvaliacao" id="navbarAvaliacao" class="skeleton2 block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Avaliações</a>
                    </li>

                    <li>
                        <a href="#footerContato" id="navbarContato" class="skeleton2 block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contato</a>
                    </li>

                </ul>

            </div>

        </div>

    </nav>

</header>
    
    
  
            
            
  <!-- Codigo -->
          
  
        `;



  }}
  
  customElements.define("header-01", header01);