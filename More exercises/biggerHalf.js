function biggerHalf(array){
    let bigger = array.sort((a,b) => a - b).slice(Math.min(array.length / 2));
    return bigger;

}
biggerHalf([3, 19, 14, 7, 2, 19, 6])