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
    }
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
    
}
}

equal.onclick = function () {
    try {
        let o=hist[(hist.length)-1];
        if(o!="+"&&o!="-"&&o!="*"&&o!="/")
        {
        let result = evaluate()[0];

        display.textContent = result;
        hist = result.split("");

        num = 1;
        ope = 0;
    }
else
display.textContent=hist.join("");
} catch {
        display.textContent = "Error";
        hist = [];
        num = 0;
        ope = 0;
    }
};

yellow1.onclick=function(){
    if(hist[hist.length-1]==='+' || hist[hist.length-1]==='-' || hist[hist.length-1]==='*' || hist[hist.length-1]==='/')
     num=1;
    ope=0;
    hist.pop();
    display.textContent=hist.join('');
};

clear.onclick=function(){
    hist=[];
    display.textContent='';
    num=0;
    ope=0;
};
 function tokenize(){   
    let num="";
    let tokens=[];

    for(let ch of hist){
        if(!isNaN(ch)||ch==".")
            num+=ch;
        else if(ch=="+"||ch=="-"||ch=="*"||ch=="/")
        {
            if(num!="")
            {
            tokens.push(num);
            }
        num="";
        tokens.push(ch);
        }
           }
           if(num!=="")
             tokens.push(num);
    return tokens;

 }
 function evaluate()
 {
    let tokens=tokenize();
    let num1, num2;
    let result;
    for(let i=0;i<tokens.length;i++)
    {

        if(tokens[i]=="*"||tokens[i]=="/")
        {
            num1=Number(tokens[i-1]);
            num2=Number(tokens[i+1]);
            if(tokens[i]=="*")
                result=multiply(num1,num2);
            else
                result=divide(num1,num2);
            tokens.splice(i-1,3,result.toString());
            i=-1;
        }
    }
    for(let i=0;i<tokens.length;i++)
    {
        if(tokens[i]=="+"||tokens[i]=="-")
        {
            num1=Number(tokens[i-1]);
            num2=Number(tokens[i+1]);
            if(tokens[i]=="+")
                result=add(num1,num2);
            else
                result=subtract(num1,num2);
            tokens.splice(i-1,3,result.toString());
            i=-1;
        }

    }
    return tokens;
}
 

 function add(a,b){
    return a+b;
 }

 function subtract(a,b){
    return a-b;
 }
 
 function multiply(a,b){
    return a*b;
 }

 function divide(a,b){
    return a/b;
 }