const { assert } = require('chai');
let carService = require('./03. Car Service');


describe('carService unit tests', function() {
    
 describe('isItExpensive function tests', function() {

 it('Should return an issue if the input is engine', function() {
    assert.equal(carService.isItExpensive('Engine'), `The issue with the car is more severe and it will cost more money`)
 });
 it('SHould return an issue if the input is transmission', () =>{
    assert.equal(carService.isItExpensive('Transmission'),  `The issue with the car is more severe and it will cost more money`)
 });
 it('Should return that is cheaper if other string input is set', () => {
    assert.equal(carService.isItExpensive('Tire'), `The overall price will be a bit cheaper`)
 });
 });
 describe('discount function tests', () =>{
    it('If the inputs are not numbers, throw an error', ()=>{
        assert.throws(() => carService.discount('11',2),"Invalid input");
    });
    it('If the inputs are not numbers, throw an error', ()=>{
        assert.throws(() => carService.discount(22,'13'),"Invalid input");
    });
    it('Should return a meesage if the parts are less than 2',() =>{
        assert.equal(carService.discount(1,22),"You cannot apply a discount")
    });
    it('Should return a meesage if the parts are equal 2',() =>{
        assert.equal(carService.discount(2,22),"You cannot apply a discount")
    });
    it('Should return a correct message if the parts are 7', () =>{
        assert.equal(carService.discount(7,10), `Discount applied! You saved 1.5$`)
    });
    it('Should return a correct message if the parts are more than 7',() =>{
        assert.equal(carService.discount(10,10),`Discount applied! You saved 3$`)
    });
 });
 describe('partsToBuy function tests',()=>{
    it('Should throw an error if invlaid inputs',()=>{
        assert.throws(()=> carService.partsToBuy('str,[array,123]'),"Invalid input");
    });
    it('Should return 0 if partsCatalog is empty',()=>{
        assert.equal(carService.partsToBuy([],["blowoff valve"]),0)
    });
    it('Should return valid price',() =>{
        assert.equal(carService.partsToBuy([{ part: "blowoff valve", price: 145}, { part: "coil springs", price: 230 }],["blowoff valve", "injectors"]), 145);
    })
 })
});