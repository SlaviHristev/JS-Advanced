function squareOfStars(num){

    let result = '';

    for(let i = 0; i < num; i++){
        result += '* '.repeat(num) + '\n';
        
    }
    console.log(result);

}
squareOfStars(22)