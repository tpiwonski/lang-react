import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { AllWordsState, WordProps } from '../../Interfaces';
import WordsList from '../../components/WordsList';


interface WordResult {
    word: WordProps;
}


const AllWordsContainer = observer(
    class AllWordsContainer extends Component<{store: AllWordsState}> {

        componentDidMount() {
            fetch("http://localhost:8000/dictionary/word/").
            then(response => {
                return response.json();
            }).
            then(data => {
                data.data.results.forEach((result: WordResult) => {
                    this.props.store.addWord(result.word);
                })
            })
        }

        render() {
            return this.props.children;
            // return (
            //     <WordsList {...this.props.store}/>
            // )
        }
    }
);

export default AllWordsContainer;
