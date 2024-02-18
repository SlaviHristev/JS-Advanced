function addRemove(array){
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] === 'add'){
            newArr.push(i + 1)
        }else{
            newArr.pop();
        }
    }
    if (newArr.length === 0) {
        console.log('Empty');
    }else{
        console.log(newArr.join('\n'));
    }

}
addRemove(['add',

'add',

'add',

'add'])