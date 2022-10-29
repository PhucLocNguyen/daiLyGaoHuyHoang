const slideEffect = () =>setTimeout(()=>{
    const containerSlide = document.querySelector(".containerSlide");
const slideTong = document.querySelector(".slideTong");
const controlBtn = document.querySelector(".control-buttons");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const interval = 2500;
let slide = document.querySelectorAll(".slide");
let index = 0;
let slideInterval;
const clientWidth = slide[0].clientWidth;
console.log(clientWidth)
const firstSlide = slide[0].cloneNode(true);
const lastSlide = slide[slide.length - 1].cloneNode(true);
firstSlide.id = "firstSlide";
lastSlide.id = "lastSlide";
slideTong.append(firstSlide);
slideTong.prepend(lastSlide);
function getSlides(){
      
       return  document.querySelectorAll(".slide");
}
const startSlideMoving = () =>{
  slideInterval = setInterval(()=>
    {
        movingNextSlide();
    },interval)
}
function movingNextSlide(){
    slide = getSlides();
    index++;
    slideTong.style.transition ="1s ease-in-out";
    nextBtn.style.pointerEvents = "none";
    setTimeout(()=>{
        nextBtn.style.pointerEvents = "auto";
    },1000)
    slideTong.style.transform = `translateX(${-clientWidth *index}px)`;

}
function movetoPrevSlide(){
    slide = getSlides();
    if(index <= 0) return;
    index--;
    slideTong.style.transition = "1s ease-in-out";
    prevBtn.style.pointerEvents = "none";
    setTimeout(()=>{
        prevBtn.style.pointerEvents = "auto";
    },1000)
    slideTong.style.transform = `translateX(${-clientWidth *index}px)`;
}

slideTong.addEventListener("mouseover",()=>clearInterval(slideInterval));
containerSlide.addEventListener("mouseleave",startSlideMoving);
nextBtn.addEventListener("click",movingNextSlide);
controlBtn.addEventListener("mouseenter",()=>clearInterval(slideInterval))
slideTong.addEventListener("transitionend", ()=>{
    slide = getSlides();
    console.log(index);
    console.log(slide)
    if(slide[index].id === firstSlide.id){
        index=1;
        slideTong.style.transition="none";
        slideTong.style.transform = `translateX(${-clientWidth*index}px)`;
    }
    if(slide[index].id === lastSlide.id){
        index = slide.length - 2;
        slideTong.style.transition="none";
        slideTong.style.transform = `translateX(${-clientWidth*index}px)`;
    }
});
prevBtn.addEventListener("click", movetoPrevSlide)
startSlideMoving();
},1000)

export default slideEffect;