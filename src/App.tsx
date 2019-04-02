import React, { Component } from 'react';
import logo from './logo.svg';
import { strict } from 'assert';

import './App.css';

import EntryService from './services/EntryService';
import EntryStore from './stores/EntryStore';

import AllEntriesContainer from './containers/AllEntriesContainer';
import EntriesList from './components/EntriesList';
import { EntriesListProps }  from './Interfaces';

import { Entry } from './models/Entry';

let e = new Entry({id: "", text: "", language: "en"});

let entryService = new EntryService();
let entryStore = new EntryStore(entryService);

class App extends Component {
  render() {
    return (
      <AllEntriesContainer store={entryStore}>
        {(props: EntriesListProps) => <EntriesList {...props}/>}
      </AllEntriesContainer>
    );
  }
}

export default App;
