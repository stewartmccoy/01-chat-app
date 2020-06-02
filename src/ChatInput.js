import React, { Component } from 'react';
import SendButton from './SendButton';

class ChatInput extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.state = { value: this.inputRef };
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.onChange && this.props.onChange(this.inputRef);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input type="text" ref={this.inputRef}></input><SendButton />
            </form >  
        )
    }
}

// class ChatInput extends Component {

//     // constructor(props) {
//     //     super(props);
//     //     // this.state = { value: '' };

//     //     // this.handleChange = this.handleChange.bind(this);
//     //     // this.handleSubmit = this.handleSubmit.bind(this);
//     // }

//     // handleChange(event) {
//     //     this.setState({ value: event.target.value });
//     // }

//     // state = { value: '' };

//     render() {
//         return (

//         )
//     }
// }

export default ChatInput;