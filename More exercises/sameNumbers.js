function sameNums(num){
    let result = 0;
    let numAsString = num.toString();
    let firstDigit = numAsString[0];
    let isTrue = true;

    for(let i = 0; i < numAsString.length;i++){
        result += Number(numAsString[i]);
        if(firstDigit === numAsString[i]){
            isTrue = true;
        }else{
            isTrue = false;
        }
    }
    console.log(isTrue);
    console.log(result);

}
sameNums(2222222)