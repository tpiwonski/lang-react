import React from 'react';

import EntryStore from '../../../../stores/EntryStore';

interface EntrySearchProps {
    onTextChange: (text: string) => void;
    onSearch: () => void;
}

interface Props {
    entryStore: EntryStore;
}

interface State {
    text: string;
}

function withEntrySearchContainer(EntrySearchView: React.ComponentType<EntrySearchProps>) {
    return class EntrySearchContainer extends React.Component<Props, State> {
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
                <EntrySearchView
                    onTextChange={this.handleTextChange}
                    onSearch={this.handleSearch}
                />
            )
        }
    }
}

export default withEntrySearchContainer;
