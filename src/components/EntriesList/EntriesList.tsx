import React from 'react';
import { observer } from "mobx-react"

import { EntriesListProps, EntryProps } from '../../Interfaces';
import Entry from '../Entry';


const EntriesList = (props: EntriesListProps) => {
    return (
        <div>
        <ul>
        {props.words.map((entry: EntryProps) => {
            return (
                <li key={entry.id}><Entry {...entry}/></li>
            )
        })}
        </ul>
        <button onClick={() => props.addWord()}>Add</button>
        </div>
    );
}


export default observer(EntriesList);
