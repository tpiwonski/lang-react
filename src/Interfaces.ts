export interface TranslationProps {
    id: string,
    word: string,
    language: string
}


export interface WordProps {
    id: string,
    word: string,
    language: string,
    translations: TranslationProps[]
}

export interface AllWordsState {
    words: WordProps[]
    addWord(word: WordProps): void;
}