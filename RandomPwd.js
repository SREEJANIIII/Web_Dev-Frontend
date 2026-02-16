let Lc=true;
let Uc=true;
let num=true;
let sym=true;
let len=12;
function generatePassword(len, lc, uc, num,sym){
    let chars="";
    if(lc) chars+="abcdefghijklmnopqrstuvwxyz";
    if(uc) chars+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(num) chars+="0123456789";
    if(sym) chars+="!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password="";
    if(chars.length===0) return "Please select at least one character type.";
    else if(len<1) return "Please enter a valid length.";
    for(let i=0;i<len;i++){
        password+=chars[Math.floor(Math.random()*chars.length)];
    }
    return password;
}
let pwd=generatePassword(len,Lc,Uc,num,sym);
console.log(pwd);
    