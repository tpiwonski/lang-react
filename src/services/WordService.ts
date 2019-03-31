import axios from 'axios';

import { WordProps } from '../Interfaces';

interface WordResult {
    word: WordProps;
}

class WordService {
    getAllWords() {
        return axios.get("http://localhost:8000/dictionary/word/").
            then(response => {
                return response.data.data.results.map((result: WordResult) => {
                    return result.word;
                });
            })
    }

    addWord(word: string) {
        return axios.post("http://localhost:8000/dictionary/word/", {
            "word": word,
            "language": "en"
        }).then(response => {
            return response.data.data.word;
        })
    }
}

let wordService = new WordService();

export default wordService;
