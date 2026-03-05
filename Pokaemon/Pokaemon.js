let name=document.getElementById("name");
let bttn=document.getElementById("bttn");
let container=document.getElementsByClassName("container")[0];
let img=document.createElement("img");
let type=document.createElement("p");
type.classList.add("container");
bttn.addEventListener("click",async ()=>{
    try{     
    let pokeName=name.value.toLowerCase();
    let url=`https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    let data=await fetch(url);
    jsonData=await data.json();
  type.textContent=`Type: 1. ${jsonData.types[0].type.name} 2. ${jsonData.types[1] ? jsonData.types[1].type.name : "N/A"}`; // Check if second type exists
  type.textContent=type.textContent.toUpperCase();   
  console.log(jsonData);
    img.src=jsonData.sprites.other["official-artwork"].front_default;
    img.alt=`Image of ${pokeName}`;
    container.appendChild(type);
    container.appendChild(img);
    }
    catch(error){
        console.error("Error fetching data:",error);
        alert("Pokemon not found. Please check the name and try again.");
    }
});
