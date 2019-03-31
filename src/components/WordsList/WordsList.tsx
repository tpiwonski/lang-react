import React from 'react';
import { observer } from "mobx-react"

import { WordsListProps, WordProps } from '../../Interfaces';
import Word from '../Word';


const WordsList = //observer(
    (props: WordsListProps) => {
        return (
            <div>
            <ul>
            {props.words.map((word: WordProps) => {
                return (
                    <li key={word.id}><Word {...word}/></li>
                )
            })}
            </ul>
            <button onClick={() => props.addWord()}>Add</button>
            </div>
        );
    }
// );

export default observer(WordsList);
