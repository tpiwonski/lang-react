import React from 'react';
import { EntryData, newEntryData, TranslationData, newTranslationData } from '../../../../types/Entry';
import EntryStore from '../../../../stores/EntryStore';
// import EntryEdit from '../../components/EntryEdit';

interface EntryEditProps {
    entryData: EntryData;
    onTextChange: (text: string) => void;
    onTranslationsChange: (translations: string[]) => void;
    onSave: () => void;
}

interface Props {
    entryStore: EntryStore;
}

interface State {
    entryData: EntryData;
}

function withEntryEditContainer(EntryEditView: React.ComponentType<EntryEditProps>) {
    return class EntryEditContainer extends React.Component<Props, State> {
        constructor(props: Props) {
            super(props);
            
            this.state = {
                entryData: newEntryData({} as EntryData)
            }

            this.handleTextChange = this.handleTextChange.bind(this);
            this.handleTranslationsChange = this.handleTranslationsChange.bind(this);
            this.handleSave = this.handleSave.bind(this);
        }

        componentDidMount() {
            this.props.entryStore.clearEntries();
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
            this.props.entryStore.addEntry(this.state.entryData);
            this.setState({
                entryData: newEntryData({} as EntryData)
            })
        }

        render() {
            return (
                <EntryEditView
                    entryData={this.state.entryData}
                    onTextChange={this.handleTextChange}
                    onTranslationsChange={this.handleTranslationsChange} 
                    onSave={this.handleSave} 
                />
            )
            // return this.props.render({
            //     entryData: this.state.entryData,
            //     onTextChange: this.handleTextChange,
            //     onTranslationsChange: this.handleTranslationsChange, 
            //     onSave: this.handleSave
            // })
            // return (
            //     <EntryEdit
            //         entryData={this.state.entryData}
            //         onTextChange={this.handleTextChange}
            //         onTranslationsChange={this.handleTranslationsChange} 
            //         onSave={this.handleSave}
            //     />
            // )
        }
    }
}

export default withEntryEditContainer;
