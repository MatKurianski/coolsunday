import React, { Component } from 'react';

import csslogin from './site/style/login.css'
class Login extends Component {


  render() {  
    return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-6 p-3">
          <div className="card text-center center-block" > 
            <div className="card-block box" >
              <div className="card-title"> <br />
                <h4 className="card-title-text">Login</h4>
              </div>

              <form className="form">		
                <label for="uname"><b>Usuário</b></label>
                <input type="text" placeholder="Escreva seu usuario" name="username" required />
                <label for="psw"><b>Senha</b></label>
                <input type="password" placeholder="Escreva a senha" name="password" required />
                <button className="large-button">Login</button>
              </form>

              <div className="container" style={{backgroundColor:'#f1f1f1'}}>
                <span className="psw">Esqueceu a<a href="#"> senha?</a></span> <br />
                <span className="register">Ainda não tem conta? <a href="#">Registre-se</a></span>
              </div>
              <button type="button" style={{width: '100.5%'}} className="cancelbtn">Cancelar</button>
            </div>
          </div>
        </div>
      </div>	
    </div>
    );
  }
}

export default Login;