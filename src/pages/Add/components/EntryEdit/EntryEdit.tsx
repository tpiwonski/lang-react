import React from 'react';
import { EntryData } from '../../../../types/Entry';

interface Props {
    entryData: EntryData;
    onTextChange: (text: string) => void;
    onTranslationsChange: (translations: string[]) => void;
    onSave: () => void;
}

class EntryEdit extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleTranslationsChange = this.handleTranslationsChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleTextChange(e: any) {
        this.props.onTextChange(e.target.value);
    }

    handleTranslationsChange(e: any) {
        let re = /\s*(?:,|$)\s*/;
        let translations = e.target.value.split(re);
        this.props.onTranslationsChange(translations);
    }

    handleSave(e: any) {
        this.props.onSave();
    }

    render() {
        let translations = this.props.entryData.translations.map((translation) => translation.text).join(',');
        return (
            <div>
                <input
                    type="text"
                    value={this.props.entryData.text}
                    onChange={this.handleTextChange}
                />
                <input
                    type="text"
                    value={translations}
                    onChange={this.handleTranslationsChange}
                />
                <button onClick={this.handleSave}>Save</button>
            </div>
        )
    }
}

export default EntryEdit;
