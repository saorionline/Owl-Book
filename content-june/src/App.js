import logo from './logo.svg';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Book from './Book';
import Header from './Header';
import './assets/scss/style.scss';

function App() {
  return (
    <>
      <HashRouter>
        <Header/>
        <Book/>
        <Routes>
          <Route path='/' element= {Closet}/>
        </Routes>
      </HashRouter>
    </>
  );
}


export default App;
