console.log("working");
let isro = document.querySelector("#cont2");
let blue = document.querySelector("#cont1");
let nasa = document.querySelector("#cont3");
let spacex = document.querySelector("#cont4");


let overText = document.querySelector("#overView-text");

let video = document.querySelector(".second-prototype");
let cost = document.querySelector(".box-1");
let rocket = document.querySelector(".box-2");
let orbit = document.querySelector(".box-3");
let review = document.querySelector(".box-4");



let index = 0,
    interval = 1000;

const rand = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
}

for(const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    animate(star);
    
    setInterval(() => animate(star), 1000);
  }, index++ * (interval / 3))
}


isro.addEventListener("click",()=>{
               video.innerHTML =` <iframe width="1013" height="570" src="https://www.youtube.com/embed/--8ORixBXQE" title="ISRO CHANDRAYAAN-2 (3D ANIMATION)" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
               // video.innerHTML =` <iframe width="100%" height="100%" src="https://www.youtube.com/embed/tGw-hN8hKXw" title="It&#39;s Time" frameborder="0" allow="accelerometer; play; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
               cost.innerHTML = `<div class="layer1"><h1 class="sub-h">Avg Cost: <span>12650$</span></h1>
               <span class="sub-p">responsible the satelite development program in india</span></div>`;
               rocket.innerHTML = `<div class="layer1"><h1 class="sub-h">Rockets Available </h1>
               <span class="sub-p">Best Rockets like Pslv, Gslv, Gslv mk3, Aslv , Slv</span></div>`
               
               orbit.innerHTML =`<div class="layer1"><h1 class="sub-h">Orbit Reach</h1>
               <span class="sub-p">can reach place you can't even imagine</span></div>`

               review.innerHTML=`<div class="layer1"><h1 class="sub-h">basic Amenities</h1>
               <span class="sub-p">best service available in low prizes with basic Amenities provided with free wifi </span></div>`
})
blue.addEventListener("click",()=>{
               video.innerHTML =` <iframe width="100%" height="100%" src="https://www.youtube.com/embed/tGw-hN8hKXw" title="It&#39;s Time" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
               cost.innerHTML = `<div class="layer1"><h1 class="sub-h">Avg Cost: <span>26900$</span></h1>
               <span class="sub-p">very expensive but not that expensive</span></div>`;
               rocket.innerHTML = ` <div class="layer1"><h1 class="sub-h">Rocket Available <span></span></h1>
               <span class="sub-p">The company has three rocket engines in production including the BE-3U, BE-3PM and BE-4. </span></div>`
               
               orbit.innerHTML =` <div class="layer1"><h1 class="sub-h">Orbits Reach <span></span></h1>
               <span class="sub-p"> BE-3PM engine, which sends the capsule to an apogee (Sub-Orbital) of 100.5 kilometres (62.4 mi)  </span></div>`

               review.innerHTML=` <div class="layer1"><h1 class="sub-h">User's Review <span></span></h1>
               <span class="sub-p"> BE-3PM engine, which sends the capsule to an apogee (Sub-Orbital) of 100.5 kilometres (62.4 mi)  </span></div>    `
})
nasa.addEventListener("click",()=>{
               video.innerHTML =` <iframe width="1013" height="570" src="https://www.youtube.com/embed/WeA7edXsU40" title="We Are NASA" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`

               cost.innerHTML = `<div class="layer1"><h1 class="sub-h">Avg Cost: <span>39820$</span></h1>
               <span class="sub-p">second best space agency in the world after isro but best service</span></div>`;
               rocket.innerHTML = `<div class="layer1"><h1 class="sub-h">Rockets Available </h1>
               <span class="sub-p">Nasa uses saturnV , Space shuttel , Atlas V , Delta2&4 </span></div>`
               
               orbit.innerHTML =`<div class="layer1"><h1 class="sub-h">Orbit Reach</h1>
               <span class="sub-p">can reach place you can imagine</span></div>`

               review.innerHTML=`<div class="layer1"><h1 class="sub-h">basic Amenities</h1>
               <span class="sub-p">provides the world's best facilities but comes with a premium</span></div>`
})
spacex.addEventListener("click",()=>{

               video.innerHTML=`<iframe width="1013" height="570" src="https://www.youtube.com/embed/zqE-ultsWt0" title="Starship | Earth to Earth" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`

               cost.innerHTML = `<div class="layer1"><h1 class="sub-h">Avg Cost: <span>17530$</span></h1>
               <span class="sub-p">best overall services with cheap rate and basic facilities</span></div>`;
               rocket.innerHTML = `<div class="layer1"><h1 class="sub-h">Rockets Available </h1>
               <span class="sub-p">spaceX uses Falcon , Falcon Heavy , Falcon 9, StarShip</span></div>`
               
               orbit.innerHTML =`<div class="layer1"><h1 class="sub-h">Orbit Reach</h1>
               <span class="sub-p">jyada upar tak nahi but meri ghar ki shat tak pahunch jaoge</span></div>`

               review.innerHTML=`<div class="layer1"><h1 class="sub-h">Basic Amenities</h1>
               <span class="sub-p">perfect blend of cost and luxury facilities </span></div>`
})







let card1 = document.querySelector("#space-card-1");
let card2 = document.querySelector("#space-card-2");
let card3 = document.querySelector("#space-card-3");
let card4 = document.querySelector("#space-card-4");

let layer1 = document.querySelector("#hide-layer1");
let layer2 = document.querySelector("#hide-layer2");
let layer3 = document.querySelector("#hide-layer3");
let layer4 = document.querySelector("#hide-layer4");



card1.addEventListener("mousemove",()=>{
 layer1.style.display = "block";
})


card1.addEventListener("mouseout",()=>{
 layer1.style.display = "none";
})

card2.addEventListener("mousemove",()=>{
  layer2.style.display = "block"
})
card2.addEventListener("mouseout",()=>{
  layer2.style.display = "none"
})

card3.addEventListener("mousemove",()=>{
  layer3.style.display = "block"
})
card3.addEventListener("mouseout",()=>{
  layer3.style.display = "none"
})

card4.addEventListener("mousemove",()=>{
  layer4.style.display = "block"
})
card4.addEventListener("mouseout",()=>{
  layer4.style.display = "none"
})