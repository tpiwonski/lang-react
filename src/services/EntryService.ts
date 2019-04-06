import axios from 'axios';

import { EntryData } from '../types/Entry';

interface EntryResult {
    entry: EntryData;
}

class EntryService {
    getAllEntries() {
        return axios.get("http://localhost:8000/dictionary/entries/").
            then(this.getResults);
    }

    createEntry(entry: EntryData) {
        return axios.post("http://localhost:8000/dictionary/translations/", {
            entry: entry,
            translations: entry.translations
        }).
        then(response => {
            return response.data.data.entry.id;
        })
    }

    getEntry(id: string) {
        return axios.get(`http://localhost:8000/dictionary/entries/${id}/`).
            then((response: any) => {
                return response.data.data.entry;
            })
    }

    searchEntries(text: string) {
        return axios.get(`http://localhost:8000/dictionary/search/${text}`).
            then(this.getResults);
    }

    getResults(response: any) {
        return response.data.data.results.map((result: EntryResult) => {
            return result.entry;
        });
    }
}


export default EntryService;
