function multiplyArray(arr){
    let product = 1
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            product *= arr[i][j];

        }
    }
    return product;
}


let arr = [[1, 2], [3, 4], [5, 6, 7]];
console.log(multiplyArray(arr));