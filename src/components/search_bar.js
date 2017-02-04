import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }
    render() {
        // return <input onChange={this.onInputChange} />;
        return (
            <div>
                <input className="search-bar"
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    onInputChange(term) {
        this.props.onSearchTermChange({ term })
        this.setState({ term })
    }
}

export default SearchBar;