import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';
import ChatInput from './ChatInput';

class Tweet extends React.Component {
  state = {
    value: ''
  }

  handleValue = message => {
    console.log(message);
    this.setState({
      value: message
    });
    console.log('State: ', this.state.value);
  }

  render() {
    return (
      <div>
        <Message text={testTweet.message} />
        <Message text={this.state.value} />
        <ChatInput onValueSubmit={this.handleValue} />
      </div>
    )
  }
}

var testTweet = {
  message: "Something about cats.",
  gravatar: "xyz",
  author: {
    handle: "catperson",
    name: "IAMA Cat Person"
  },
  likes: 2,
  retweets: 17,
  timestamp: "2019-07-07 10:05:37"
};

ReactDOM.render(<Tweet tweet={testTweet} />,
  document.querySelector('#root'));