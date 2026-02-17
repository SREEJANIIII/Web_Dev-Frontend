function avg(...nums){
    let sum=0;
    for(let num of nums){
        sum+=num;
    }
    return sum/nums.length;
}
console.log(avg(1,2,3,4,5));