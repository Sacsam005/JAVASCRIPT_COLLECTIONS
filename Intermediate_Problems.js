// Create a book class which provides information about different books of a store
// Each book will have a Title, Author, ISBN and num of available Copies
// TODO - You will need a way to get each book's availability and if no more copies are available, your function should return Out of stock, if the available copies are less than 10, it should return low stock otherwise the function should return in stock.

// Also, get a number of sold copies, you can subtract the number of copies sold from total no of copies

// Using functional component
// function Book(title, author, ISBN, numCopies) {
//     this.title = title;
//     this.author = author;
//     this.ISBN = ISBN;
//     this.numCopies = numCopies;
// }

// Book.prototype.getAvailability = function() {
//     if(this.numCopies ===0) {
//         return "Out of Stock";
//     } else if(this.numCopies < 10) {
//         return "Low stock"
//     } else {
//         return "In stock!";
//     }
// }

// Book.prototype.sell = function(numCopiesSold = 1) {
//     this.numCopies -= numCopiesSold;
// }

// Book.prototype.restock = function(numCopiesStocked = 5) {
//     this.numCopies += numCopiesStocked;
// }

// const HungerGames = new Book("Hunger Games", "Sam Sebastian", 123455, 5);
// console.log(HungerGames.getAvailability());
// HungerGames.restock(12);
// console.log(HungerGames.getAvailability());
// HungerGames.sell(17);
// console.log(HungerGames.getAvailability());

// Using class component
class Book {
    constructor(title, author, ISBN, numCopies) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }

    get availability() {
        return this.getAvailability();
    }

    getAvailability() {
        if(this.numCopies===0) {
            return "Out of stock";
        } else if(this.numCopies < 10) {
            return "Low stock";
        } else {
            return "In stock";
        }
    }

    sell(numCopiesSold =1) {
        this.numCopies -= numCopiesSold;
    }

    restock(numCopiesRestocked =5) {
        this.numCopies += numCopiesRestocked;
    }
} 

const HungerGames = new Book("Hunger Games", "Sam Sebastian", 123455, 5);
console.log(HungerGames.getAvailability());
HungerGames.restock(12);
console.log(HungerGames.getAvailability());
HungerGames.sell(17);
console.log(HungerGames.getAvailability());
