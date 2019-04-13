import React from 'react';

import withEntrySearchContainer from '../../containers/EntrySearch';

interface Props {
    onTextChange: (text: string) => void;
    onSearch: () => void;
}

class EntrySearch extends React.Component<Props> {
    constructor(props: Props) {
        super(props);

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleTextChange(e: any) {
        this.props.onTextChange(e.target.value);
    }

    handleKeyPress(e: any) {
        console.log(e.key);
        if (e.key == 'Enter') {
            this.props.onSearch();
        }
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Enter text..."
                    onChange={this.handleTextChange}
                    onKeyPress={this.handleKeyPress}
                />
            </div>
        )
    }
}

export default withEntrySearchContainer(EntrySearch);
