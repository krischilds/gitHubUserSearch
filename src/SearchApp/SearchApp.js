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
      userName: null,
      userData: null,
      userRepoList: null
    };
  }

  getUserUrl = user => {
    const dataUrl = `https://api.github.com/users/${user}`;
    return dataUrl;
  };

  getUserReposUrl = userName => {
    const dataUrl = `https://api.github.com/users/${userName}/repos`;
    return dataUrl;
  };

  handleSearchNavChange(event) {
    const userName = event.target.value;
    this.loadUser(userName);
  }

  handleSearchNavSubmit(event) {
    event.preventDefault();
    this.loadUser(this.state.userName);
  }

  findUser(userName) {
    this.setState({ userName });
    if (userName !== this.state.userName) {
      const userUrl = this.getUserUrl(userName);

      console.log("handleSearchNavSubmit URL = " + userUrl);
    }
  }

  loadUser = userName => {
    if (!userName) return;
    const userUrl = this.getUserUrl(userName);

    fetch(userUrl)
      .then(response => {
        if (response.ok) return response.json();
        throw new Error("Request failed.");
      })
      .then(data => {
        this.setState({ userData: data, userName: userName });
        this.loadUserRepoList(userName);
      })
      .catch(error => {
        console.log(error);
      });
  };

  loadUserRepoList = userName => {
    if (!userName) return;
    const dataUrl = this.getUserReposUrl(userName);
    fetch(dataUrl)
      .then(response => {
        if (response.ok) return response.json();
        throw new Error("Request failed.");
      })
      .then(data => {
        console.log("Load User Repo List");
        console.log(data);
        this.setState({ userRepoList: data });
      })
      .catch(error => {
        console.log(error);
      });

    // description
  };

  render() {
    return (
      <div>
        <h3>SearchApp</h3>
        <SearchNav
          handleSearchNavChange={this.handleSearchNavChange.bind(this)}
          handleSearchNavSubmit={this.handleSearchNavSubmit.bind(this)}
        />
        <SearchResults
          userName={this.state.userName}
          userData={this.state.userData}
          userRepoList={this.state.userRepoList}
        />
      </div>
    );
  }
}

SearchApp.propTypes = propTypes;
SearchApp.defaultProps = defaultProps;
// #endregion

export default SearchApp;
