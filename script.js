var swiper = new Swiper(".mySwiper", {
    slidesPerView:3,
    spaceBetween:20,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    breakpoints:{
      '280':{
        slidesPerView:1
      },
      '768':{
        slidesPerView:2
      },
      '1200':{
        slidesPerView:3
      }
    }
  });



  const navBarToggler= document.querySelector('.navbar-toggler')
  const navBox= document.querySelector('.navbar-collapse')
  navBox.addEventListener('click', ()=>{
    navBox.classList.remove('show')
  })



  // Hide Scroll button***************



  const scrollBtn= document.querySelector('.scrollBtn')

 document.addEventListener('DOMContentLoaded', ()=>{

  const heroSection= document.querySelector('#hero')


  const observer= new IntersectionObserver(([entry])=>{

      if(entry.isIntersecting){
        scrollBtn.classList.add('hidden')
      }else{
        scrollBtn.classList.remove('hidden')
      }
      { threshold: 0.5 } // Adjust to detect when 50% of hero is visible



  })
  observer.observe(heroSection);

 })


//  **************
