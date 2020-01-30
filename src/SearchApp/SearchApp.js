import React from "react";
import SearchNav from "./SearchNav";
import SearchResults from "./SearchResults";
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 *
 */
class SearchApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    };
  }

  getUserUrl = user => {
    const dataUrl = `https://api.github.com/users/${user}`;
    return dataUrl;
  };

  handleSearchNavChange(event) {
    const userName = event.target.value;
    if (userName !== this.state.userName) {
      this.setState({ userName });

      const userUrl = this.getUserUrl(userName);

      console.log("handleSearchNavSubmit URL = " + userUrl);
    }
  }

  handleSearchNavSubmit(event) {
    event.preventDefault();
    console.log("handleSearchNavSubmit " + this.state.userName);
  }

  render() {
    return (
      <div>
        <h3>SearchApp</h3>
        <SearchNav
          handleSearchNavChange={this.handleSearchNavChange.bind(this)}
          handleSearchNavSubmit={this.handleSearchNavSubmit.bind(this)}
        />
        <SearchResults userName={this.state.userName} />
      </div>
    );
  }
}

SearchApp.propTypes = propTypes;
SearchApp.defaultProps = defaultProps;
// #endregion

export default SearchApp;
