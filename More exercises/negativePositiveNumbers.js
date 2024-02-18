function numbers (array){
    let newArr = [];

    array.forEach(element => {
        if(element < 0){
            newArr.unshift(element);
        }else{
            newArr.push(element)
        }
        
    });
    console.log(newArr.join('\n'));

}
numbers([7, -2, 8, 9])