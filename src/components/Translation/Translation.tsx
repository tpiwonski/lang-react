import React from 'react';

import { TranslationProps } from '../../Interfaces';


const Translation = (props: TranslationProps) => {
    var style = {
        marginLeft: '10px'
    }
    return (
        <div style={style}>
            <div>{props.word}</div>
            <div>{props.language}</div>
        </div>
    )
}

export default Translation;
