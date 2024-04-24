// const observer = new IntersectionObserver(entity => {
//     entity.forEach(ent => {
//         if(ent.isIntersecting){
//             document.querySelectorAll(".wordlft")[0].classList.add("fadeInLeft");
//             document.querySelectorAll(".wordlft")[1].classList.add("fadeInLeft");
//             document.querySelectorAll(".wordlft")[2].classList.add("fadeInLeft");
//         }
//     })

// })

// observer.observe(document.querySelector(".container"))
// $(document).ready(function() {
//     $(window).scroll( function(){
//         $('.slideinleft').each( function(i){
            
//             var bottom_of_element = $(this).offset().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
            
//             if( bottom_of_window > bottom_of_element ){
//                 $(this).animate({'margin-left':'0px'},1000);
//             }
            
//         }); 
//     });
// });