function rotateArray(array,rotations){
    for(let i = 0; i < rotations;i++){
        let temp = array.pop();
        array.unshift(temp);
    }
    console.log(array.join(' '));

}
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15)