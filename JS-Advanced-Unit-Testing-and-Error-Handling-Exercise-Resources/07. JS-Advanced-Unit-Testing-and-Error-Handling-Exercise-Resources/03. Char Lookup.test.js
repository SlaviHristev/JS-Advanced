import { describe, it } from "mocha";
import { assert, expect } from "chai";
import { lookupChar } from "./03. Char Lookup.js";

describe('lookupChar function tests', () => {
    it('Should return undefined if first param is not a string', () => {
        assert.equal(lookupChar(22,1), undefined);
    });
    it('Should return undefined if first param is not a string', () => {
        assert.equal(lookupChar([2124,21],1), undefined);
    });
    it('Should return undefined if first param is not a string', () => {
        assert.equal(lookupChar({},1), undefined);
    });
    it('Should return undefined if second param is not a number', () => {
        assert.equal(lookupChar('hello','3'), undefined);
    });
    it('Should return undefined if second param is not a number', () => {
        assert.equal(lookupChar('hello',NaN), undefined);
    });
    it('Should return undefined if second param is not a number', () => {
        assert.equal(lookupChar('hello',undefined), undefined);
    });
    it('Should return undefined if number is with floating point', () =>{
        assert.equal(lookupChar('hello, 2.4'), undefined);
    });
    it('Should return incorrect index if the index is incorrect bigger  number', () => {
        assert.equal(lookupChar('hello', 7), "Incorrect index");
    });
    it('Should return incorrect index if the index is incorrect negative number', () => {
        assert.equal(lookupChar('hello', -5), "Incorrect index");
    });
    it('Should return correct char if  both inputs are correct', () => {
        assert.equal(lookupChar('Hello',1), 'e');
    });
});