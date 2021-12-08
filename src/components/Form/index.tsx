import { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import './styles.scss';

export function MovieForm() {
  return (
    <div className='form-container'>
      <Formik
        initialValues={{ genre: '', year: '', rating: '', type: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type='field'></Field>
            <button
              type='submit'
              disabled={isSubmitting}
              className='submit-button'
            >
              {' '}
              Pesquisar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
