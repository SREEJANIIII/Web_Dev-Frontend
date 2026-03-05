let name=document.getElementById("name");
let bttn=document.getElementById("bttn");
let img=document.getElementById("img");

bttn.addEventListener("click",async ()=>{
    let pokeName=name.value.toLowerCase();
    let url=`https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    const data=await fetch(url);
    const jsonData=await data.json();
    console.log(jsonData);
    img.src=jsonData.sprites.other["official-artwork"].front_default;
});