import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';
import ChatInput from './ChatInput';
import Hello from './Hello';
import NavBar from './NavBar';

class Tweet extends React.Component {
  state = {
    activePage: 'comments',
    value: ''
  };

  handleValue = message => {
    console.log(message);
    this.setState({
      value: message
    });
    console.log('State: ', this.state.value);
  };

  handlePageChange = page => {
    this.setState({ activePage: page });
  };

  render() {
    const { activePage } = this.state;

    return (
        <div>
        <NavBar onPageChange={this.handlePageChange} />
        {activePage === 'comments' ?
          <div>
            <Message text={testTweet.message} />
            <Message text={this.state.value} />
            <ChatInput onValueSubmit={this.handleValue} />
          </div> : 
          <div>
            <Hello />
          </div>}
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