import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import css from './site/style/sobre.css';
import logo from './site/resources/logo.png';
import fav from './site/resources/favicon.png';
import bootstrap from './site/style/bootstrap.min.css';
import estilo from './site/style/App.css';
import csslogin from './site/style/login.css'
import card from './card.js';
import sobre from './sobre.js';
import autent from './autenticacao.js';
class Login extends Component {


  render() { 
    
    return ( 

<html>
<head>
  <title>COMIDINHAS - EACH USP</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
 <link rel="stylesheet" href={bootstrap} />
  <link rel="stylesheet" href={csslogin} />

 <script src="./autenticacao.js"></script>

 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-dark">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
  <button class="navbar-toggler mr-auto" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    
  </button><a class="navbar-brand mr-auto" href="#"><img src={logo} width="110px" /></a>
  
  <div class="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo01">
 
    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
      <li class="nav-item">
        <a class="nav-link" href="../../index.html">Produtos<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="sobre.html">Sobre</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Entrar</a>
      </li>
    </ul>
  </div>
</nav>

<div class="container">
	<div class="row">
		<div class="col-md-4 col-sm-6 p-3">
			<div class="card text-center center-block" > 
				<div class="card-block box" >
					<div class="card-title"> <br />
						<h4 class="card-title-text">Login</h4>
					</div>

			<form method="POST" action="/login" className="form">		
					<label for="uname"><b>Usuário</b></label>
    <input type="text" placeholder="Escreve seu usuario" name="username" required />
    <label for="psw"><b>Senha</b></label>
    <input type="password" placeholder="Escreva a senha" name="password" required />
    <button type="submit" class="large-button">Login</button>
   </form>

<div class="container" style={{backgroundColor:'#f1f1f1'}}>
    <span class="psw">Esqueceu a<a href="#"> senha?</a></span> <br />
    <span class="register">Ainda não tem conta? <a href="#">Registre-se</a></span>
  </div>
 <button type="button" style={{width: '100.5%'}} class="cancelbtn">Cancelar</button>

</div>
				</div>
			</div>
		</div>	

		</div>
</body>
</html>



    	);
  }
}

export default Login;