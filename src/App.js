import './App.scss';
import {BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Routes>
        <Route
              path='/'
              element={
                <div>
                  <Header />
                  <Home />
                </div>
              }
            />
            <Route
              path='/Contact'
              element={
                <div>
                  <Header />
                  <Contact />
                </div>
              }/>
        <Route path= '/modal' element = {<Nav/>}/>
        </Routes>
      </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;
