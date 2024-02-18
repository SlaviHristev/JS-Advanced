function smallestTwo(array){
    array.sort((a,b) => a - b);
    let smallest = array.slice(0,2)

    console.log(smallest.join(' '));

}
smallestTwo([30, 15, 50, 5]);