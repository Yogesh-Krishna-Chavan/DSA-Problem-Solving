let arr = [2,-3,1,4,-5];

function CountNegativeNumbersInArray(arr){
    let counter = 0;
for(let i=0; i < arr.length; i++){
    if(arr[i]<0){
        counter++;
    }
}    
return counter;
}

let result = CountNegativeNumbersInArray(arr);
console.log(result);
