// src/components/AuthorList.jsx
import React from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const AuthorList = ({ authors, onEdit, onDelete }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Birth Date</TableCell>
            <TableCell>Biography</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {authors.map((author, index) => (
            <TableRow key={index}>
              <TableCell>{author.name}</TableCell>
              <TableCell>{author.birthDate}</TableCell>
              <TableCell>{author.biography}</TableCell>
              <TableCell>
                <Button onClick={() => onEdit(index)} variant="outlined" color="primary">Edit</Button>
                <Button onClick={() => onDelete(index)} variant="outlined" color="secondary" style={{ marginLeft: '10px' }}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AuthorList;
