document.addEventListener("DOMContentLoaded", function () {
    // Funksjon for å vise alle bøker på siden
    function displayAllBooks() {
        const booksContainer = document.getElementById('books');
        booksContainer.innerHTML = ''; // Tilbakestill innholdet
        data.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.classList.add('book');
            bookElement.innerHTML = `
                <h2>${book.title}</h2>
                <p>${book.body}</p>
                <p>Antall ord: ${book.body.split(' ').length}</p>
                <p>Lest antall: ${book.readCount}</p>
            `;
            booksContainer.appendChild(bookElement);
        });
    }

    // Søkefunksjon
    function searchBooksByWordCount(searchValue) {
        const filteredBooks = data.filter(book => book.body.split(' ').length === parseInt(searchValue));
        const booksContainer = document.getElementById('books');
        booksContainer.innerHTML = ''; // Tilbakestill innholdet
        filteredBooks.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.classList.add('book');
            bookElement.innerHTML = `
                <h2>${book.title}</h2>
                <p>${book.body}</p>
                <p>Antall ord: ${book.body.split(' ').length}</p>
                <p>Lest antall: ${book.readCount}</p>
            `;
            booksContainer.appendChild(bookElement);
        });
    }

    // Vis alle bøker når siden lastes inn
    displayAllBooks();

    // Søkeknapp
    const searchButton = document.getElementById('search');
    searchButton.addEventListener('click', function () {
        const searchInput = document.getElementById('text').value;
        searchBooksByWordCount(searchInput);
    });

    // Tilbakestillknapp
    const resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', function () {
        displayAllBooks();
    });

    // Legg til bokknapp - dette er et fiktivt eksempel, du må implementere logikken for å legge til bøker selv
    const addButton = document.getElementById('add');
    addButton.addEventListener('click', function () {
        // Legg til logikk for å legge til bøker her
        console.log('Legg til bok');
    });
});
