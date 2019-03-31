import React, { Component } from 'react';

import { WordStore } from '../../stores/WordStore';
import { WordsListProps } from '../../Interfaces';


class AllWordsContainer extends Component<{store: WordStore, children: (props: WordsListProps) => any}> {

    componentDidMount() {
        this.props.store.getAllWords();
    }

    render() {
        return this.props.children({
            words: this.props.store.words, 
            addWord: () => this.props.store.addWord("book")
        });
    }
}

export default AllWordsContainer;
