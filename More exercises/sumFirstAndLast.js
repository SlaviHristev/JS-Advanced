function sumFirstLast(array){
    let firstNum = Number(array.shift());
    let lastNum = Number(array.pop());

    let sum = firstNum + lastNum;

    console.log(sum);

}
sumFirstLast(['20', '30', '40']);