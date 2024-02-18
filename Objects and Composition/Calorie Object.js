function Calories(arr){
    let storage = {};
    for(let i =0;i < arr.length;i+=2){
        let product = arr[i];
        let count = Number(arr[i+1]);
        storage[product] = count;
    };
    console.log(storage);
}
Calories(['Yoghurt', '48', 'Rise', '138',

'Apple', '52'])