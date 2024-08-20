// src/components/BookForm.jsx
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@mui/material';

const BookSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  author: Yup.string().required('Author is required'),
  isbn: Yup.string().required('ISBN is required'),
  publicationDate: Yup.date().required('Publication Date is required'),
});

const BookForm = ({ onSubmit, initialValues = { title: '', author: '', isbn: '', publicationDate: '' } }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={BookSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
            <Field name="title" as={TextField} label="Title" fullWidth margin="normal" />
            {errors.title && touched.title ? <div>{errors.title}</div> : null}
          </div>
          <div>
            <Field name="author" as={TextField} label="Author" fullWidth margin="normal" />
            {errors.author && touched.author ? <div>{errors.author}</div> : null}
          </div>
          <div>
            <Field name="isbn" as={TextField} label="ISBN" fullWidth margin="normal" />
            {errors.isbn && touched.isbn ? <div>{errors.isbn}</div> : null}
          </div>
          <div>
            <Field name="publicationDate" type="date" as={TextField} label="Publication Date" fullWidth margin="normal" InputLabelProps={{ shrink: true }} />
            {errors.publicationDate && touched.publicationDate ? <div>{errors.publicationDate}</div> : null}
          </div>
          <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;
