import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import estilo from './site/style/App.css';
import bootstrap from './site/style/bootstrap.min.css';

class card extends Component {


  render() { 
    
    return (


  <div className="col-md-3 col-sm-6 p-3">
      <div className="card text-center" > 
        <div className="card-block box shadow" >
            <div className="card-title"> 
              <h4 className="card-title-text">Pururuca com Ketchup</h4>
            </div>
              <img src="http://www.crispel.com.br/uProdutos/CdcPZJKTAP/CdcPZJKTAP_800_.jpg" className="img-fluid" width="110px" />
          
            <div className="card-text">
              Preço: R$ 1,00
              <br />
              <a styles="margin-top: 10px;" href="#" className="btn btn-primary">Ver mais</a>
            </div>
        </div>
      </div>
  </div>

 
);

  }
}

export default card;

 