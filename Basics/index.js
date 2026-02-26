console.log("HELLO"); //Output
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

//console.log(this.name); //this refers to the global object (window in browsers) and name is not defined in the global object, so it will return undefined. If we define a name property in the global object, it will return that value. For example, if we add window.name="GlobalName"; then console.log(this.name); will return "GlobalName".
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

//super keyword: Used to call the constructor of the parent class and to access the properties and methods of the parent class. It is used in the child class to call the constructor of the parent class and to access the properties and methods of the parent class.
class Dog extends Animal{
    constructor(name,breed){
        super(name); //Calling the constructor of the parent class (Animal) to initialize the name property
        // or super(); this.name=name;
        this.breed=breed; //Initializing the breed property of the Dog class
    }
    bark(){
        console.log(`${this.name} is barking`);
    }
}
let dog1=new Dog("Buddy","Golden Retriever");
dog1.eat(); //Buddy is eating (inherited from Animal class)
dog1.bark(); //Buddy is barking (defined in Dog class)
console.log(dog1.breed); //Golden Retriever (defined in Dog class)

//Deconstruction: A syntax to unpack values from arrays or properties from objects into distinct variables. It is used to extract values from arrays or objects and assign them to variables in a more concise way.
arr=[1,2,3];
[arr[0],arr[2]]= [arr[2],arr[0]]; //Swapping the first and third elements of the array using deconstruction
console.log(arr); // [3,2,1]

//Sorting using .sort(): Used to sort data lexicographically. 1,2,10 will be sorted as 1,10,2 because it sorts based on the first character. To sort numbers in ascending order, we can pass a compare function to the sort method.
let num3=[1,2,10,5,3];
num3.sort((a,b)=>a-b); //Sorting numbers in ascending order using a compare function. If the result is negative, a is sorted before b. If the result is positive, b is sorted before a. If the result is 0, the order of a and b is unchanged.
console.log(num3); // [1,2,3,5,10]
num3.sort((a,b)=>b-a); //Sorting numbers in descending order using a compare function. If the result is negative, b is sorted before a. If the result is positive, a is sorted before b. If the result is 0, the order of a and b is unchanged.
console.log(num3); // [10,5,3,2,1]
 let per=[{name:"Sreejani",age:19},{name:"Sanvi",age:18},
{name:"Anvi",age:20}];
per.sort((a,b)=>a.age-b.age); //Sorting an array of objects based on the age property in ascending order using a compare function. If the result is negative, a is sorted before b. If the result is positive, b is sorted before a. If the result is 0, the order of a and b is unchanged.
console.log(per); // [{name:"Sanvi",age:18},{name:"Sreejani",age:19},{name:"Anvi",age:20}]

//Shuffling of an array
let arr4=[1,2,3,4,5];
function shuffle(array){
    for(let i=array.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1)); //Generating a random index from 0 to i
        [array[i],array[j]]=[array[j],array[i]]; //Swapping the elements at index i and j using deconstruction
    }
}
shuffle(arr4);
console.log(arr4); //The output will be a shuffled version of the original array [1,2,3,4,5]

//Closures: A closure is a function that has access to its own scope, the outer function's scope, and the global scope. It is created when a function is defined inside another function and the inner function has access to the variables of the outer function even after the outer function has returned.
function outer(){
    let count=0; //count is a variable in the outer function's scope
    function inner(){
        count++; //inner function has access to the count variable of the outer function's scope
        console.log(count);
    }
return inner; //Returning the inner function to create a closure
}outer() ;//To see the output, we need to call the inner function after calling the outer function. For example, if we do const counter=outer(); counter(); counter(); counter(); then we will see the output 1, 2, 3 because the inner function is called three times and it increments the count variable each time.
    
//Using objects to create closures
function createCounter(){
    let count=0; //count is a variable in the outer function's scope
    function inner(){
        count++;
        console.log(count);
    }
    function inner2(){
        count--;
        console.log(count);
    }
return {inner,inner2}; //Returning an object with the inner and inner2 functions as properties to create a closure
}
const counter1=createCounter(); //counter1 is a closure that has access to the count variable of the outer function's scope
counter1.inner(); //1
counter1.inner(); //2
counter1.inner(); //3
counter1.inner2(); //2
counter1.inner2(); //1
console.log(counter1.count); //undefined because count is not a property of the counter1 object, it is a variable in the outer function's scope that is accessed by the inner function through the closure.

