
// ********************loader javascript ***************
let count = document.querySelector(".loader-count");
function time(){
	var a = 0
	setInterval(function(){
	    a += Math.floor(Math.random()*20)
	    if(a<100){
	       count.innerHTML = a+"%"
	    }else{
	        a = 100
	        count.innerHTML = a+"%"
	    }
	},150)
           }
           time();
let lt = gsap.timeline();
           lt.to("#loader",{
	opacity:0,
	delay:2.3,
	scale:2,
	display:"none"

           })
           lt.from(".loader-p4bottom span",{
               duration:1,
	opacity:0,
	x:100,
	stagger:0.2,
          })
          
           lt.to("#loader2",{
               backgroundColor:"#000",
               color:"#fff",
          })
          
          
           lt.to("#loader2",{
	duration:1,
	top:"-100%"
           })



// // ************** normal Javascript ***************



lt.from("#navbar",{
               opacity:0,
               y:10,
               duration:1,
})
lt.from("#main-left h1",{
               opacity:0,
               duration:1,
               x:-100,
               stagger:0.7
})

let nep = document.querySelector("#cd-nep");
let mars = document.querySelector("#cd-mars");
let moon = document.querySelector("#cd-moon");
let merc = document.querySelector("#cd-merc");
// let layer1 = document.querySelector("#p2-layer1");
// let layer2 = document.querySelector("#p2-layer2");
// let layer3 = document.querySelector("#p2-layer3");
// let layer4 = document.querySelector("#p2-layer4");

nep.addEventListener("mousemove",()=>{
            //    layer1.style.opacity = "1"
               nep.style.scale = "1.2"
               nep.style.boxShadow = "0 5px 19px #33eea7"
               mars.style.scale = "0.7"
               mars.style.opacity = "0.4"
               moon.style.scale = "0.7"
               moon.style.opacity = "0.4"
               merc.style.scale = "0.7"
               merc.style.opacity = "0.4"
               
})
nep.addEventListener("mouseout",()=>{
               nep.style.scale = "1"
            //    layer1.style.opacity = "0"
               nep.style.boxShadow = "none"
               mars.style.scale = "1"
               mars.style.opacity = "1"
               moon.style.scale = "1"
               moon.style.opacity = "1"
               merc.style.scale = "1"
               merc.style.opacity = "1"

})
mars.addEventListener("mousemove",()=>{
               mars.style.scale = "1.2"
            //    layer2.style.opacity="1"
               mars.style.boxShadow = "0 5px 19px #33eea7"
               nep.style.scale = "0.7"
               nep.style.opacity = "0.4"
               moon.style.scale = "0.7"
               moon.style.opacity = "0.4"
               merc.style.scale = "0.7"
               merc.style.opacity = "0.4"

})
mars.addEventListener("mouseout",()=>{
               mars.style.scale = "1"
            //    layer2.style.opacity = "0"
               nep.style.scale = "1"
               mars.style.boxShadow = "none"
               nep.style.opacity = "1"
               moon.style.scale = "1"
               moon.style.opacity = "1"
               merc.style.scale = "1"
               merc.style.opacity = "1"

})
moon.addEventListener("mousemove",()=>{
               moon.style.scale = "1.2"
            //    layer3.style.opacity = "1"
               nep.style.scale = "0.7"
               nep.style.opacity = "0.4"
               moon.style.boxShadow = "0 5px 19px #33eea7"
               mars.style.scale = "0.7"
               mars.style.opacity = "0.4"
               merc.style.scale = "0.7"
               merc.style.opacity = "0.4"

})
moon.addEventListener("mouseout",()=>{
               moon.style.scale = "1"
            //    layer3.style.opacity = "0"
               nep.style.scale = "1"
               moon.style.boxShadow = "none"
               nep.style.opacity = "1"
               mars.style.scale = "1"
               mars.style.opacity = "1"
               merc.style.scale = "1"
               merc.style.opacity = "1"

})
merc.addEventListener("mousemove",()=>{
               merc.style.scale = "1.2"
                //   merc.style.boxShadow = "0 5px 19px #33eea7"
            //    layer4.style.opacity = "1"
               nep.style.scale = "0.7"
               nep.style.opacity = "0.4"
               mars.style.scale = "0.7"
               mars.style.opacity = "0.4"
               moon.style.scale = "0.7"
               moon.style.opacity = "0.4"

})
merc.addEventListener("mouseout",()=>{
               merc.style.scale = "1"
            //    layer4.style.opacity = "0"
               nep.style.scale = "1"
               merc.style.boxShadow = "none"
               nep.style.opacity = "1"
               mars.style.scale = "1"
               mars.style.opacity = "1"
               moon.style.scale = "1"
               moon.style.opacity = "1"

})

