import React from 'react';
import { observer } from "mobx-react";

import AllEntryContainer from './containers/AllEntryContainer';
import EntryStore from '../../stores/EntryStore';
import EntryListView from '../../components/EntryList';

interface Props {
    entryStore: EntryStore;
}

const AllEntries = (props: Props) => {
    return (
        <React.Fragment>
            <span>{props.entryStore.entriesCount}</span>
            <AllEntryContainer entryStore={props.entryStore}/>
            <EntryListView entries={props.entryStore.entries}/>
        </React.Fragment>
    )
}

export default observer(AllEntries);
