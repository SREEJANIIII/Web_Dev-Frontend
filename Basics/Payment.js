const card = document.getElementById("Card");
const upi = document.getElementById("UPI");
const netbanking = document.getElementById("NetBanking");
const submit = document.getElementById("submit");
const result=document.getElementById("Result");
const subChx=document.getElementById("SubChx");

submit.onclick = function(){
    if(!subChx.checked){
        result.textContent = "You must agree to the terms first!";
        return;  // stops execution
    }
    if(card.checked){
        result.textContent="Card Payment Successful";
    }
    else if(upi.checked){
        result.textContent="UPI Payment Successful";
    }
    else if(netbanking.checked){
        result.textContent="Net Banking Payment Successful";
    }
    else{
        result.textContent="Please select a payment method";
    }
}

        
