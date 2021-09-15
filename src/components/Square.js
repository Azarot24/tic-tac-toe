import React, { Component } from 'react';
import './Square.css'

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() { 
        return ( 
            <img src={this.props.img} onClick={this.props.onClick} className="square" alt=""/>
        );
    }
}
 
export default Square;