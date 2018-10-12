import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/navbar.js';
import Produtos from './components/pages/Produtos';

import estilo from './App.css';
import './assets/bootstrap.min.css'

class App extends Component {
  render() { 
    
    return (
  <BrowserRouter>
    <div>
      <Navbar />
      <Route path="/" exact component={Produtos} />
    </div>
  </BrowserRouter>
    );
  }
}

export default App;
