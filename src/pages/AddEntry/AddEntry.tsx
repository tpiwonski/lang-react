import React from 'react';

import EntryEdit from './components/EntryEdit';
import EntryStore from '../../stores/EntryStore';

interface Props {
    entryStore: EntryStore
}

const AddEntry = (props: Props) => {
    return (
        <EntryEdit entryStore={props.entryStore}/>
    )
}

export default AddEntry;
