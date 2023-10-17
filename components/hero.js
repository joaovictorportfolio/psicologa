

// =================================== COMPONENTES =============================================== //


class hero01 extends HTMLElement {
    constructor() {
      super();

  
      this.innerHTML = `

    
  <!-- Codigo -->
  
  <section id="sectionInicio" class="bg-white dark:bg-gray-900 h-screen flex justify-center items-center skeleton">

    <div class=" max-w-screen-xl  flex items-center justify-between max-xl:px-4 max-lg:flex-col max-lg:h-full max-lg:justify-evenly max-lg:py-2  ">

        <div class="mr-auto place-self-center max-lg:order-2  space-y-6 max-lg:px-2" 
        
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-easing="linear"
        data-aos-mirror="true"
        data-aos-once="false"

        >

            <h1 class="skeleton2 max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl  ">Comece sua jornada em direção ao bem-estar mental hoje mesmo</h1>

            <p class="skeleton2 max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Aqui, você encontrará uma <span class="font-semibold text-primary-600">jornada de autodescoberta e crescimento</span>, repleta de recursos, orientações e um espaço seguro para <span class="font-semibold text-primary-600">explorar sua saúde mental.</span> 🧠🧘‍♂️</p>

            <a href="#" class="skeleton2 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 hover:scale-[1.02]">
                Agendar consulta
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>

            <a href="#sectionSobremim" class="skeleton2 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 hover:scale-[1.02]">
                Ver mais
            </a> 

        </div>

        <div class=" lg:mt-0  order-1"
        
        data-aos="fade-left"
        data-aos-duration="800"
        data-aos-easing="linear"
        data-aos-mirror="true"

        >
            <div class="skeleton2 w-1/2 rounded-xl mx-auto">
            <img class=" rounded-xl mx-auto " src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="psicologa">
            </div>
        </div>   

    </div>
</section>
    
    
  
            
            
  <!-- Codigo -->
          
  
        `;



  }}
  
  customElements.define("hero-01", hero01);