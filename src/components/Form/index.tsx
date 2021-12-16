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
          // TODO: Add Formik validation
          <Form className='form'>
            <div className='genre-container'>
              <label htmlFor='genre'>Gêneros</label>
              <Field as='select' name='genres' style={{ color: 'black' }}>
                <option value='all-genres'>Todos os gêneros</option>
                <option value='romantic-comedy'>Comédia romântica</option>
                <option value='sci-fi'>Ficção Científica</option>
                <option value='action'>Ação</option>
                <option value='drama'>Drama</option>
                <option value='horror'>Terror</option>
                <option value='thriller'>Suspense</option>
                <option value='adventure'>Aventura</option>
              </Field>
            </div>
            <button
              type='submit'
              disabled={isSubmitting}
              className='submit-button'
            >
              Pesquisar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
