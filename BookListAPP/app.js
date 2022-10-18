// Book class : Represents a book

class Book{
    constructor(title, author , isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
}

//  UI class: Handle UI Tasks

class UI{
    static displayBooks(){
        const StoreBooks=[
        {
            title:"Book One",
            author:"John Dae",
            isbn:"3434434"
        },
        {
            title:"Book Two",
            author:"Jane Doe",
            isbn:"45545"
        }
    ];

    const books=StoreBooks;
    
    books.forEach((book)=>UI.addBookToList(book));
    }

    static addBookToList(book){
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }
}

// Store class : Handles Storage

// Event : Display books

document.addEventListener('DOMContentLoaded' , UI.displayBooks);

//  Event : Add a book

// document.querySelector('#book-form').addEventListener('submit' ,ugf= (e)
// => {

//     // prevent actual submit
//     e.preventDefault();


//     // Get form values
//     const title = document.querySelector('#title').value;
//     const author = document.querySelector('#author').value;
//     const isbn = document.querySelector('#isbn').value;

//     // Instatiate book

//     const book = new Book(title , author , isbn);
//     console.log(book);
    
// });

// Event : Remove a book

