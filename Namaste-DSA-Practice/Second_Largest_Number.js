let arr = [3,5,6,4,1,8,7,9,2 ]

function secondLargestNum(arr){
        let firstLargest = -Infinity;
        let secondLargest = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > firstLargest){
            secondLargest = firstLargest
            firstLargest = arr[i] 
        }
        else if(arr[i] > secondLargest){
            secondLargest = arr[i]
        }
    }
    return secondLargest;
}

let result = secondLargestNum(arr)

console.log("result=",result);
