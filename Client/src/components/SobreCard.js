import React, { Component } from 'react';

class SobreCard extends Component {
    constructor(props) {
        super();
        this.nome = props.nome;
        this.src = props.src;
        this.numero = props.numero || "00000000";
    }
    render() {
        return (
        <div className="col-md-4 col-sm-6 p-3">
			<div className="card text-center" > 
				<div className="card-block box shadow" >
					<div className="card-title"> 
						<h4 className="card-title-text">{this.nome}</h4>
					</div>
					<img src={this.src} className="img-fluid thumb1" width="110px" />
					<br />
					<br />
					<div className="card-text">
						<a style={{margin_top: '10px'}} href="#" className="btn btn-primary">Número USP: {this.numero}</a>
					</div>
				</div>
			</div>
		</div>
        );
    }
}

export default SobreCard;