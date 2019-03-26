import React from 'react';
import { observer } from "mobx-react"

import { WordsListProps, WordProps } from '../../Interfaces';
import Word from '../Word';


const WordsList = observer(
    (props: WordsListProps) => {
        return (
            <div>{props.words.map((word: WordProps) => {
                return (
                    <Word key={word.id} {...word}/>
                )
            })}</div>
        );
    }
);

export default WordsList;
