import { describe, it } from "mocha";
import {  expect } from "chai";
import { mathEnforcer } from "./04. Math Enforcer.js";


describe('mathEnforcer', () => {
    describe('addFive', () => {
      it('should add 5 to a positive number', () => {
        const result = mathEnforcer.addFive(3);
        expect(result).to.equal(8);
      });
  
      it('should add 5 to a negative number', () => {
        const result = mathEnforcer.addFive(-3);
        expect(result).to.equal(2);
      });
  
      it('should return undefined for non-number input', () => {
        const result = mathEnforcer.addFive('abc');
        expect(result).to.be.undefined;
      });
  
      it('should work with floating-point numbers within 0.01 precision', () => {
        const result = mathEnforcer.addFive(2.345);
        expect(result).to.be.closeTo(7.345, 0.01);
      });
    });
  
    describe('subtractTen', () => {
      it('should subtract 10 from a positive number', () => {
        const result = mathEnforcer.subtractTen(15);
        expect(result).to.equal(5);
      });
  
      it('should subtract 10 from a negative number', () => {
        const result = mathEnforcer.subtractTen(-5);
        expect(result).to.equal(-15);
      });
  
      it('should return undefined for non-number input', () => {
        const result = mathEnforcer.subtractTen('abc');
        expect(result).to.be.undefined;
      });
  
      it('should work with floating-point numbers within 0.01 precision', () => {
        const result = mathEnforcer.subtractTen(10.345);
        expect(result).to.be.closeTo(0.345, 0.01);
      });
    });
  
    describe('sum', () => {
      it('should return the sum of two positive numbers', () => {
        const result = mathEnforcer.sum(5, 7);
        expect(result).to.equal(12);
      });
  
      it('should return the sum of a positive and a negative number', () => {
        const result = mathEnforcer.sum(5, -3);
        expect(result).to.equal(2);
      });
  
      it('should return undefined for non-number input', () => {
        const result = mathEnforcer.sum('abc', 5);
        expect(result).to.be.undefined;
      });
  
      it('should work with floating-point numbers within 0.01 precision', () => {
        const result = mathEnforcer.sum(1.234, 2.345);
        expect(result).to.be.closeTo(3.579, 0.01);
      });
      it('should return 0 when one of the parameters is 0', () => {
        const result = mathEnforcer.sum(0, 5);
        expect(result).to.equal(5);
      });
    
      it('should return 0 when both parameters are 0', () => {
        const result = mathEnforcer.sum(0, 0);
        expect(result).to.equal(0);
      });
    });
  });