const DecBttn=document.getElementById("decrease");
const IncBttn=document.getElementById("increase");
const Reset=document.getElementById("reset");
const counter=document.getElementById("counter"); 
let count=0;
IncBttn.onclick=function(){
    count++;
    counter.textContent=count;
}
DecBttn.onclick=function(){
    count--;
    counter.textContent=count;
}
Reset.onclick=function(){
    count=0;
    counter.textContent=count;
}

