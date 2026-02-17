const Roll=document.getElementById("MyBttn");
const Dice=document.getElementById("Dice");
Roll.onclick=function(){
    Dice.textContent=Math.floor(Math.random()*6)+1;
}
