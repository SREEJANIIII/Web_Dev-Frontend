const tempValue=document.getElementById("temp");
const result=document.getElementById("result");
const tempType=document.getElementById("toCelsius");

function convertTemp(){
    let temp=tempValue.value;
    if(temp===""||temp==null){
        alert("Please enter a value");
        return;
    }
    temp=Number(temp);
        if(isNaN(temp)){
            alert("Please enter a valid number");
            return;
        }
        else if(tempType.checked){
            let celsius=(temp-32)*5/9;
            result.innerText=`${temp}°F is equal to ${celsius.toFixed(2)}°C`;
        }
       else if(!tempType.checked && !document.getElementById("toFahrenheit").checked) {
    alert("Please select a temperature unit");
    return;
}

        else{
            let fahrenheit=(temp*9/5)+32;
            result.innerText=`${temp}°C is equal to ${fahrenheit.toFixed(2)}°F`;
        }
    }