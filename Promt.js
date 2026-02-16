let username=window.prompt("Please enter your name:");
while(username==="" || username===null){
    username=window.prompt("Please enter your name:");
}
console.log("Hello "+username);