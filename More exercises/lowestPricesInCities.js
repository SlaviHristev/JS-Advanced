function lowestPrices(array){
    let towns = [];

    array.forEach(line => {
        let [townName, product, price] = line.split(' | ');
        price = Number(price);

        if(!towns.find(product => curTown.product === product)){
            let curTown = {townName, product, price};
            towns.push(curTown);
        }else{
            if(curTown.price > price){
                let newTown = {townName, product, price};
                let index = towns.indexOf(curTown);
                towns.splice(index, 1, newTown);
            }
        }
        
    });

}
lowestPrices(['Sample Town | Sample Product | 1000',

'Sample Town | Orange | 2',

'Sample Town | Peach | 1',

'Sofia | Orange | 3',

'Sofia | Peach | 2',

'New York | Sample Product | 1000.1',

'New York | Burger | 10'])