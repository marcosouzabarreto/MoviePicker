import { useState, useEffect } from 'react';
import { getPopularMovies } from '../../api';
import './styles.scss';

export function MovieForm() {
  // QUANDO ACABAR, ADICIONAR AOS MEUS APPS NO THEMOVIEDATABASE https://www.themoviedb.org/settings/api
  useEffect(() => {
    getPopularMovies();
  }, []);
  const [name, setName] = useState('');

  return <div className="form-container"></div>;
}
