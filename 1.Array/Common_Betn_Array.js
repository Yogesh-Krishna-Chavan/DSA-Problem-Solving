function Common_Betn_Array(arr1, arr2) {
    let set2 = new Set(arr2);
    return arr1.filter(val => set2.has(val));
 }


console.log(Common_Betn_Array([1, 2, 3], [2, 3, 4]));
