type Language = "en" | "pl";

type EntryData = {
    id: string, 
    text: string, 
    language: Language;
}; 

export class Entry {
    id: string;
    text: string;
    language: Language;
    
    constructor({id = "", text = "", language = "en"}: EntryData) {
        this.id = id;
        this.text = text;
        this.language = language;
    }
}
