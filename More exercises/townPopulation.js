function townPopulation(array){
    let towns = {};

    array.forEach(line => {
        let [townName, population] = line.split(' <-> ');
        if(!towns.hasOwnProperty(townName)){
            towns[townName] = Number(population);
        }else{
            towns[townName] += Number(population);
        }
        
    });
    for (const key in towns) {
        console.log(`${key} : ${towns[key]}`);
    }

}
townPopulation(['Sofia <-> 1200000',

'Montana <-> 20000',

'New York <-> 10000000',

'Washington <-> 2345000',

'Las Vegas <-> 1000000'])