import React, { Component } from 'react';
import logo from './site/resources/logo.png';
import fav from './site/resources/favicon.png';
import bootstrap from './site/style/bootstrap.min.css';
import estilo from './site/style/App.css';


class App extends Component {
  render() {
    return (
  /*    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">testando apenas</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>*/
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

<nav class="navbar navbar-expand-lg navbar-dark">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylessheet" />
  <button class="navbar-toggler mr-auto" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon" />
    </button>

  <a class="navbar-brand mr-auto" href="#"> <img src={logo} className="logo" alt="logo" width="110px" /> </a>
<img src={fav} className="App-logo" alt="logo" width="30px" height="1px" />
  <div class="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo01">
 
    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Produtos<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="site/pages/sobre.html">Quem somos?</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Para onde vamos?</a>
      </li>
    </ul>
  </div>
</nav>
  <h2 styles="color: white; font-family: 'Do Hyeon', sans-serif" align="right">
    <span styles="display:block; height: 30px;"> &emsp; Novo produto: <button type="button" class="btn btn-primary btn-sm" styles="font-size: 12px">+</button></span>
  </h2>
<div class="container">
  <div class="row">

    

    <div class="col-md-3 col-sm-6 p-3">
      <div class="card text-center" > 
        <div class="card-block box shadow" >
          <div class="card-title"> 
            <h4 class="card-title-text">Bombom</h4>
          </div>
          <img src="http://www.makmassas.com.br/image/cache/data/loja/produtos/Bombons/nozes/bombom-nozes-1024x1024.jpg" class="img-fluid thumb1" width="110px" />
          
          <div class="card-text">
            Preço: R$2,00.
            <br />
            <a styles="margin-top: 10px;" href="#" class="btn btn-primary">Ver mais</a>
          </div>
        </div>
      </div>
    </div>


   <div class="col-md-3 col-sm-6 p-3">
      <div class="card text-center" > 
        <div class="card-block box shadow" >
          <div class="card-title"> 
            <h4 class="card-title-text">Cones Winstom</h4>
          </div>
          <img src="https://i3.wp.com/negociodecozinha.com.br/wp-content/uploads/2018/04/receita-de-cone-trufado-para-vender-700x500.jpg" class="img-fluid" width="110px" />
          
          <div class="card-text">
            Preço: R$ 5,00
            <br />
            <a styles="margin-top: 10px;" href="#" class="btn btn-primary">Ver mais</a>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-3 col-sm-6 p-3">
      <div class="card text-center" > 
        <div class="card-block box shadow" >
          <div class="card-title"> 
            <h4 class="card-title-text">Dadinho</h4>
          </div>
          <img src="https://docemalu.vteximg.com.br/arquivos/ids/167239-1000-1000/5091-1.jpg?v=636008481138900000" class="img-fluid" width="110px" />
          
          <div class="card-text">
            Preço: R$ 1,00
            <br />
            <a styles="margin-top: 10px;" href="#" class="btn btn-primary">Ver mais</a>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-3 col-sm-6 p-3">
      <div class="card text-center" > 
        <div class="card-block box shadow" >
          <div class="card-title"> 
            <h4 class="card-title-text">Sonho de Valsa</h4>
          </div>
          <img src="https://www.lacta.com.br/application/uploads/products/sku/375928cd92bba63f03823b78e56b7f0f9cc0bcf5_3.png" class="img-fluid" width="110px" />
          
          <div class="card-text">
            Preço: R$ 2,00
            <br />
            <a styles="margin-top: 10px;" href="#" class="btn btn-primary">Ver mais</a>
          </div>
        </div>
      </div>
    </div>


    <div class="col-md-3 col-sm-6 p-3">
      <div class="card text-center" > 
        <div class="card-block box shadow" >
          <div class="card-title"> 
            <h4 class="card-title-text">Sorvete</h4>
          </div>
          <img src="https://img.itdg.com.br/tdg/images/recipes/000/004/730/286382/286382_original.jpg?mode=crop&width=370&height=278" class="img-fluid" width="110px" />
          
          <div class="card-text">
            Preço: R$ 1,50
            <br />
            <a styles="margin-top: 10px;" href="#" class="btn btn-primary">Ver mais</a>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-3 col-sm-6 p-3">
      <div class="card text-center" > 
        <div class="card-block box shadow" >
          <div class="card-title"> 
            <h4 class="card-title-text">Gelinho</h4>
          </div>
          <img src="http://www.tudogostoso.com.br/images/recipes/000/143/130/82978/82978_original.jpg?mode=crop&width=600&height=450" class="img-fluid" width="110px" />
          
          <div class="card-text">
            Preço: R$ 0,80
            <br />
            <a styles="margin-top: 10px;" href="#" class="btn btn-primary">Ver mais</a>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-3 col-sm-6 p-3">
      <div class="card text-center" > 
        <div class="card-block box shadow" >
          <div class="card-title"> 
            <h4 class="card-title-text">7 Belo</h4>
          </div>
          <img src="https://www.otvfoco.com.br/wp-content/uploads/2013/08/Belo.jpg" class="img-fluid" width="110px" />
          
          <div class="card-text">
            Preço: R$ 69,00
            <br />
            <a styles="margin-top: 10px;" href="#" class="btn btn-primary">Ver mais</a>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-3 col-sm-6 p-3">
      <div class="card text-center" > 
        <div class="card-block box shadow" >
          <div class="card-title"> 
            <h4 class="card-title-text">Pururuca com Ketchup</h4>
          </div>
          <img src="http://www.crispel.com.br/uProdutos/CdcPZJKTAP/CdcPZJKTAP_800_.jpg" class="img-fluid" width="110px" />
          
          <div class="card-text">
            Preço: R$ 1,00
            <br />
            <a styles="margin-top: 10px;" href="#" class="btn btn-primary">Ver mais</a>
          </div>
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

export default App;
