// src/pages/Authors.jsx
import React, { useState } from 'react';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [editingAuthorIndex, setEditingAuthorIndex] = useState(null);

  const addAuthor = (author) => {
    if (editingAuthorIndex !== null) {
      const updatedAuthors = authors.map((a, index) => (index === editingAuthorIndex ? author : a));
      setAuthors(updatedAuthors);
      setEditingAuthorIndex(null);
    } else {
      setAuthors([...authors, author]);
    }
  };

  const editAuthor = (index) => {
    setEditingAuthorIndex(index);
  };

  const deleteAuthor = (index) => {
    const updatedAuthors = authors.filter((_, i) => i !== index);
    setAuthors(updatedAuthors);
  };

  return (
    <div>
      <h1>Manage Authors</h1>
      <AuthorForm onSubmit={addAuthor} initialValues={editingAuthorIndex !== null ? authors[editingAuthorIndex] : undefined} />
      <AuthorList authors={authors} onEdit={editAuthor} onDelete={deleteAuthor} />
    </div>
  );
};

export default Authors;
