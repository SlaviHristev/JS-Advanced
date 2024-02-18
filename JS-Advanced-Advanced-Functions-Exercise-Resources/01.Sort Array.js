function sorting(arr, instruction){

    if(instruction === 'asc'){
        arr.sort((a,b) => a - b)
    }else{
        arr.sort((a,b) => b - a)
    }
  
    return arr;
}

sorting(
    [14, 7, 17, 6, 8], 'asc'
)