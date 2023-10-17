

// =================================== COMPONENTES =============================================== //


class card01 extends HTMLElement {
    constructor() {
      super();

      const imagem = this.getAttribute('imagem')||'https://i.ibb.co/VMcCJbq/image.png'
      const titulo = this.getAttribute('titulo')||'Titulo'
      const texto = this.getAttribute('texto')||'Lorem ipsum dolor sit amet consectetur adipisicing elit. A eaque quo placeat dicta expedita voluptate atque aliquid laboriosam. '

  
      this.innerHTML = `

    
  <!-- Codigo -->


  <div class="w-40 lg:w-52 h-56 lg:h-72 bg-white rounded-xl shadow relative group overflow-hidden drop-shadow-md hover:scale-[1.02] hover:-translate-y-2 skeleton">

  <div class="skeleton2">
      <img class=" w-full h-full bg-cover bg-center rounded-xl" src="${imagem}" alt="" />
  </div>

  <div class="p-5 h-full absolute top-0 bg-gray-950/60 rounded-xl hidden group-hover:block animate__animated animate__slow animate__fadeIn">

      <h5 class=" mb-2 text-base lg:text-xl font-bold tracking-tight text-white">${titulo}</h5>

      <p class=" mb-3 font-normal text-gray-300  text-xs lg:text-base">${texto}</p>
    
  </div>
  
</div>
  

            
  <!-- Codigo -->
          
  
        `;



  }}
  
  customElements.define("card-01", card01);