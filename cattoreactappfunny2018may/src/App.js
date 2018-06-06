import React, { Component } from 'react';
import './App.css';
import Header from './Components/Nav/Header.js';
import Main from './Components/Main.js'
import Footer from './Components/Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
