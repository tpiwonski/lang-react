import React from 'react';
import { observer } from "mobx-react"

import Translation from '../Translation';
import { EntryProps } from '../../Interfaces';


const Word = (props: EntryProps) => {
    return (
        <div>
            <div>{props.text}</div>
            <div>{props.language}</div>
            {props.translations.map(translation => {
                return (
                    <Translation key={translation.id} {...translation}/>
                )
            })}
        </div>
    )
}


export default observer(Word);
