const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}


///// Destructuring
/// 1. Objects
const book = getBooks(1);

// const title = book.title;
// const author = book.author;

// Object-destructuring
const {title, author, pages, publicationDate, genres, hasMovieAdaptation} = book;
// We need to give exactly the same names as the properties in the object

/// 2. Arrays

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;


///// Rest and Spread Operator
/// Rest operator ... - automatically creates the array with the rest of the genres (values);
/// Spreade operator ... (the same three dots as in Rest) - we want to copy the array + add something
// Arrays:
const newGenres = [...genres, 'epic fantasy'];
// Objects:
const updatedBook = {
...book,
// Adding a new property
moviePublicationDate: '2001-12-19',
// Overwriting an existing property
pages: 1210,
}

///// Template literals
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${publicationDate.split('-')[0]}`;

///// Ternaries insted of if/else statements
const pagesRange = pages > 1000 ? 'over a thounsand' : 'less than 1000';

///// Arrow functions
function getYear(str) {
  return str.split('-')[0];
}

const getYear = (str) => str.split[0];

// if the code inside arrow fucntion is bigger
const longFunction = (arg) => {
  //code

  return // code;
}

///// Short-circuiting and logical operators: &&, ||, ??
// If the lefr part is true, then we return/execute right part
console.log(true && 'Some string');
console.log(true || 'Some string'); // works the sames as &&
console.log(book.translations.spanish); // => undefined;
const spanishTranslation = book.translations.spanish || 'NOT TRANSLATED';

const count = book.reviews.librarything.reviewsCount ?? 'no data';
// if we use ||, then the count will be 'no data' because the value is 0 and its falsy value, but if we want o to be shown then we can use new operator ??

///// Optional chaining operator
function getTotalReviewCount(book) {
const goodread = book.reviews.goodreads.reviewsCount;
const librarything = book.reviews.librarything.reviewsCount;

return goodread + librarything;
}

// It will calculate, if there is a value, but if undefined (for example, there is no librarything) that we will get an error;
// Solution: option chaining =>
function getTotalReviewCount(book) {
  const goodread = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  // So if book.reviews.librarything undefined, then JS will not try reading the book.reviews.librarything
  
  return goodread + librarything;
  }

  ///// The Array map method (do not mutate the original array, instead returns new one)
  // The map method will loop over an array and return the new array with the same length and with some operation applied to each of the elements of the original array.
  const books = getBooks();

  const titles = books.map((book) => book.title);
  const essentialData = books.map((book) => ({
      title: book.title,
      author: book.author,
  }));

///// The Array filter method (do not mutate the original array, instead returns new one)
const longBooksWithMovie = books.filter((book) => book.pages > 500).filter((book) => book.hasMovieAdaptation);

const adventureBooks = books.filter((book) => book.genres.includes('adventure')).map((book) => book.title);

///// Reduce method
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);


///// Sort method (it mutates the original array, and to avoid it, we can copy the original array with .slice());
const x = [3, 7, 1, 9, 6];
const sorted = x.slice().sort((a, b) => a - b);

///// Workin with immutable Arrays
/// Its important to add, delete, update elements in React without mutating the original array.

// 1. Add book object to array
const newBook = {
  id: 6,
  title: 'Harry Potter and the Chamber of Secrets',
  author: 'J. K. Rowling',
};

const booksAfterAdd = [...books, newBook];

// 2. Delete book object from array
const bookAfterDelete = booksAfterAdd.filter(book => book.id !== 3);


// 3. Update book object in the array (we choose map method to update on element inside the array)
const booksAfterUpdate = booksAfterDelete.map(book => 
  book.id === 1 ? {...book, pages: 1210} : book
  );


///// Asyncronous JavaScript: Promises
fetch(someURL) // Promise(pending)
.then(res => res.json()) //It will return another Promise
.then(data => console.log(data))

///// Async/Await
async function getTodos() {
const res = await fetch(someURL);
const data = await(res.json());
console.log(data);
}
getTodos();