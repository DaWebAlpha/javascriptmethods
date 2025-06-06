//TERNARY OPERATOR

function checkEqual(a, b){
    return a === b ? "true": "false";

}

console.log(checkEqual(5, 5));

function checkSign(a){
    return a > 0 ? "positive" : 
    a < 0 ? "negative" : "zero";
}

console.log(checkSign(-2));
console.log(checkSign(2));
console.log(checkSign(0));