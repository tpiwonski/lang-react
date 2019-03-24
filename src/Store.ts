import { decorate, observable } from 'mobx';

import { AllWordsState, WordProps } from './Interfaces';

class LangStore implements AllWordsState {
    words: WordProps[] = [];

    addWord(word: WordProps) {
        this.words.push(word);
    }
}

decorate(LangStore, {
    words: observable
})

const langStore = new LangStore();

export default langStore;
