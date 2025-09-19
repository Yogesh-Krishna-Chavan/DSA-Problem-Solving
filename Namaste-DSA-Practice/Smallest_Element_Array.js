let arr = [0,1,2,3,-2,5,-6,7];

function smallestElementInArray(arr){
     let smallestElement = Infinity;
     for(let i = 0; i<arr.length; i++){
        if(arr[i] < smallestElement){
            smallestElement = arr[i]
        }
     }
     return smallestElement;
}

let result = smallestElementInArray(arr);
console.log("Result",result);
