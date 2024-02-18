function evenPosition(array){
    let newArr = [];

    for(let i = 0;i < array.length;i++){
        if(i % 2 === 0){
            newArr.push(array[i])
        }
    }
    console.log(newArr.join(' '));

}
evenPosition(['20', '30', '40',

'50', '60']);