import React, { Component } from 'react';
import logo from './logo.svg';
import { strict } from 'assert';

import './App.css';
import WordContainer from './containers/AllWordsContainer';
import langStore from './Store';

class App extends Component {
  render() {
    return (
      <WordContainer store={langStore}/>

      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.tsx</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      //   <Foo/>
      // </div>
    );
  }
}

export default App;
