// Generate random Number with a range

function WithinARange(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(WithinARange(1, 9));