import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import { Footer } from './components/Footer';
import { Header } from './components/Header';
// Pages
import { Home } from './pages/Home';
import { AboutMe } from './pages/AboutMe';
// Styles
import './App.scss';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<AboutMe />} path='/sobre' />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
