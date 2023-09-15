// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import Services from './Components/Services/Services';
import Skills from './Components/Skills/Skills';
import Portfolios from './Components/Portfolios/Portfolios';
import Testmonial from './Components/Testimonial/Testmonial';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
import User from './Components/User/User';
import { createContext, useState } from 'react';
import userEvent from '@testing-library/user-event';
import usePortfoliojson from './Hook/usePortfoliojson';


function App() {
  // const [portfolioDB, setPorfolioDB] = usePortfoliojson();
  // console.log(portfolioDB)

  return (
    <div className="App">
      {/* 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
      */}

      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/resume' element={<Resume></Resume>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/skills' element={<Skills></Skills>}></Route>
        <Route path='/portfolios' element={<Portfolios></Portfolios>}></Route>
        <Route path='/testimonial' element={<Testmonial></Testmonial>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>


    </div>
  );
}

export default App;
