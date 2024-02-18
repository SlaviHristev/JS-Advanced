class BookClub {
    constructor(library) {
        this.library = library;
        this.books = [];
        this.members = [];
    }


    addBook(title, author) {
        const existingBook = this.books.find(book => book.title === title && book.author === author);
        if (existingBook) {
            return `The book "${title}" by ${author} is already in ${this.library} library.`;
        } else {
            this.books.push({ title, author });
            return `The book "${title}" by ${author} has been added to ${this.library} library.`;
        }
    }


    addMember(memberName) {
        if (this.members.includes(memberName)) {
            return `Member ${memberName} is already a part of the book club.`;
        } else {
            this.members.push(memberName);
            return `Member ${memberName} has been joined to the book club.`;
        }
    }



    assignBookToMember(memberName, bookTitle) {
        const memberIndex = this.members.indexOf(memberName);
        if (memberIndex === -1) {
            throw new Error(`Member ${memberName} not found.`);
        }
        const book = this.books.find(book => book.title === bookTitle);
        if (!book) {
            throw new Error(`Book "${bookTitle}" not found.`);
        }
        this.books = this.books.filter(book => book.title !== bookTitle);
        return `Member ${memberName} has been assigned the book "${bookTitle}" by ${book.author}.`;
    }



    generateReadingReport() {
        if (this.members.length === 0) {
            return "No members in the book club.";
        }
        if (this.books.length === 0) {
            return `No available books in the ${this.library} library.`;
        }
        let report = `Available Books in ${this.library} library:\n`;
        this.books.forEach(book => {
            report += `"${book.title}" by ${book.author}\n`;
        });
        return report.trim();
    }
}





const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.assignBookToMember("Alice", "The Great Gatsby"));
console.log(myBookClub.generateReadingReport());