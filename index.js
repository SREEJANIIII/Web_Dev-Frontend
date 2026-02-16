console.log("HELLO"); //Output
window.alert("THIS IS AN ALERT"); //Alert Window
//document.getElementById("MyDiv").textContent=`MY DIV`; //To change the content of MYDIv

//VARIABLES
let age=19.6;
console.log(`You are ${age} years old`);
console.log(typeof age); //Number(both integers and decimal)
let name="Sreejani";
console.log(`Your name is ${name}`);
console.log(typeof name); //Strinng
let online=true;
console.log(`Bro is online ${online}`);

//Constants
const PI=3.14;
console.log(PI);
//PI=3.14159; //error because pi is a constant and cannot be changed    

//operations
age=age**2; //to the power 2 

/*OperatorPrecedence: 
brackets
exponents
mult/div
add/sub
*/

//Take input using prompt window
let interest=window.prompt("Whats your interest (coding or programming)?");
console.log(interest); //or console.log(`${interest}); (same thing) 
let age1=window.prompt("Enter your age");
age1+=1;
console.log(age1,typeof age1); //age1 is a string. so ans is 201 (if input was 20)
let age2=Number(window.prompt("Enter your age")); //Type-convertion to number
age2+=1;
console.log(age2,typeof age2); //age2 is a number. so ans is 21 (if input was 20)


//Take input from input box and button
let username;
document.getElementById("SubmitButton").onclick=function(){
    username=document.getElementById("name").value;
    console.log(username);

//Type Conversiion;
let x="0";
let y="";
let z="Hi";
let z1=Boolean(x);
let z2=Boolean(y);
let z3=Number(z);
let z4=Number(x);
let z5=Number(y);
console.log(z1); //true
console.log(z2); //false    
console.log(z3); //NaN (Not a Number)
console.log(z4); //0
console.log(z5); //0



}   

 
