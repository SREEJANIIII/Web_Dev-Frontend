let maximum=100;
let minimum=1;
let randomNumber=Math.floor(Math.random()*(maximum-minimum+1))+minimum;
let guess, attempt=0;
let c=true;
while(c)
{
    guess=window.prompt("Guess a no. btw "+minimum+" and "+maximum+" :");
    guess=Number(guess);
    if(isNaN(guess) || guess< minimum || guess>maximum || guess ==0)
    {
        window.alert("Please enter a valid number between "+minimum+" and "+maximum);
    }
    else if(guess<randomNumber)
    {
        window.alert("Too low! Try again.");
        attempt++;
    }
    else if(guess>randomNumber)
    {
        window.alert("Too high! Try again.");
        attempt++;
    }
    else
    {
        attempt++;
        window.alert("Congratulations! You guessed the number in "+attempt+" attempts.");
        c=false;
    }
}