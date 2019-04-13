import React from 'react';

import EntrySearch from './components/EntrySearch';
import EntryStore from '../../stores/EntryStore';
import EntryListView from '../../components/EntryList';

interface Props {
    entryStore: EntryStore;
}

const SearchEntry = (props: Props) => {
    return (
        <React.Fragment>
            <EntrySearch entryStore={props.entryStore} />
            <EntryListView entries={props.entryStore.entries}/>
        </React.Fragment>
    )
}

export default SearchEntry;
