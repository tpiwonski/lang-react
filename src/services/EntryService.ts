import axios from 'axios';

import { EntryProps } from '../Interfaces';

interface EntryResult {
    entry: EntryProps;
}

class EntryService {
    getAllEntries() {
        return axios.get("http://localhost:8000/dictionary/entries/").
            then(response => {
                return response.data.data.results.map((result: EntryResult) => {
                    return result.entry;
                });
            })
    }

    addEntry(text: string) {
        return axios.post("http://localhost:8000/dictionary/entries/", {
            "text": text,
            "language": "en"
        }).then(response => {
            return response.data.data.entry;
        })
    }
}


export default EntryService;
