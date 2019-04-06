import React, { Component } from 'react';
import logo from './logo.svg';
import { strict } from 'assert';

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
        <EditEntryContainer store={entryStore}/>
        <SearchEntriesContainer entryStore={entryStore}/>
        <AllEntriesContainer store={entryStore}>
          {(props) => <EntriesList {...props}/>}
        </AllEntriesContainer>
      </React.Fragment>
    );
  }
}

export default App;
