// src/pages/Books.jsx
import React, { useState } from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [editingBookIndex, setEditingBookIndex] = useState(null);

  const addBook = (book) => {
    if (editingBookIndex !== null) {
      const updatedBooks = books.map((b, index) => (index === editingBookIndex ? book : b));
      setBooks(updatedBooks);
      setEditingBookIndex(null);
    } else {
      setBooks([...books, book]);
    }
  };

  const editBook = (index) => {
    setEditingBookIndex(index);
  };

  const deleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  return (
    <div>
      <h1>Manage Books</h1>
      <BookForm onSubmit={addBook} initialValues={editingBookIndex !== null ? books[editingBookIndex] : undefined} />
      <BookList books={books} onEdit={editBook} onDelete={deleteBook} />
    </div>
  );
};

export default Books;
