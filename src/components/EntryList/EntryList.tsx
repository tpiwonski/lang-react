import React from 'react';
import { observer } from "mobx-react";

import { Entry } from "../../types/Entry";
import EntryView from "./components/Entry";

interface Props {
    entries: Entry[];
}


const EntryListView = (props: Props) => {
    return (
        <div>
            <ul>
            {props.entries.map((entry: Entry) => {
                return (
                    <li key={entry.id}><EntryView entry={entry}/></li>
                )
            })}
            </ul>
        </div>
    );
}

export default observer(EntryListView);
