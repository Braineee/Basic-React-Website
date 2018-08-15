import React, { Component } from 'react';
import '../css/Jumbotron.css';





class Jumbotron extends Component {
    render() {
        return (
            <div className="nav-space-stop jumbotron background-img">
                <div className="container-fluid">
                    <div className="container">
                        <h1 className="display-4">{ this.props.headline }</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jumbotron;