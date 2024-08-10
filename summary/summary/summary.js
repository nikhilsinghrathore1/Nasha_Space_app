console.log("working");

let firstBtn = document.querySelector(".circle");
let secondBtn = document.querySelector(".next-btn");

let layer1 = document.querySelector("#mission-report");
let layer2 = document.querySelector("#days");


firstBtn.addEventListener("click",()=>{
               firstBtn.style.display = "none"
               layer1.style.top = "0";
})

secondBtn.addEventListener("click",()=>{
               layer2.style.top = "0"
               layer1.style.display = "none"
})




