// Each num to square

function squareEachNumber(num) {
    let result = "";
    num = num.toString().split('');
    for(let i = 0; i < num.length; i++) {
        result += Math.pow(num[i], 2);
    }

    return parseInt(result);
}

console.log(squareEachNumber(3219)); 