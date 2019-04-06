import { decorate, observable, IObservableArray } from 'mobx';

import { Entry, EntryData } from '../types/Entry';
import EntryService from '../services/EntryService';


export class EntryStore {
    entries: IObservableArray<Entry> = observable.array([]);
    entryService: EntryService;

    constructor(entryService: EntryService) {
        this.entryService = entryService;

        this.loadAllEntries = this.loadAllEntries.bind(this);
        this.addEntry = this.addEntry.bind(this);
        this.searchEntries = this.searchEntries.bind(this);
        this.loadEntries = this.loadEntries.bind(this);
        this.clearEntries = this.clearEntries.bind(this);
        this.getEntry = this.getEntry.bind(this);
    }

    loadAllEntries() {
        this.entryService.getAllEntries().then(this.loadEntries);
    }

    addEntry(entry: EntryData) {
        this.entryService.createEntry(entry).
            then(this.getEntry);
    }

    getEntry(id: string) {
        this.entryService.getEntry(id).
            then((entry: EntryData) => {
                this.entries.push(new Entry(entry));
            })
    }

    searchEntries(text: string) {
        if (!!text) {
            this.entryService.searchEntries(text).then(this.loadEntries);
        }
    }

    loadEntries(entries: EntryData[]) {
        this.clearEntries();
        entries.forEach((entry: EntryData) => {
            this.entries.push(new Entry(entry))
        })
    }

    clearEntries() {
        this.entries.clear();
    }
}

// decorate(EntryStore, {
//     entries: observable
// })

export default EntryStore;
