import React, { Component } from 'react';
import logo from './site/resources/logo.png';
import fav from './site/resources/favicon.png';
import bootstrap from './site/style/bootstrap.min.css';
import estilo from './site/style/App.css';

const card = <div class="col-md-3 col-sm-6 p-3">
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
    </div>;


class modulo extends Component {
  render() {

    return (card);

  }
}

export default card;
