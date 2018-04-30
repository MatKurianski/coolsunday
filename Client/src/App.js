import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import logo from './site/resources/logo.png';
import bootstrap from './site/style/bootstrap.min.css';
import estilo from './site/style/App.css';
import Card from './card';
import sobre from './sobre.js';


class App extends Component {


  render() { 
    
    return (
<html>
<head>

  <title>COMIDINHAS - EACH USP</title>
  <meta charset="utf-8" />
   <link rel="stylessheet" href={estilo} />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
 <link rel="stylessheet" href={bootstrap} />
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" />
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" />

</head>
<body> 



<nav className="navbar navbar-expand-lg navbar-dark">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
  <button className="navbar-toggler mr-auto" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    
  </button><a className="navbar-brand mr-auto" href="#"><img src={logo} width="110px" /></a>
  
  <div className="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo01">
 
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#">Produtos<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Sobre</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Entrar</a>
      </li>
    </ul>
  </div>
</nav>
  <h1 style={{color: 'white', fontfamily: 'Do Hyeon, sans-serif'}} align="left">
    <span style={{display:'block', height: '30px'}}> &emsp; Novo produto: <button type="button" className="btn btn-primary btn-sm" style={{fontsize: '12px'}}>+</button></span>
  </h1>
<div className="container">
  <div className="row">

    <Card />   
    <Card />
      <Card />
  </div>
</div>

</body>
</html>


    );
  }
}

export default App;
