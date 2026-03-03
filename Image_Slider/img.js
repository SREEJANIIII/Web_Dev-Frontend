let imgs=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
let bgs=[1,2,3,4,5,6,7,8,9,10,11,12,13];
for(let i=0;i<imgs.length;i++){
    imgs[i]=`Taylor/${imgs[i]}.jpg`;
    bgs[i]=`bg${bgs[i]}.jpg`;
}
let img=document.getElementById("img");
let prev=document.getElementById("prev");
let next=document.getElementById("next");
let disp=document.getElementById("disp");
let count=0;

function show(){
    disp.innerHTML=`<img src="${imgs[count]}" alt="Image ${count+1}">`;
    if(count<=2){
        console.log(typeof(count));
        document.body.style.backgroundImage = `url(${bgs[0]})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
     
}
else if(count>2 && count<=4){
    document.body.style.backgroundImage = `url(${bgs[1]})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
}
else if(count>4 && count<=6){
    document.body.style.backgroundImage = `url(${bgs[2]})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
}
else if(count>6 && count<=7){
    document.body.style.backgroundImage = `url(${bgs[3]})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
}

else if(count>7 && count<=9){
    document.body.style.backgroundImage = `url(${bgs[4]})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
}
else if(count>9 && count<=11){
    document.body.style.backgroundImage = `url(${bgs[5]})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
}
else if(count>11 && count<=12){
    document.body.style.backgroundImage = `url(${bgs[6]})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
}
else if(count>12 && count<=13){
    document.body.style.backgroundImage = `url(${bgs[7]})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
}
else if(count>13 && count<=14){
    document.body.style.backgroundImage = `url(${bgs[8]})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
}
else if(count>14 && count<=16){
    document.body.style.backgroundImage = `url(${bgs[9]})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
}
else if(count>16 && count<=22){
    document.body.style.backgroundImage = `url(${bgs[10]})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";  
}
else if(count>22 && count<=24){
    document.body.style.backgroundImage = `url(${bgs[11]})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";  
}
else if(count>24 && count<=26){
    document.body.style.backgroundImage = `url(${bgs[12]})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";  
}
}
show();
    
prev.addEventListener("click",()=>{
    count--;
    if(count<0){
        count=imgs.length-1;
    }
    show();
})

next.addEventListener("click",()=>{
    count++;
    if(count>imgs.length-1){
        count=0;
    }
    show();
})