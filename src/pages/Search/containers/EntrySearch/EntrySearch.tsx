import React from 'react';
import EntrySearch from '../../components/EntrySearch';
import EntryStore from '../../../../stores/EntryStore';

interface Props {
    entryStore: EntryStore;
}

interface State {
    text: string;
}

class EntrySearchContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            text: ""
        }

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        this.props.entryStore.clearEntries();
    }

    handleTextChange(text: string) {
        this.setState({
            text: text
        })
    }

    handleSearch() {
        this.props.entryStore.searchEntries(this.state.text);
    }

    render() {
        return (
            <EntrySearch
                onTextChange={this.handleTextChange}
                onSearch={this.handleSearch}
            />
        )
    }
}

export default EntrySearchContainer;