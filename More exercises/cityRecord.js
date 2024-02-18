function cityRecord(cityName, population, treasury){
    let city = {};
    city.name = cityName;
    city.population = Number(population);
    city.treasury = Number(treasury);

    return city;

}
cityRecord('Tortuga',

7000,

15000)