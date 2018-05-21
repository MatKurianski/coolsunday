import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './navbar';
import Produtos from './Produtos';
import Login from './login';
import Sobre from './sobre';

import bootstrap from './site/style/bootstrap.min.css';
import estilo from './site/style/App.css';


class App extends Component {


  render() { 
    
    return (
  <BrowserRouter>
    <div>
      <Navbar />
      <Route path="/" exact component={Produtos} />
      <Route path="/login" exact component={Login} />
      <Route path="/sobre" exact component={Sobre} />
    </div>
  </BrowserRouter>
    );
  }
}

export default App;
