let arr = [1,2,3,6,8,7,9,11,5,-18];

function LargestElementInArray(arr){
    let LargestElement = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > LargestElement){
            LargestElement = arr[i]
        }
    }
    return LargestElement;
}

let result = LargestElementInArray(arr);
console.log("Result=",result);
