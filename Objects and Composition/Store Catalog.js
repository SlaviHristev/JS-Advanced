function storeCatalogue(input) {
    let products = {};

    for (const line of input) {
        let [productName, productPrice] = line.split(' : ');
        productPrice = Number(productPrice);

        let initialLetter = productName[0].toUpperCase();

        if (!products.hasOwnProperty(initialLetter)) {
            products[initialLetter] = [];
        }

        products[initialLetter].push({ name: productName, price: productPrice });
    }


    let sortedGroups = Object.keys(products).sort();


    for (const group of sortedGroups) {
        console.log(`${group}`);
        let sortedProducts = products[group].sort((a, b) => a.name.localeCompare(b.name));
        for (const product of sortedProducts) {
            console.log(`  ${product.name}: ${product.price}`);
        }
    }
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'Deodorant : 10',
    'Banana : 2',
    'TV : 1499',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])