function lowestPrices(input) {
    let productInfo = {};

    for (const line of input) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);

        if (!productInfo.hasOwnProperty(product) || price < productInfo[product].price) {
            productInfo[product] = { price, town };
        }
    }

    for (const product in productInfo) {
        console.log(`${product} -> ${productInfo[product].price} (${productInfo[product].town})`);
    }
}

lowestPrices(['Sample Town | Sample Product | 1000',

'Sample Town | Orange | 2',

'Sample Town | Peach | 1',

'Sofia | Orange | 3',

'Sofia | Peach | 2',

'New York | Sample Product | 1000.1',

'New York | Burger | 10'])