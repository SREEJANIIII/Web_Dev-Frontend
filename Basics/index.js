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

//Function Callbacks: A callback is just: A function passed as an argument to another function, to be called later. It is used when we r not sure how much time an operation will take and so that the next operation is done only after it and not before.
function greet (callback){
    console.log("Hello");
    callback();
}
function bye(){
    console.log("Goodbye");
}

greet(bye); //Hello Goodbye

//.forEach(): Used for arrays to pass each element of the array to a callback function. Passes aruments as, (the array, index, new array)
let arr=[1,2,3,4,5];
arr.forEach(double);
function double(num,index, element){
    element[index]=num*2;
    console.log(element[index]);
}
console.log(arr); // [2,4,6,8,10]

//.map()
let arr1=[1,2,3,4,5];
let newArr=arr1.map(double2);
function double2(num){
    return num*2;
}
console.log(newArr); // [2,4,6,8,10]
console.log(arr1); // [1,2,3,4,5] (original array is not changed)

//.filter(): Used to filter out elements from an array based on a condition. REturns an array. Does not alter the original array.
let arr2=[1,2,3,4,5];
let evenArr=arr2.filter(isEven);
function isEven(num){
    return num%2===0; //returns true if num is even, false otherwise
}
console.log(evenArr); // [2,4]
console.log(arr2); // [1,2,3,4,5] (original array is not changed)

//.reduce(): Used to reduce an array to a single value based on a function. REturns a single value. Does not alter the original array.
let arr3=[1,2,3,4,5];
let sum=arr3.reduce(add);
function add(acc,num){
    return acc+num; //acc is the accumulated value and num is the current value its 0 in the first iteration and then becomes the result of the previous iteration
}
console.log(sum);

//Arrow Functions: A shorter syntax for writing functions. They do not have their own 'this' keyword and are not suitable for methods in objects.
let add2=(a,b)=>{return(a+b)}; //Arrow function with block body. Need to use return statement to return a value.; //Arrow function with block body. Need to use return statement to return a value.
console.log(add2(5,4)); //9

const num=[1,2,3,4,5,6,];
const sq=num.map((num)=>num**2); //Arrow function with concise body. The expression is returned implicitly.
console.log(sq); // [1,4,9,16,25,36]

//setTimeout(): Used to execute a function after a specified delay in milliseconds. It is a callback function.
setTimeout(hello,3000); //Hello will be printed after 3 seconds. Hello is the func callback;
function hello(){
    console.log("Hello");
}

//OBJECTS: A collection of properties and methods. Properties are variables that belong to the object and methods are functions that belong to the object.
let person1={
    name:"Sreejani",
    age:19,
    eat: () =>{
        console.log("Eating maggie");
    }
}
console.log("Hello "+person1.name); //Hello Sreejani
person1.eat(); //Eating maggie

//this keyword: Refers to the current object. It is used to access the properties and methods of the current object.
let person2={
    name:"Sreejani",
    age:19,
    eat: function(){
        console.log(`Eating maggie. My name is ${this.name}`); //this.name refers to the name property of the current object (person2)
    }
}
person2.eat(); //Eating maggie. My name is Sreejani

console.log(this.name); //this refers to the global object (window in browsers) and name is not defined in the global object, so it will return undefined. If we define a name property in the global object, it will return that value. For example, if we add window.name="GlobalName"; then console.log(this.name); will return "GlobalName".
//this keyword does not work in arrow functions because they do not have their own 'this' keyword. They inherit 'this' from the parent scope. So if we use 'this' in an arrow function, it will refer to the 'this' of the parent scope. For example, if we use 'this.name' in an arrow function inside an object method, it will refer to the global object and not the object itself.

//Constructor Functions: Used to create multiple objects with the same properties and methods. They are defined using a function and the 'new' keyword is used to create an instance of the object.
function Person(name,age){
    this.name=name;
    this.age=age;
    this.eat=function(){
        console.log(`Eating maggie. My name is ${this.name}`);
    }
}
let person3=new Person("Sreejani",19);
console.log(person3.name); //Sreejani
person3.eat(); //Eating maggie. My name is Sreejani

//Classes: A syntactical sugar over constructor functions. They are defined using the 'class' keyword and the 'constructor' method is used to initialize the properties of the object. The methods are defined inside the class body and do not need to be defined inside the constructor.
class Persons{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){
        console.log(`Eating maggie. My name is ${this.name}`);
    }
}

let person4=new Persons("Sreejani",19);
console.log(person4.name); //Sreejani
person4.eat(); //Eating maggie. My name is Sreejani

//static keyword: Used to define static methods in a class. Static methods are called on the class itself and not on the instances of the class. They are defined using the 'static' keyword and can be called using the class name. Do not have access to 'this' keyword because they are not called on instances of the class. Do not require objects to be called.
 class MathUtils{
    static PI=3.14;
    static area(radius){
        return this.PI*radius**2; //this.PI refers to the static property PI of the class MathUtils
    }
}
console.log(MathUtils.PI); //3.14
console.log(MathUtils.area(5)); //78.5

class ppl{
    static userCount=0;
    constructor(name){
        this.name=name;
        ppl.userCount++; //Incrementing the static property userCount every time a new instance is created
    }
    static getUserCount(){
        return ppl.userCount; //Accessing the static property userCount using the class name
    }
}
    let ppl1=new ppl("Sreejani");
    const ppl2=new ppl("Sanvi");
    console.log(ppl.getUserCount()); //2
    console.log(ppl1.name); //Sreejani
    console.log(ppl2.name); //Sanvi

//Inheritance: A mechanism to create a new class (child class) that inherits the properties and methods of an existing class (parent class). The child class can also have its own properties and methods. The 'extends' keyword is used to create a child class.
class Animal{
    constructor(name){
        this.name=name;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }   
}
class rabbit extends Animal{
    name="Rabbit";
    run(){
        console.log(`${this.name} is running`);
    }
}
class fish extends Animal{
    name="Fish"
    swim(){
        console.log(`${this.name} is swimming`);
    }
}
class hawk extends Animal{
    name="Hawk"
    fly(){
        console.log(`${this.name} is flying`);
    }
}

let rabbit1=new rabbit();
rabbit1.eat(); //Rabbit is eating
rabbit1.run(); //Rabbit is running
let fish1=new fish();
fish1.eat(); //Fish is eating
fish1.swim(); //Fish is swimming
let hawk1=new hawk();
hawk1.eat(); //Hawk is eating
hawk1.fly(); //Hawk is flying