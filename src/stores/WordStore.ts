import { decorate, observable } from 'mobx';

import { AllWordsState, WordProps } from '../Interfaces';
import wordService from '../services/WordService';

export class WordStore implements AllWordsState {
    words: WordProps[] = [];

    getAllWords() {
        wordService.getAllWords().then((words: WordProps[]) => {
            words.forEach((word: WordProps) => {
                this.words.push(word)
            })
        });
    }

    addWord(word: string) {
        wordService.addWord(word).then((word: WordProps) => {
            this.words.push(word);
        })
    }
}

decorate(WordStore, {
    words: observable
})

const wordStore = new WordStore();

export default wordStore;
