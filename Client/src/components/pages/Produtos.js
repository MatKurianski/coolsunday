import React, { Component } from 'react';
import Loading from './../Loading'
import Section from './../section';

class Produtos extends Component {
    constructor() {
        super();
        this.state = {
            cards: [], 
            lastKey: 0,
            loading: true
        };

        this.fetchCards = this.fetchCards.bind(this);
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
        return (
          <div>
            <div className="container">
              <br />
              {!this.state.loading ?
              <div >
                <Section name="Doces" cards={this.state.cards} categoria={"doce"} />
                <Section name="Salgados" cards={this.state.cards} categoria={"salgado"} />
                <Section name="Todos" cards={this.state.cards} categoria={"todas"} />
              </div>
              : <Loading />}
            </div>
          </div>
        );
    }
}

export default Produtos;