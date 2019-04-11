import React, { Component } from 'react';
import logo from './logo.svg';
import { strict } from 'assert';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';

import EntryService from './services/EntryService';
import EntryStore from './stores/EntryStore';

import AllEntryContainer from './pages/All';
import EntryEditContainer from './pages/Add';
import EntrySearchContainer from './pages/Search';
import EntryListView from './components/EntryList';

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
            <Route exact path="/" render={props => <EntrySearchContainer {...props} entryStore={entryStore}/>}/>
            <Route path="/add" render={props => <EntryEditContainer {...props} store={entryStore}/>}/>
            <Route path="/all" render={props => <AllEntryContainer {...props} store={entryStore}/>}/>
          </Switch>
          <EntryListView entries={entryStore.entries}/>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
