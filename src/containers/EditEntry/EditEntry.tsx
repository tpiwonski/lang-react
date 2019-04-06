import React from 'react';
import { EntryData, newEntryData, TranslationData, newTranslationData } from '../../types/Entry';
import EntryStore from '../../stores/EntryStore';
import EditEntry from '../../components/EditEntry';

interface Props {
    store: EntryStore;
}

interface State {
    entryData: EntryData;
}

class EditEntryContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        
        this.state = {
            entryData: newEntryData({} as EntryData)
        }

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleTranslationsChange = this.handleTranslationsChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleTextChange(text: string) {
        console.log(text);
        this.setState((state) => {
            return {
                entryData: newEntryData(({ ...state.entryData, ...{ text } }))
            }
        })
    }

    handleTranslationsChange(translations: string[]) {
        console.log(translations);
        let translationsData = translations.map(text => newTranslationData({ text } as TranslationData))
        this.setState((state) => {
            return {
                entryData: newEntryData(({ ...state.entryData, ...{ translations: translationsData } }))
            }
        })
    }

    handleSave() {
        console.log(this.state);
        this.props.store.addEntry(this.state.entryData);
        this.setState({
            entryData: newEntryData({} as EntryData)
        })
    }

    render() {
        return (
            <EditEntry
                entryData={this.state.entryData}
                onTextChange={this.handleTextChange}
                onTranslationsChange={this.handleTranslationsChange} 
                onSave={this.handleSave}
            />
        )
    }
}

export default EditEntryContainer;
