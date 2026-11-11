const axios = require('axios');

const BASE = 'http://localhost:5000';

// ---------- Task 2: Get all books (Promise callbacks) ----------
function getAllBooks() {
  axios.get(`${BASE}/`)
    .then((response) => {
      console.log('All books:');
      console.log(JSON.stringify(response.data, null, 2));
    })
    .catch((error) => {
      console.error('Error fetching all books:', error.message);
    });
}

// ---------- Task 3: Search by ISBN (Promise callbacks) ----------
function getBookByISBN(isbn) {
  axios.get(`${BASE}/isbn/${isbn}`)
    .then((response) => {
      console.log(`Book with ISBN ${isbn}:`);
      console.log(JSON.stringify(response.data, null, 2));
    })
    .catch((error) => {
      console.error('Error fetching book by ISBN:', error.message);
    });
}

// ---------- Task 4: Search by Author (async/await) ----------
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`${BASE}/author/${encodeURIComponent(author)}`);
    console.log(`Books by ${author}:`);
    console.log(JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error('Error fetching books by author:', error.message);
  }
}

// ---------- Task 5: Search by Title (async/await) ----------
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(`${BASE}/title/${encodeURIComponent(title)}`);
    console.log(`Books titled "${title}":`);
    console.log(JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error('Error fetching books by title:', error.message);
  }
}

// ---------- Run ----------
getAllBooks();
getBookByISBN(1);
getBooksByAuthor('Chinua Achebe');
getBooksByTitle('Things Fall Apart');

module.exports = { getAllBooks, getBookByISBN, getBooksByAuthor, getBooksByTitle };
