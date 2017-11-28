import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
  }
  render() {
    return (
      <div>
      <Title content="All Recipes" />
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
