import { describe, it } from "mocha";
import { assert, expect } from "chai";
import { isOddOrEven } from "./02. isOddEven.js";


describe('isOddEven unit testing', () =>{
    describe('Undefined testing',()=>{

        it('Should return undefined if passed a number', () =>{
            expect(isOddOrEven(2)).to.equal(undefined);
        });
        it('Should return undefined if passed an array', () => {
            expect(isOddOrEven([])).to.equal(undefined);
        });
    });

    describe('Odd number length testing', () =>{
        it('Should return odd if the string has odd length', () =>{
            expect(isOddOrEven('two')).to.equal('odd')
        })
    });
    describe('Even number length test',() =>{
        it('Should return even if the string has even length', () =>{
            expect(isOddOrEven('four')).to.equal('even');
        })
    })
})