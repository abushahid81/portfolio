let dayNignt = document.querySelector(".dayNight");
let banner = document.querySelector(".banner");

dayNignt.addEventListener("click",()=>{
    banner.classList.toggle("night");
})


let typingEffect = new Type("#text",{
    strings:["AbuShahid"],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000,

});