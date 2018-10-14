import React, { Component } from 'react';
import Card from './../card';
import Loading from './../Loading'
class Produtos extends Component {
    constructor() {
        super();
        this.state = {
            cards: [], 
            lastKey: 0,
            loading: true
        };

        this.fetchCards = this.fetchCards.bind(this);
        //this.renderCards = this.renderCards.bind(this);
    }

    componentWillMount() {
        this.fetchCards();
    }

    async addCard(nome, preco, src) {
        const cards = await this.state.cards;
        cards.push({nome, preco, src});
        this.setState({cards});
    }

    async fetchCards() {
        let cards = await fetch('/cards')
        cards = await cards.json();
        this.setState({cards, loading: false});
    }

    render() {
        let addCardPlaceholder = () => this.addCard("aaaahhh", "2.0","https://ih0.redbubble.net/image.203360566.6613/flat,800x800,075,f.jpg");
        return (
            <div>
                { !this.state.loading ?
                    <h1 style={{color: 'white', fontfamily: 'Do Hyeon, sans-serif'}} align="left">
                        <span style={{display:'block', height: '30px'}}>
                            &emsp; Novo produto:
                            <button onClick={addCardPlaceholder} type="button" className="btn btn-primary btn-sm" style={{fontsize: '12px'}}>
                                +
                            </button>
                        </span>
                    </h1> : null
                }
                <div className="container">
                    <div className="row justify-content-start">
                        { !this.state.loading ? this.state.cards.map((card, idx) =>
                            <Card key={idx} preco={card.preco} nome={card.nome} src={card.src}/>
                        ) : 
                        <h2 style={{margin: 'auto', color: 'white'}}><Loading /></h2>
                        }
                    </div>
                </div>
                
            </div>
        
        );
    }
}

export default Produtos;