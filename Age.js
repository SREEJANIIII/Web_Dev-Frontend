
let submit = document.getElementById("submit");
submit.onclick = function(){
    let age = document.getElementById("age").value;
    if(age<18)
        {
            let result=document.getElementById("Result");
            result.textContent="You are not old enough to vote";
    }
    else{
       let result=document.getElementById("Result");
            result.textContent="You are old enough to vote";
    }
}