//Modules: A module is a file that contains code that can be imported and used in other files. It is used to organize code and to reuse code in different parts of the application. In JavaScript, we can use the 'export' keyword to export functions, objects, or values from a module and the 'import' keyword to import them into another module. Modules are supported in modern browsers and in Node.js.
import {getCircumference,getArea,getVolume} from './mathUtil.js'; //Importing the functions from the mathUtil module
console.log(getCircumference(5)); //31.400000000000002
console.log(getArea(5)); //78.5
console.log(getVolume(5)); //523.3333333333334 

//Synchronous and Asynchronous JavaScript: Synchronous JavaScript is executed in a single thread and each operation is executed one after the other. Asynchronous JavaScript is executed in a non-blocking way and allows multiple operations to be executed at the same time. Asynchronous JavaScript is achieved using callbacks, promises, and async/await. It is used to perform tasks that take time to complete, such as fetching data from an API or reading a file, without blocking the main thread of execution.

function Func1(callback){
    setTimeout(()=>{
        console.log("Function 1");
        callback(); //Calling the callback function after the asynchronous operation is complete
    },20000); //Simulating an asynchronous operation that takes 2 seconds to complete    
}
function Func2(){
    console.log("Function 2");
}
Func1(Func2); //Function 1 will be printed after 2 seconds and then Function 2 will be printed immediately after that because it is called as a callback function in Func1.

//Exception handelling
//try(), catch(), finally()
try{
    console.log(x3); //This will throw an error because x3 is not defined
    let x=10;
    let y=0;
    if(y===0){
        throw new Error("Cannot divide by zero"); //Throwing an error if y is 0 to prevent division by zero
    }
    let z=x/y;
    console.log(z);

}
catch(error){
    console.error(error.message); //Catching the error and printing the error message
}
finally{
    console.log("This will always be executed"); //The finally block will always be executed regardless of whether an error was thrown or not
}

//DOM manipulation: It is the process of using JavaScript to dynamically change a webpage’s content, structure, or styles after it loads.
//Element selector is a CSS selector that targets HTML elements by their tag name (like p, div, h1) to apply styles or access them in JavaScript.

//DOM Navigation
//.firstElementChild
//.lastElementChild
let fruits=document.querySelectorAll("ul");
fruits.forEach((f) =>{let lastFruit=f.lastElementChild;
    lastFruit.style.backgroundColor="yellow";
})

//.nextElementSibling
//.previousElementSibling
let apple=document.getElementById("Apple");
let nxtEle=apple.nextElementSibling;
nxtEle.style.backgroundColor="red"

//.parentElement
const element=document.getElementById("Potato");
let veg=element.parentElement;
veg.style.backgroundColor="orange"

//.children
let elements=document.getElementById("fruits");
let children=elements.children;
children[0].style.backgroundColor="green";

//Add and edit html elements
//1. Create and add an element
let newh1=document.createElement("h1");

//2. Add properties to it
newh1.textContent="Hello";
newh1.style.backgroundColor="red";

//3. Append the element to the dom (Below the page) or Prepend the element to the dom (Add it below the page)
document.body.append(newh1);
document.body.prepend(newh1);
//OR
document.getElementById("box1").prepend(newh1);

//Using insertBefore(element, the element before whom u want to insert)
document.body.insertBefore(newh1,box2);

//4. Remove the element
document.body.removeChild(newh1); //parentNode will be the last place where it has been kept. 
newh1.remove(); //Removes from every place

//addEventListener() is a method used to attach an event (like a click, key press, or mouse movement) to an element, so a specific function runs when that event happens.

const myBox=document.getElementById("box2");
console.log(myBox);

function Clicking(event){ //event="click"
    event.target.style.backgroundColor="red";
    event.target.textContent="OUCH😿";
}
myBox.addEventListener("click",Clicking); //events are click, mouseover(hover), mouseout(to reset the element after the curser moves out)
myBox.addEventListener("mouseout",event=>{
    event.target.style.backgroundColor="yellow";
    event.target.textContent="HELLO 🙂  ";
})

//When u want to change the things of myBox by clicking on a different button
const myBttn=document.getElementById("MyBttn");
console.log(myBox);

function Clicking2(event){ //event="click"
   myBox.style.backgroundColor="red";
    myBox.textContent="OUCH😿";
}
myBttn.addEventListener("click",Clicking2);
//eventListener- Used to listen for specific events to create interactive pages
//events:keydown (when the arrows are pressed),keyup (when the arrows are released)

//event.target: when working with mouse events
//event.key: when working with key events
//event.preventDefault()- To prevent default behaiviours of website and set them up manually