type Language = "en" | "pl";

export type TranslationData = {
    id: string, 
    text: string, 
    language: Language;
}

export interface EntryData {
    id: string, 
    text: string, 
    language: Language;
    translations: TranslationData[]
};

export class Translation {
    id: string;
    text: string;
    language: Language;

    constructor({id = "", text = "", language = "en"}: TranslationData) {
        this.id = id;
        this.text = text;
        this.language = language;
    }
}

// export function newEntryData(id: string = "", text: string = "", language: Language = "en", translations: TranslationData[] = []): EntryData {
export function newEntryData({id = "", text = "", language = "en", translations = []}: EntryData): EntryData {
    return {
        id,
        text,
        language,
        translations
    }
}

export function newTranslationData({id = "", text = "", language = "pl"} : TranslationData): TranslationData {
    return {
        id,
        text,
        language
    }
}

export class Entry {
    id: string;
    text: string;
    language: Language;
    translations: Translation[];
    
    constructor({id = "", text = "", language = "en", translations = []}: EntryData) {
        this.id = id;
        this.text = text;
        this.language = language;
        this.translations = translations.map(t => new Translation(t));
    }
}
