function checkSameDigits(num) {
    let numAsStr = num.toString();
    let isSame = true;
    let sum = 0;


    for (let i = 1; i < numAsStr.length; i++) {
        if (numAsStr[i] !== numAsStr[0]) {
            isSame = false;
            break;
        }
    }

    
    for (let digit of numAsStr) {
        sum += Number(digit);
    }

   
    console.log(isSame);
    console.log(sum);
}
checkSameDigits(2222222);
checkSameDigits(1234)