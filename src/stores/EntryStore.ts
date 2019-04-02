import { decorate, observable } from 'mobx';

import { AllWordsState, EntryProps } from '../Interfaces';
import EntryService from '../services/EntryService';


export class EntryStore implements AllWordsState {
    entries: EntryProps[] = [];
    entryService: EntryService;

    constructor(entryService: EntryService) {
        this.entryService = entryService;
    }

    getAllEntries() {
        this.entryService.getAllEntries().then((words: EntryProps[]) => {
            words.forEach((word: EntryProps) => {
                this.entries.push(word)
            })
        });
    }

    addEntry(text: string) {
        this.entryService.addEntry(text).then((entry: EntryProps) => {
            this.entries.push(entry);
        })
    }
}

decorate(EntryStore, {
    entries: observable
})

export default EntryStore;
