import React from "react";
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
const SearchResults = props => {
  var userData = null;
  if (props.userData) {
    userData = Object.assign({}, props.userData, { userFound: true });
  } else {
    userData = Object.assign({}, { userFound: false });
  }

  const userRepoList = props.userRepoList || [];
  return (
    <section>
      <div>Search Results</div>
      <div>Username: {props.userName}</div>
      <div>User Data: {userData.userFound ? "TRUE" : "FALSE"}</div>
      <div>User Repo List: {userRepoList.length}</div>
    </section>
  );
};

SearchResults.propTypes = propTypes;
SearchResults.defaultProps = defaultProps;
// #endregion

export default SearchResults;
