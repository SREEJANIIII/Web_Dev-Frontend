function rollDice(){
    const numDice = document.getElementById('numDice').value;
    const resultDiv = document.getElementById('result');
    const dice = document.getElementById('dice');
    let nums=[];
    let imgs=[];
    for(let i=0;i<numDice;i++){
        nums.push(Math.floor(Math.random()*6)+1);
        imgs.push(`<img src="Dice_images/${nums[i]}.png" alt="dice">`);

        
}
resultDiv.textContent = `DICE: ${nums.join(', ')}`;
dice.innerHTML=imgs.join('');
}