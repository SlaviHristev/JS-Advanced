function carFactory(order){
    let car = {};
    let engine = {};
    let carriage = {};

    car.model = order.model;

    if(order.power <= 90){
        engine = {
            power: 90,
            volume: 1800,
        }
    }else if(order.power <= 120){
        engine = {
            power: 120,
            volume: 2400,
    }
    }else if(order.power > 120){
        engine = {
            power: 200,
            volume: 3500,
    }
    }
    car.engine = engine;
    carriage.type = order.carriage;
    carriage.color = order.color;
    car.carriage = carriage;

    if(order.wheelsize %2 === 0){
        order.wheelsize--; 
    }
    car.wheels = [order.wheelsize,order.wheelsize,order.wheelsize,order.wheelsize];
    return car;

    
}
carFactory({ model: 'VW Golf II',

power: 90,

color: 'blue',

carriage: 'hatchback',

wheelsize: 14 })