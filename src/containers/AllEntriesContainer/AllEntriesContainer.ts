import React, { Component } from 'react';

import { EntryStore } from '../../stores/EntryStore';
import { EntriesListProps } from '../../Interfaces';


class AllEntriesContainer extends Component<{store: EntryStore, children: (props: EntriesListProps) => any}> {

    componentDidMount() {
        this.props.store.getAllEntries();
    }

    render() {
        return this.props.children({
            words: this.props.store.entries, 
            addWord: () => this.props.store.addEntry("flute")
        });
    }
}

export default AllEntriesContainer;
