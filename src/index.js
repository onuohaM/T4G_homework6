function changeSize(){
    let name=prompt("What is your name");
    let heading =document.getElementById("heading");
    heading.innerHTML=`Hi ${name} welcome to Beauty of Africa`;
    let secondhead=document.querySelector("secondhead");
    secondhead.innerHTML=`Welcome ${name} Browse through our Products`;
}

let product=document.getElementById("product");
product.addEventListener=('mouseenter',changeSize);
