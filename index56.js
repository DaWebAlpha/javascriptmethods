var myArr = [2, 4, 6, 8, 10];
let total = 0;

console.log(myArr.length);


for(let i = 0; i <= myArr.length - 1; i++){
    total += myArr[i];
}

console.log(total);