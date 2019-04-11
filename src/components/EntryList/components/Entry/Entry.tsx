import React from 'react';
import { observer } from "mobx-react"

import TranslationView from '../Translation';
import { Entry } from '../../../../types/Entry';

export interface Props {
    entry: Entry;
}

const EntryView = (props: Props) => {
    return (
        <div>
            <div>{props.entry.text}</div>
            <div>{props.entry.language}</div>
            {props.entry.translations.map(translation => {
                return (
                    <TranslationView key={translation.id} translation={translation}/>
                )
            })}
        </div>
    )
}


export default observer(EntryView);
