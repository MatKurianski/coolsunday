import React, { Component } from 'react';
import Card from './card';
class Produtos extends Component {
    constructor() {
        super();
        this.state = {cards: [], lastKey: 0};

        this.fetchCards = this.fetchCards.bind(this);
        this.renderCards = this.renderCards.bind(this);

        this.fetchCards().then((_) => console.log('fetchd'));
    }

    renderCards() {
        return this.state.cards.map((card, idx) =>
            <Card key={idx} preco={card.preco} nome={card.nome} src={card.src}/>
        );
    }

    async addCard(nome, preco, imagemUrl) {
        console.log(JSON.stringify({nome: nome, preco: preco, src: imagemUrl}))
        await fetch('/api/post-card', {
            method: 'POST',
            body: JSON.stringify({nome: nome, preco: preco, src: imagemUrl}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        });
        await this.fetchCards()
    }

    async fetchCards() {
        let response = await fetch('/api/get-cards');
        const card_list = await response.json();
        this.setState({cards: card_list});
    }

    render() {
        let addCardPlaceholder = () => this.addCard("aaaahhh", "2.0","https://ih0.redbubble.net/image.203360566.6613/flat,800x800,075,f.jpg");
        return (
            <div>
                <h1 style={{color: 'white', fontfamily: 'Do Hyeon, sans-serif'}} align="left">
                    <span style={{display:'block', height: '30px'}}>
                        &emsp; Novo produto:
                        <button onClick={addCardPlaceholder} type="button" className="btn btn-primary btn-sm" style={{fontsize: '12px'}}>
                            +
                        </button>
                    </span>
                </h1>
                <div className="container">
                    <div className="row justify-content-start">
                        {this.renderCards()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Produtos;