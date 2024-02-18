function fruit(name, grams, pricePerKg){
    let fruitInKg = grams / 1000;
    let totalPrice = fruitInKg * pricePerKg;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${fruitInKg.toFixed(2)} kilograms ${name}.`);

}
fruit('orange', 2500, 1.80)