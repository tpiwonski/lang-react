import React, { Component } from 'react';
import logo from './logo.svg';
import { strict } from 'assert';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';

import EntryService from './services/EntryService';
import EntryStore from './stores/EntryStore';

import AllEntriesContainer from './containers/AllEntriesContainer';
import EntriesList from './components/EntriesList';
import EditEntryContainer from './containers/EditEntry';
import SearchEntriesContainer from './containers/SearchEntries';

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
            <Route exact path="/" render={props => <SearchEntriesContainer {...props} entryStore={entryStore}/>}/>
            <Route path="/add" render={props => <EditEntryContainer {...props} store={entryStore}/>}/>
            <Route path="/all" render={props => <AllEntriesContainer {...props} store={entryStore}/>}/>
          </Switch>
          <EntriesList entries={entryStore.entries}/>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
