function extract(arr) {
    if (arr.length === 0) {
        return [];
    }

    let newArr = [arr[0]];  
    let biggest = arr[0];  

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= biggest) {
            newArr.push(arr[i]);
            biggest = arr[i];
        }
    }

    return newArr;
}
extract([1,3,8, 4, 10, 12, 3, 2, 24])
extract([20,10,2, 15, 6, 1])