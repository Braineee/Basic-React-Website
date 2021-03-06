import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../css/Navbar.css';




class Navbar extends Component{
    render () {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to="/">{this.props.title}</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id ="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                            <Link className="nav-link" to="/">Home
                                <span className="sr-only">(current)</span>
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            {/*<li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>-*/}
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
};

export default Navbar;