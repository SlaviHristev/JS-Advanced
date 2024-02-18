function calorieObj(array){
    let products = {};

    for(let i = 0; i < array.length; i += 2){
        let product = array[i];
        let calories = Number(array[i + 1]);

        products[product] = calories;
    }
    console.log(products);

}
calorieObj(['Yoghurt', '48', 'Rise', '138',

'Apple', '52'])