const { expect } = require('chai');

const planYourTrip = require('./planYourTrip');


describe('planYourTrip unit tests', () => {
    describe("choosingDestination function tests", function() {
        it("should throw an error for invalid year", function() {
            expect(() => planYourTrip.choosingDestination("Ski Resort", "Winter", 2023)).to.throw("Invalid Year!");
        });

        it("should throw an error for invalid destination", function() {
            expect(() => planYourTrip.choosingDestination("Beach", "Summer", 2024)).to.throw("This destination is not what you are looking for.");
        });

        it("should return the correct message for Ski Resort destination in Winter season", function() {
            expect(planYourTrip.choosingDestination("Ski Resort", "Winter", 2024)).to.equal("Great choice! The Winter is the perfect time to visit the Ski Resort.");
        });

        it("should return the correct message for Ski Resort destination in a non-Winter season", function() {
            expect(planYourTrip.choosingDestination("Ski Resort", "Summer", 2024)).to.equal("Consider visiting during the Winter for the best experience at the Ski Resort.");
        });

    });

    describe("exploreOptions function tests", function() {
        it("should return the modified array of activities", function() {
            const activities = ["Skiing", "Snowboarding", "Winter Hiking"];
            expect(planYourTrip.exploreOptions(activities, 1)).to.equal("Skiing, Winter Hiking");
        });

        it("should throw an error for invalid activity index", function() {
            const activities = ["Skiing", "Snowboarding", "Winter Hiking"];
            expect(() => planYourTrip.exploreOptions(activities, 3)).to.throw("Invalid Information!");
        });

        it("should throw an error for invalid activities parameter", function() {
            expect(() => planYourTrip.exploreOptions("Not an array", 0)).to.throw("Invalid Information!");
        });

    });

    describe("estimateExpenses function tests", function() {
        it("should return budget-friendly message for total cost <= $500", function() {
            expect(planYourTrip.estimateExpenses(100, 4)).to.equal("The trip is budget-friendly, estimated cost is $400.00.");
        });

        it("should return plan accordingly message for total cost > $500", function() {
            expect(planYourTrip.estimateExpenses(300, 3)).to.equal("The estimated cost for the trip is $900.00, plan accordingly.");
        });

        it("should throw an error for invalid distanceInKilometers", function() {
            expect(() => planYourTrip.estimateExpenses("Not a number", 4)).to.throw("Invalid Information!");
        });

        it("should throw an error for invalid fuelCostPerLiter", function() {
            expect(() => planYourTrip.estimateExpenses(300, -3)).to.throw("Invalid Information!");
        });

        it("should throw an error for undefined distanceInKilometers", function() {
            expect(() => planYourTrip.estimateExpenses(undefined, 4)).to.throw("Invalid Information!");
        });

        it("should throw an error for undefined fuelCostPerLiter", function() {
            expect(() => planYourTrip.estimateExpenses(300, undefined)).to.throw("Invalid Information!");
        });

    });
});