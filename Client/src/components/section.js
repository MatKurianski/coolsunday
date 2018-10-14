import React, { Component } from 'react';
import Card from './card.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons'


class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.toggleSection = this.toggleSection.bind(this);
  }

  toggleSection() {
    const show = !this.state.show;
    this.setState({show});
  };

  render() {
    let cards;
    if (this.props.categoria === 'todas') cards = this.props.cards;
    else cards = this.props.cards.filter(card => card.categoria === this.props.categoria);
    let icon = this.state.show ? faArrowDown : faArrowRight; 

    return (
      <span>
        <h3 onClick={this.toggleSection} style={{ color: 'white' }}><FontAwesomeIcon icon={icon} /> {this.props.name}</h3>
        {this.state.show === true ?     
          <div className="row justify-content-start">
            {cards.map((card, idx) => {
              return <Card key={idx} preco={card.preco} nome={card.nome} src={card.src} />;
            })} 
          </div> : null 
        }
        <hr style={{height: 2+'px', backgroundColor: 'grey'}} />
      </span>)
  };
};

export default Section;
