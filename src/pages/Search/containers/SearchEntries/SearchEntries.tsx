import React from 'react';
import SearchEntries from '../../components/SearchEntries';
import EntryStore from '../../../../stores/EntryStore';

interface Props {
    entryStore: EntryStore;
}

interface State {
    text: string;
}

class SearchEntriesContainer extends React.Component<Props, State> {
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
            <SearchEntries
                onTextChange={this.handleTextChange}
                onSearch={this.handleSearch}
            />
        )
    }
}

export default SearchEntriesContainer;