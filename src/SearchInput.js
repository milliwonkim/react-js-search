import React, { Component } from 'react';

class SearchInput extends Component {
  onSearch = event => {
    const { onSearch } = this.props;
    onSearch(event.target.value);
  };

  render() {
    const { searchTerm } = this.props;
    return (
      <input 
        type="text"
        className="form-control ds-input"
        value={searchTerm}
        placeholder="Search..."
        onChange={this.onSearch}
      />
    )
  }
}

export default SearchInput;