import React from 'react';
import ReactDOM from 'react-dom';
import socketIOClient from "socket.io-client";
import './style/style.css';
import './style/core.scss';
const socket = socketIOClient('http://127.0.0.1:4229');

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      response: null,
      endpoint: "http://127.0.0.1:4229",
      countdown:0,
      safetyNet:0,
      isSafetyOn: true
    };
  }

  addTime(){
    console.log("add time");
    socket.emit('add-time',null);
  }
  subtractTime(){
    console.log("subtract time");
    socket.emit('subtract-time', null);
  }
  componentDidMount(){
    const { endpoint } = this.state;
    socket.on("time", data => {
      console.log(data);
      let {countdown, safetyNet, isSafetyOn } = data;
      this.setState({ response: data, countdown, safetyNet, isSafetyOn })
    });
  }

  render(){
    const { response } = this.state;
    return (
      <div>
        <h1>Ten Seconds of Fame Weby</h1>
        <h2>{JSON.stringify(response)}</h2>
        <button onClick={()=>this.addTime()}>Add Time</button>
        {!this.state.isSafetyOn && <button onClick={()=>this.subtractTime()}>Subtract Time</button>}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);