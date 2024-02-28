var data = [
    {
        "id": 1,
        "title": "Clean Code: A Handbook of Agile Software Craftsmanship",
        "body": "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn't have to be that way.",
        "readCount": 100
    },
    {
        "id": 2,
        "title": "The Pragmatic Programmer: Your Journey to Mastery",
        "body": "Widely considered one of the best practical guides to programming, Steve McConnell’s original CODE COMPLETE has been helping developers write better software for more than a decade.",
        "readCount": 900
    },
    {
        "id": 3,
        "title": "JavaScript: The Good Parts",
        "body": "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined.",
        "readCount": 800
    },
    {
        "id": 4,
        "title": "Design Patterns: Elements of Reusable Object-Oriented Software",
        "body": "Design Patterns is a modern classic in the literature of object-oriented development, offering timeless and elegant solutions to common problems in software design.",
        "readCount": 700
    },
    {
        "id": 5,
        "title": "Refactoring: Improving the Design of Existing Code",
        "body": "As the application of object technology--particularly the Java programming language--has become commonplace, a new problem has emerged to confront the software development community. Significant numbers of poorly designed programs have been created by less-experienced developers.",
        "readCount": 600
    },
    {
        "id": 6,
        "title": "Effective Java",
        "body": "Are you looking for a deeper understanding of the Java™ programming language so that you can write code that is clearer, more correct, more robust, and more reusable?",
        "readCount": 500
    }
];


document.addEventListener("DOMContentLoaded", function () {
    var booksContainer = document.getElementById('books');

    // Shows all books on page
    function displayAllBooks() {
        booksContainer.innerHTML = ''; 
        data.forEach(book => {
            var bookElement = createBookElement(book);
            booksContainer.appendChild(bookElement);
        });
    }
    displayAllBooks();

    // Create a book element
    function createBookElement(book) {
        var bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = `
            <h2>${book.title}</h2>
            <p>${book.body}</p>
            <p><i>Pages: ${book.readCount}</i></p><br>
            <button class="update-title">Update title</button>
            <button class="update-pages">Update Pages</button>
            <button class="delete-book">Delete book</button>
        `;
        var updateTitleButton = bookElement.querySelector('.update-title');
        var updatePagesButton = bookElement.querySelector('.update-pages');
        var deleteButton = bookElement.querySelector('.delete-book');

        // Title updater button
        updateTitleButton.addEventListener('click', function () {
            var newTitle = prompt("Write a new title:");
            if (newTitle !== null) {
                book.title = newTitle;
                displayAllBooks();
            }
        });

       // Page updater button
        updatePagesButton.addEventListener('click', function () {
            var newPages = prompt("Write a new number of pages:");
            if (newPages !== null) {
            if (newPages === '0' || (!isNaN(newPages) && parseInt(newPages) > 0)) {
            book.readCount = newPages === '0' ? book.readCount : parseInt(newPages);
            displayAllBooks();
            } else {
            alert("Please write a valid number.");
        }
    }
});


        // Delete book button
        deleteButton.addEventListener('click', function () {
            var confirmDelete = confirm("Are you sure you wanna delete this book?");
            if (confirmDelete) {
                data = data.filter(item => item.id !== book.id);
                displayAllBooks();
            }
        });

        return bookElement;
    }


    // Search with page number
    function searchBooksByPageCount(searchValue) {
        var filteredBooks = data.filter(book => book.readCount >= parseInt(searchValue));
        booksContainer.innerHTML = ''; 
        filteredBooks.forEach(book => {
            var bookElement = createBookElement(book);
            booksContainer.appendChild(bookElement);
        });
    }


    // Search button
    var searchButton = document.getElementById('search');
    searchButton.addEventListener('click', function () {
        var searchInput = document.getElementById('text').value;
        searchBooksByPageCount(searchInput);
    });

    // Reset button
    var resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', function () {
        displayAllBooks();
    });


    // Add a book button

    var addButton = document.getElementById('add');
    addButton.addEventListener('click', function () {
    var title = prompt("Write the title:");
    var summary = prompt("Write a summary:");
    var pages = parseInt(prompt("Write number of pages:"));

     if (title && summary && !isNaN(pages) && pages > 0) {
        var newBook = {
            id: data.length + 1,
            title: title,
            body: summary,
            readCount: pages,
        };
        data.push(newBook);
        displayAllBooks();
    } else {
        alert("Please add valid values.");
    }
});

});
