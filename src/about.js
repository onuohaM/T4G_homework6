function hey(){
    let more=document.getElementById("about");
    more.style.color="white";
    more.style.transitionDuration="800ms"
}
let about=document.getElementById("about");
about.addEventListener("mouseenter",hey);

function Hey(){
    let More=document.getElementById("hi");
    More.style.color="black";
    More.style.transitionDuration="800ms"
}
let About=document.getElementById("hi");
About.addEventListener("mouseenter",Hey);