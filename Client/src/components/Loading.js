import React, { Component } from 'react';
import gif from './loading.gif';

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            p: '...'
        }
    }

    componentDidMount() {
      this.interval = setInterval(() => {
        if (this.state.p === '...') 
            this.setState({p: '.'});
        else 
            this.setState({p: this.state.p+'.'});
      }, 500);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }
    
    render() {
        return(
        <div style={{textAlign: 'center'}}>
            <h1 style={{color: 'white'}}>Carregando{this.state.p}</h1>
            <br />
            <img src={gif} width='80px'/>
        </div>
        );
    }
    
}

export default Loading;