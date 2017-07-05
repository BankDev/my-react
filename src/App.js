import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    username : ""
  }
  componentDidMount() {
    const url = 'https://randomuser.me/api/?results=10';
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        this.setState({
          username : data.info.seed
        })
      })
      .catch(function(error) {
        console.log(JSON.stringify(error));
      });   
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{ this.state.username }</p>
      </div>
    );
  }
}

export default App;
