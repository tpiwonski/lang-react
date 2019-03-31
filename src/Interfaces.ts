export interface TranslationProps {
    id: string;
    word: string;
    language: string;
}


export interface WordProps {
    id: string;
    word: string;
    language: string;
    translations: TranslationProps[];
}

export interface WordsListProps {
    words: WordProps[];
    addWord: () => void;
}

export interface AllWordsState {
    words: WordProps[];
    getAllWords: () => void;
    addWord: (word: string) => void;
}
