import React from "react";
import UserCard from "./UserCard";
import UserRepos from "./UserRepos";
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
  let userData = null;
  if (props.userData) {
    userData = Object.assign({}, props.userData, { userFound: true });
  } else {
    userData = Object.assign({}, { userFound: false });
  }
  console.log(userData);

  const userRepoList = props.userRepoList || [];
  const user = userData.userFound && <UserCard userData={userData} />;
  const repos = userData.userFound && <UserRepos userRepoList={userRepoList} />;

  return (
    <section>
      {user}
      {repos}
    </section>
  );
};

SearchResults.propTypes = propTypes;
SearchResults.defaultProps = defaultProps;
// #endregion

export default SearchResults;
