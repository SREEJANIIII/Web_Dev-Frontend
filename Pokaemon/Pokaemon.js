let name=document.getElementById("name");
let bttn=document.getElementById("bttn");
let container=document.getElementsByClassName("container")[0];
let img=document.createElement("img");
bttn.addEventListener("click",async ()=>{
    try{
    let pokeName=name.value.toLowerCase();
    let url=`https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    const data=await fetch(url);
    const jsonData=await data.json();
    console.log(jsonData);
    img.src=jsonData.sprites.other["official-artwork"].front_default;
    img.alt=`Image of ${pokeName}`;
    container.appendChild(img);
    }
    catch(error){
        console.error("Error fetching data:",error);
        alert("Pokemon not found. Please check the name and try again.");
    }
});