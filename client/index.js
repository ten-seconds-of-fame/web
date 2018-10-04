import React from 'react';
import ReactDOM from 'react-dom';
import socketIOClient from "socket.io-client";
import './style/style.css';
import './style/core.scss';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      response: 0,
      endpoint: "http://127.0.0.1:4229"
    };
  }

  componentDidMount(){
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("time", data => {
      console.log(data);
      this.setState({ response: data })
    });
  }

  render(){
    const { response } = this.state;
    return (
      <div>
        <h1>Ten Seconds of Fame Web</h1>
        <h2>{this.state.response}</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);