

 // ================================== IMPORTAR BIBLIOTECA DE CARROSSEL ================================================ //


 import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'



// =================================== COMPONENTES =============================================== //



class swipermeutrabalho extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    
          
  
<!-- Codigo -->


  <div class="swiper mySwiper2 overflow-y-visible max-lg:overflow-x-visible max-lg:max-w-xs p-2 max-lg:p-0"
    
  data-aos="fade-left"
  data-aos-duration="800"
  data-aos-easing="linear"
  data-aos-mirror="true"
  
  >

      <div class="swiper-wrapper">

        <card-01 class="swiper-slide"
          imagem = "https://plus.unsplash.com/premium_photo-1661775504055-4187ceef9651?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5zaWVkYWRlfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          titulo = "Ansiedade"
          texto = "A ansiedade é uma emoção comum, mas quando se torna esmagadora e interfere na qualidade de vida, é importante procurar ajuda."
        ></card-01>

        <card-01 class="swiper-slide"
          imagem = "https://images.unsplash.com/photo-1631883055788-5a5b15fae074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW5zaWVkYWRlfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          titulo = "Depressão"
          texto = "A depressão é uma condição séria que pode causar sentimentos de tristeza profunda, perda de interesse, fadiga e alterações de sono e apetite."
        ></card-01>

        <card-01 class="swiper-slide"
          imagem = "https://plus.unsplash.com/premium_photo-1661573719277-7674c20ff80c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5ncnklMjBidXNpbmVzc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          titulo = "Estresse"
          texto = "O estresse é uma reação natural do corpo a pressões e desafios, mas o estresse crônico pode ter impactos negativos na saúde mental."
        ></card-01>

        <card-01 class="swiper-slide"
          imagem = "https://plus.unsplash.com/premium_photo-1658506865718-151c4a9750a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5ncnklMjBjYXNhbHxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          titulo = "Relacionamentos"
          texto = "Problemas nos relacionamentos podem levar a conflitos, comunicação ineficaz e sentimentos de isolamento."
        ></card-01>

        <card-01 class="swiper-slide"
          imagem = "https://images.unsplash.com/photo-1527236438218-d82077ae1f85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRlcHJlc3MlQzMlQTNvfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          titulo = "Traumas"
          texto = "Traumas passados podem deixar marcas emocionais duradouras, levando a sintomas como flashbacks, pesadelos e ansiedade."
        ></card-01>

        <card-01 class="swiper-slide"
          imagem = "https://images.unsplash.com/photo-1636592358465-37c526b978d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hvcm98ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
          titulo = "Luto"
          texto = "O luto é a reação emocional à perda de um ente querido. Auxilio na adaptação a uma vida sem a pessoa amada e na busca de conforto e aceitação."
        ></card-01>

        

          
          

      </div>

  </div>



<!-- Codigo -->
        

      `;

      var swiper = new Swiper(".mySwiper2", {

          slidesPerView: 1,

          speed: 700,

          spaceBetween: 10,

          grabCursor: true,

        //freeMode:true,
          
          breakpoints: {

              300: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },

            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5.2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5.2,
              spaceBetween: 20,
            },

          },

        });


  }
}

customElements.define("swiper-meutrabalho", swipermeutrabalho);



class swiperabordagem extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    
          
  
<!-- Codigo -->


<div class="swiper mySwiper3 max-lg:max-w-xs"

data-aos="fade-right"
data-aos-duration="800"
data-aos-easing="linear"
data-aos-mirror="true"

>

  <div class="swiper-wrapper">

    <div class="skeleton2 swiper-slide">
      <img class=" w-full rounded-xl" src="https://plus.unsplash.com/premium_photo-1665990292881-6adfe20470d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHN5Y2hvbG9naXN0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
    </div>

    <div class="skeleton2 swiper-slide">
      <img class="w-full rounded-xl" src="https://images.unsplash.com/photo-1509475826633-fed577a2c71b?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHN5Y2hvbG9naXN0fGVufDB8MHwwfHx8MA%3D%3D&w=500" />
    </div>

    <div class="skeleton2 swiper-slide">
      <img class="w-full rounded-xl" src="https://plus.unsplash.com/premium_photo-1664378616928-dc6842677183?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBzeWNob2xvZ2lzdHxlbnwwfDB8MHx8fDA%3D&w=500" />
    </div>

  </div>

</div>


<!-- Codigo -->
        

      `;

      var swiper = new Swiper(".mySwiper3", {

          slidesPerView: 1,

          speed: 700,

          spaceBetween: 10,

          loop:true,

          effect: "fade",

          autoplay:{
            disableOnInteraction:false,
            delay:5000,
          }

        //freeMode:true,
          

        });


  }
}

customElements.define("swiper-abordagem", swiperabordagem);




class swiperavaliacao extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    
          
  
<!-- Codigo -->


<div class="swiper mySwiper4 max-w-xl max-lg:max-w-xs "

data-aos="fade-left"
data-aos-duration="800"
data-aos-easing="linear"
data-aos-mirror="true"

>

    <div class="swiper-wrapper max-lg:pb-8 ">

      <testimonial-01 
      imagem = "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&w=500"
      nome = "Joana Lima"
      profissao = "estudante"
      texto = "Estou eternamente grata à Lidianne. Sua compreensão, orientação e apoio me ajudaram a superar minha ansiedade. Minha vida mudou completamente. Obrigada!"
      
      class="swiper-slide">
      </testimonial-01>

      <testimonial-01 
      imagem = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfDF8MHx8fDA%3D&w=500"
      nome = "André Costa"
      profissao = "Advogado"
      texto = "A terapia com Lidianne me permitiu lidar com o estresse e melhorar meu relacionamento com minha família. Sua abordagem é incrível, e eu a recomendo a todos!"
      
      class="swiper-slide">
      </testimonial-01>

      <testimonial-01 
      imagem = "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfDF8MHx8fDA%3D&w=500"
      nome = "Ana Carla"
      profissao = "Empresária"
      texto = "Fiquei surpresa com o quanto a terapia me ajudou a enfrentar meus traumas passados. Lidianne criou um espaço seguro para minha cura."
      
      class="swiper-slide">
      </testimonial-01>

    </div>

    <div class="skeleton2 swiper-pagination"></div>

</div>


<!-- Codigo -->
        

      `;

      var swiper = new Swiper(".mySwiper4", {

          slidesPerView: 1,

          speed: 700,

          spaceBetween: 10,

          grabCursor: true,

          loop:true,

          pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
          },

          autoplay:{
            disableOnInteraction:false,
            delay:5000,
          }

        //freeMode:true,
          

        });


  }
}

customElements.define("swiper-avaliacao", swiperavaliacao);




