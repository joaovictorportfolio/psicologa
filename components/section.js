

// =================================== COMPONENTES =============================================== //


class sectionsobremim extends HTMLElement {
    constructor() {
      super();

  
      this.innerHTML = `

    
  <!-- Codigo -->
  
  <section id="sectionSobremim" class="bg-white dark:bg-gray-900 h-screen flex items-center justify-center skeleton">

  <div class="py-8 px-8 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">

      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16 space-y-6" 
      
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-easing="linear"
      data-aos-mirror="true"

      >

          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white skeleton2">Sobre mim</h2>

          <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400 skeleton2">Olá, eu sou Lidianne Araújo, e estou aqui para ajudá-lo a encontrar <span class="font-semibold text-primary-600">equilíbrio e bem-estar em sua vida.</span> </p>

          <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400 skeleton2">Com anos de experiência em psicologia clínica, estou comprometida em oferecer <span class="font-semibold text-primary-600">apoio emocional</span> e orientação através de um <span class="font-semibold text-primary-600">espaço seguro e confidencial.</span></p>

      </div>  

  </div>

</section>
    
    
  
            
            
  <!-- Codigo -->
          
  
        `;



  }}
  
  customElements.define("section-sobremim", sectionsobremim);


  class sectionmeutrabalho extends HTMLElement {
    constructor() {
      super();

  
      this.innerHTML = `

    
  <!-- Codigo -->
  

  <section id="sectionMeutrabalho" class="bg-white dark:bg-gray-900 h-screen flex flex-col justify-center max-lg:justify-start max-lg:pt-20 items-center skeleton">

  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 ">

      <div class="w-full mb-10 lg:mb-10"
        
      data-aos="fade-right"
      data-aos-duration="800"
      data-aos-easing="linear"
      data-aos-mirror="true"
      
      >

          <h2 class="skeleton2 mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Meu Trabalho</h2>

          <p class="skeleton2 text-gray-500 text-base lg:text-lg dark:text-gray-400">Atendo <span class="font-semibold text-primary-600">Crianças</span> , <span class="font-semibold text-primary-600">Adolescentes</span> , <span class="font-semibold text-primary-600">Adultos</span> e <span class="font-semibold text-primary-600">Idosos</span> que buscam apoio em uma ampla gama de questões, como <span class="font-semibold text-primary-600">ansiedade</span>, <span class="font-semibold text-primary-600">depressão</span>, <span class="font-semibold text-primary-600">estresse</span>, <span class="font-semibold text-primary-600">traumas</span>, <span class="font-semibold text-primary-600">luto</span> e <span class="font-semibold text-primary-600">autodesenvolvimento</span>. Se você está passando por um <span class="font-semibold text-primary-600">momento difícil</span> ou apenas deseja entender melhor a si mesmo, <span class="font-semibold text-primary-600">estou aqui para apoiá-lo</span>.</p>

      </div>

     <swiper-meutrabalho></swiper-meutrabalho>
      
     
  </div>
</section>
    
    
  
            
            
  <!-- Codigo -->
          
  
        `;



  }}
  
  customElements.define("section-meutrabalho", sectionmeutrabalho);


class sectionabordagem extends HTMLElement {
    constructor() {
      super();

  
      this.innerHTML = `

    
  <!-- Codigo -->
  


  <section id="sectionAbordagem" class="bg-white dark:bg-gray-900 h-screen flex justify-center items-center max-lg:justify-start skeleton">

  <div class="gap-8 max-lg:flex max-lg:flex-col-reverse max-lg:gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 max-lg:h-screen max-lg:items-center max-lg:justify-end max-lg:pt-20 ">

      <swiper-abordagem></swiper-abordagem>
     

      <div class="mt-4 md:mt-0 "
      
      data-aos="fade-left"
      data-aos-duration="800"
      data-aos-easing="linear"
      data-aos-mirror="true"
      
      >

          <h2 class="skeleton2 mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Abordagem</h2>

          <p class="skeleton2 mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Acredito que <span class="font-semibold text-primary-600">cada indivíduo é único</span>, e, portanto, adapto minhas <span class="font-semibold text-primary-600">abordagens terapêuticas</span> de acordo com as necessidades específicas de meus clientes. Trabalho com uma variedade de técnicas, incluindo <span class="font-semibold text-primary-600">Terapia Cognitivo-Comportamental (TCC)</span>, <span class="font-semibold text-primary-600">Terapia de Aceitação e Compromisso (ACT)</span> e <span class="font-semibold text-primary-600">Mindfulness</span>.</p>



      </div>

  </div>

</section>
    
  
            
            
  <!-- Codigo -->
          
  
        `;



  }}
  
  customElements.define("section-abordagem", sectionabordagem);

class sectionavaliacoes extends HTMLElement {
    constructor() {
      super();

  
      this.innerHTML = `

    
  <!-- Codigo -->
  

  <section id="sectioAvaliacao" class="bg-white dark:bg-gray-900 h-screen skeleton">

  <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6 h-full flex flex-col justify-center items-center">

  <div class="mx-auto max-w-screen-sm max-lg:-translate-y-10"
  data-aos="fade-right"
  data-aos-duration="800"
  data-aos-easing="linear"
  data-aos-mirror="true"
  
  >
          <h2 class="skeleton2 mb-4 text-4xl max-lg:text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">O Que nossos clientes dizem?</h2>
          <p class="skeleton2 mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Aqui estão algumas <span class="font-semibold text-primary-600">palavras de gratidão</span> e apreço compartilhadas por nossos <span class="font-semibold text-primary-600">pacientes</span>. Suas <span class="font-semibold text-primary-600">histórias inspiradoras</span>refletem a <span class="font-semibold text-primary-600">mudança positiva</span> que a <span class="font-semibold text-primary-600">terapia</span> pode trazer.</p>
  </div> 

  <swiper-avaliacao></swiper-avaliacao>

  </div>

</section>
    
  
    
  
            
            
  <!-- Codigo -->
          
  
        `;



  }}
  
  customElements.define("section-avaliacoes", sectionavaliacoes);
