function processOddNums(array){
    let newArr = [];
    for(let i = 0; i < array.length; i++){
        if(i % 2 !== 0){
            newArr.push(array[i])
        }
    }
    let arr = newArr.map(x => x * 2).reverse();
    return arr;

}
processOddNums([10, 15, 20, 25]);