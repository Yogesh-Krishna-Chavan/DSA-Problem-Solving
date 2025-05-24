function find_Second_Largest(arr) {
    let unique = [...new Set(arr)];
    unique.sort((a, b) => b - a);
    return unique[1];
}

console.log(find_Second_Largest([3, 5, 2, 6, 4, 3, 1]));
