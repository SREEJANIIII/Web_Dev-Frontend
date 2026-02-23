let buttons=document.getElementsByClassName('button');
let display=document.getElementById('display');
let clear=document.getElementsByClassName('clear')[0];
let equal=document.getElementsByClassName('pink')[0];
let operators=document.getElementsByClassName('yellow');
let yellow1=document.getElementsByClassName('yellow1')[0];
let num=0;
let ope=0;
let hist=[];
for(let button of buttons)
{
    button.onclick=function(){
        hist.push(button.textContent);
        display.textContent+=button.textContent;
        num=1;
        ope=0;
    };
}

for(let operator of operators){
operator.onclick=function(){
    if(num==1 && ope==0)
    {
        hist.push(operator.textContent);
        display.textContent+=operator.textContent;
        num=0;
        ope=1;
    }
    
};
}

equal.onclick=function(){
    try{
        display.textContent=eval(display.textContent);
        ope=0;
        hist=display.textContent.split('');
        num=1;
    }
    catch(error){
        display.textContent="Error";
        hist=[];
        ope=0;
        num=0;
    }
}

yellow1.onclick=function(){
    if(hist[hist.length-1]==='+' || hist[hist.length-1]==='-' || hist[hist.length-1]==='*' || hist[hist.length-1]==='/' )
     num=1;
    ope=0;
    hist.pop();
    display.textContent=hist.join('');
}

clear.onclick=function(){
    hist=[];
    display.textContent='';
    num=0;
    ope=0;
}