import React from 'react';
import { observer } from "mobx-react"

import Translation from '../Translation';
import { WordProps } from '../../Interfaces';


const Word = observer(
    (props: WordProps) => {
        return (
            <div>
                <div>{props.word}</div>
                <div>{props.language}</div>
                {props.translations.map(translation => {
                    return (
                        <Translation key={translation.id} {...translation}/>
                    )
                })}
            </div>
        )
    }
)

export default Word;
