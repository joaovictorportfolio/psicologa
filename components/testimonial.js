

// =================================== COMPONENTES =============================================== //


class testimonial01 extends HTMLElement {
    constructor() {
      super();

      const imagem = this.getAttribute('imagem')||'https://i.ibb.co/VMcCJbq/image.png'
      const nome = this.getAttribute('nome')||'Paciente'
      const profissao = this.getAttribute('profissao')||'profissao'
      const texto = this.getAttribute('texto')||'Lorem ipsum dolor sit amet consectetur adipisicing elit. A eaque quo placeat dicta expedita voluptate atque aliquid laboriosam. '

  
      this.innerHTML = `

    
  <!-- Codigo -->
  
  <div class="max-w-screen-xl px-4 py-4 mx-auto text-center lg:py-12 lg:px-6">

  <figure class="max-w-screen-md mx-auto skeleton2">



      <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
      </svg> 


      <blockquote>

          <p class=" text-2xl max-lg:text-base font-medium text-gray-900 dark:text-white">"${texto}"</p>

      </blockquote>

      <figcaption class="flex items-center justify-center mt-6 space-x-3 ">

          <img class=" w-10 h-10 rounded-full bg-cover" src="${imagem}" alt="profile picture">
          <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div class="pr-3 font-medium text-primary-600">${nome}</div>
              <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">${profissao}</div>
          </div>

      </figcaption>

  </figure>

</div>
    
    
  
            
            
  <!-- Codigo -->
          
  
        `;



  }}
  
  customElements.define("testimonial-01", testimonial01);