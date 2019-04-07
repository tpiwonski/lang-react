import React from 'react';
import { observer } from 'mobx-react';

import { Translation } from '../../../../types/Entry';


interface Props {
    translation: Translation;
}

const TranslationView = (props: Props) => {
    var style = {
        marginLeft: '10px'
    }
    return (
        <div style={style}>
            <div>{props.translation.text}</div>
            <div>{props.translation.language}</div>
        </div>
    )
}


export default observer(TranslationView);
