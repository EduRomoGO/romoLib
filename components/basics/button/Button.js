import React, { Component } from 'react';

export class Button extends Component {

    constructor (props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick (e) {
        this.props.onClick();
    }

    render () {
        return <button id={this.props.id} onClick={this.onClick}>{this.props.name}</button>;
    }

};