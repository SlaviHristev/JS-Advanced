function fruits(fruit,weigth, price){
    let weigthInKg = weigth / 1000;
    let totalPrice = weigthInKg * price;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weigthInKg.toFixed(2)} kilograms ${fruit}.`);

}
fruits('orange', 2500, 1.80)