import React, { Component } from 'react';

import { EntryStore } from '../../../../stores/EntryStore';
import { Entry } from '../../../../types/Entry';

export interface EntriesListProps {
    entries: Entry[];
    // addEntry: (text: string) => void;
}

interface Props {
    entryStore: EntryStore;
    // children: (props: EntriesListProps) => any;
}

class AllEntryContainer extends Component<Props> {

    componentDidMount() {
        this.props.entryStore.loadAllEntries();
    }

    render() {
        return null;
    //     return this.props.children({
    //         entries: this.props.store.entries,
    //         // addEntry: (text: string) => this.props.store.addEntry({id: "", text: text, language: "en", translations: []}),
    //     });
    }
}

export default AllEntryContainer;
