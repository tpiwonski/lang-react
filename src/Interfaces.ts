export interface TranslationProps {
    id: string;
    text: string;
    language: string;
}


export interface EntryProps {
    id: string;
    text: string;
    language: string;
    translations: TranslationProps[];
}

export interface EntriesListProps {
    words: EntryProps[];
    addWord: () => void;
}

export interface AllWordsState {
    entries: EntryProps[];
    getAllEntries: () => void;
    addEntry: (text: string) => void;
}
