let n=[];
let im=[];
let p=document.getElementById("portal")
let img=[{num:1,img:"1.png"},{num:2,img:"2.png"},{num:3,img:"3.png"},{num:4,img:"4.png"},{num:5,img:"5.png"},{num:6,img:"6.png"}];
for(let i=0;i<5;i++)
{
    n.push(Math.floor(Math.random()*6)+1);
    im[i]=document.createElement("img");
    im[i].src=`Dice_images/${img[n[i]-1].img}`;
    im[i].style.height="20px";
    im[i].style.width="20px";
    
}
p.textContent=n.join(',');
p.append(document.createElement("br"));
im.forEach((i)=>{
    p.append(i);
})