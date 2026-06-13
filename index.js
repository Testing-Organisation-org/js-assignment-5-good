// Task 1: Prompt object access
function task1(requestedDetail) {
    const user = { username: "srija_dev", email: "srija@example.com", city: "Hyderabad" };
    if (user.hasOwnProperty(requestedDetail)) {
        return user[requestedDetail];
    } else {
        return "detail is not available";
    }
}

// Task 2: Update object properties
function task2() {
    const marks = { math: 70, english: 65, science: 80 };
    const updatedMarks = {};
    for (let subject in marks) {
        updatedMarks[subject] = marks[subject] + 5;
    }
    return `The values of updatedMarks are: { math: ${updatedMarks.math}, english: ${updatedMarks.english}, science: ${updatedMarks.science} }`;
}

// Task 3: Modify book object
function task3() {
    const book = { title: "The Mystery Box", author: "A. Writer", publishedYear: 2010, isAvailable: true };
    book.title = "The secret key";
    book.genre = "Thriller";
    delete book.isAvailable;
    delete book["author"]; // Using bracket notation
    return book;
}

// Task 4: 'this' keyword
function createProduct(name, price, discountPercent) {
    return {
        name: name,
        price: price,
        discount: discountPercent,
        calculateFinalPrice: function() {
            let discountAmount = (this.price * this.discount) / 100;
            return this.price - discountAmount;
        },
        updateDiscount: function(newDiscount) {
            this.discount = newDiscount;
            let finalPrice = this.calculateFinalPrice();
            console.log(`Final price after new discount is: ${finalPrice}`);
            return finalPrice;
        }
    };
}


