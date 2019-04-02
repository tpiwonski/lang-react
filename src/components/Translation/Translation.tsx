import React from 'react';
import { observer } from 'mobx-react';

import { TranslationProps } from '../../Interfaces';


const Translation = (props: TranslationProps) => {
    var style = {
        marginLeft: '10px'
    }
    return (
        <div style={style}>
            <div>{props.text}</div>
            <div>{props.language}</div>
        </div>
    )
}


export default observer(Translation);
