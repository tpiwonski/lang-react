import React from 'react';
import { observer } from "mobx-react"

import { Entry } from "../../types/Entry";
import EntryView from "../Entry";

interface Props {
    entries: Entry[];
    // addEntry: (text: string) => void;
}


const EntriesList = (props: Props) => {
    return (
        <div>
            <ul>
            {props.entries.map((entry: Entry) => {
                return (
                    <li key={entry.id}><EntryView entry={entry}/></li>
                )
            })}
            </ul>
            {/* <button onClick={() => props.addEntry((new Date()).toString())}>Add</button> */}
        </div>
    );
}

export default observer(EntriesList);
