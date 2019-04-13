import React, { Component } from 'react';
import logo from './logo.svg';
import { strict } from 'assert';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';

import EntryService from './services/EntryService';
import EntryStore from './stores/EntryStore';

// import AllEntryContainer from './pages/AllEntries';
// import EntryListView from './components/EntryList';

import AddEntry from './pages/AddEntry';
import SearchEntry from './pages/SearchEntry';
import AllEntries from './pages/AllEntries';

let entryService = new EntryService();
let entryStore = new EntryStore(entryService);

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/add/">Add</Link>
              </li>
              <li>
                <Link to="/all/">All</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" render={props => <SearchEntry {...props} entryStore={entryStore}/>}/>
            <Route path="/add" render={props => <AddEntry {...props} entryStore={entryStore}/>}/>
            <Route path="/all" render={props => <AllEntries {...props} entryStore={entryStore}/>}/>
          </Switch>
          
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
