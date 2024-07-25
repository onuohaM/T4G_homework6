function changeSize(){
    let name=prompt("What is your name");
    let heading =document.getElementById("heading");
    heading.innerHTML=`Hi ${name} welcome to Beauty of Africa`;
    let secondhead=document.getElementById("secondhead");
    secondhead.innerHTML=`Welcome ${name} Browse through our Products`;
}

let product=document.getElementById("product");
product.addEventListener('mouseenter',changeSize);


function size (){
    let moreimages=document.getElementById("imagetwo");
    moreimages.style.display="flex";
    moreimages.style.flexWrap="wrap";
    moreimages.style.justifyContent="space-around";
    let Show = document.getElementById("more");
    show.style.display="none";
    let hide=document.getElementById("less");
    hide.style.display="flex";

}

let show =document.getElementById("more");
show.addEventListener("click",size);

function changeMore(){
    let moreImages=document.getElementById("imagetwo");
    moreImages.style.display="none";
    let real = document.getElementById("more");
    real.style.display="block";
    let Hide=document.getElementById("less");
    Hide.style.display="none";

}

let less=document.getElementById("less");
less.addEventListener("click",changeMore);
