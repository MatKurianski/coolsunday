import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class card extends Component {
  constructor(props) {
    super();
    this.preco = parseInt(props.preco);
    this.nome = props.nome;
    this.src = props.src || "http://www.crispel.com.br/uProdutos/CdcPZJKTAP/CdcPZJKTAP_800_.jpg";
  }

  formatPrice(valor) {
    return "R$ " + valor.toFixed(2);
  }

  render() { 
    
    return (
    <div className="col-md-3 col-sm-6 p-3">
        <div className="card text-center" > 
          <div className="card-block box shadow" >
              <div className="card-title"> 
                <h4 className="card-title-text">{this.nome}</h4>
              </div>
                <img src={this.src} className="img-fluid" width="110px" />
            
              <div className="card-text">
                Preço: {this.formatPrice(this.preco)}
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

 