import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import TopHeader from './TopHeader/TopHeader'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <TopHeader />
      <Header />
    </div>
    </BrowserRouter>
  );
}

export default App;
