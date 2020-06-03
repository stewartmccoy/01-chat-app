import React, { Component } from 'react';
import SendButton from './SendButton';

class ChatInput extends Component {
    constructor(props) {
        super(props);
        
        this.inputRef = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onValueSubmit(this.inputRef.current.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input type="text" ref={this.inputRef}></input><SendButton />
            </form >  
        )
    }
}

export default ChatInput;