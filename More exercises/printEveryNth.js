function printNth(array, step){
    let newArr = [];

    for(let i = 0; i < array.length;i+= step){
        newArr.push(array[i]);
    }
    return newArr;

}
printNth(['5',

'20',

'31',

'4',

'20'],

2)