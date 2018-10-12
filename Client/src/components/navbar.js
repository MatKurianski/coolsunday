import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './../assets/logo.png';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <button className="navbar-toggler mr-auto" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button><a className="navbar-brand mr-auto" href="#"><img src={logo} width="110px" /></a>
                <div className="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo01">
                
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Produtos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Sobre</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Entrar</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;