const { assert } = require("chai");
const bookSelection = require("./bookSelection");

describe('bookSelection fucntion tests', function() {
    describe("isGenreSuitible function tests", function() {
    it("If the genre is horror and age is less than 12 return message", function() {
        assert.equal(bookSelection.isGenreSuitable('Horror',11), `Books with Horror genre are not suitable for kids at 11 age`);
     });
     it("If the genre is Thriller and age is less than 12 return message", function() {
        assert.equal(bookSelection.isGenreSuitable('Thriller',11), `Books with Thriller genre are not suitable for kids at 11 age`);
     });
     it('Should return that books are suitible if the age is above 12 if its horror', ()=>{
        assert.equal(bookSelection.isGenreSuitable('Horror',15),`Those books are suitable`);
     });
    });
    describe('isItAffordable function tests', () =>{
        it('Should throw an error if inputs are not numbers', ()=>{
            assert.throws(()=> bookSelection.isItAffordable(12,'21', "Invalid input"))
        });
        it('Should return no money if budget is less than price', () => {
            assert.equal(bookSelection.isItAffordable(10,6), "You don't have enough money")
        });
        it('Should return that you buy the book if conditions are correct', () => {
            assert.equal(bookSelection.isItAffordable(10,15), `Book bought. You have 5$ left`)
        })
    });
    describe('suitibleTitles function tests',() =>{
        it('should throw an error if books is invalid parameter',() =>{
            assert.throws(()=> bookSelection.isItAffordable('12','str'), "Invalid input");
        });
        it('should throw an error if wantedGenre is invalid parameter',() =>{
            assert.throws(()=> bookSelection.isItAffordable([{title: "da vinci"}],2121), "Invalid input");
        });
        it('should return the titles of books that match the wantedGenre', () => {
            const books = [
                { title: "The Da Vinci Code", genre: "Thriller" },
                { title: "Dune", genre: "Science Fiction" },
                { title: "The Hobbit", genre: "Fantasy" },
                { title: "1984", genre: "Science Fiction" }
            ];
            const wantedGenre = "Science Fiction";
            const result = bookSelection.suitableTitles(books, wantedGenre);
            assert.deepEqual(result, ["Dune", "1984"]);
        });
    })
   });