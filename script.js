   var nav = document.querySelector("nav")

nav.addEventListener("mouseenter",function(){
 let tl = gsap.timeline()
  tl.to(".nav-bottum",{
  height:"23vh"
  })

  tl.to("#nav-elem h5",{
   display:"block"
   })

     tl.to("#nav-elem h5 span",{
      y:0,
      stagger:{
         amount:0.5
      }
      })

})

nav.addEventListener("mouseleave",function(){
    let tl = gsap.timeline()
      tl.to("#nav-elem h5 span",{
       y:25,
       stagger:{
          amount:0.2
       }

      })

      tl.to("#nav-elem h5",{
         display:"none"
         })

         tl.to(".nav-bottum",{
            height:"0vh"
            
            })
      })
      
      
var rightelems = document.querySelectorAll(".rightelem")

    rightelems.forEach(function(elem){
       elem.addEventListener("mouseenter",function(){
       gsap.to(elem.childNodes[3],{
       opacity:1,
       scale:1,

   })

   })

      elem.addEventListener("mouseleave",function(){
      gsap.to(elem.childNodes[3],{
      opacity:0,
      scale:0,

   })

   })

   elem.addEventListener("mousemove",function(dets){
      gsap.to(elem.childNodes[3],{
         x:dets.x - elem.getBoundingClientRect().x-40,
         y:dets.y - elem.getBoundingClientRect().y-90

      })


   })


})







  
 





   
