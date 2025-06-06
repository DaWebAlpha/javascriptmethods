//CONVERT A STRING TO A NUMBER

function changeToNumber(str){
    return parseInt(str);
}

console.log(changeToNumber("2")); // 2
console.log(changeToNumber("pat")); //NaN


//PARSEINT WITH RADIX
function changeToNumBerRadix(str, num){
    return parseInt(str, num);
}

console.log(changeToNumBerRadix("10011", 2));