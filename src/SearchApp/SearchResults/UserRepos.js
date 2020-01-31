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
const UserRepos = props => {
  const userRepoList = props.userRepoList || [];
  const repos = userRepoList.map(repo => {
    return <li className="list-group-item">{repo.name}</li>;
  });

  return (
    <div>
      <div>User Repo List: {userRepoList.length}</div>
      <ul style={{ textAlign: "left" }} className="list-group">
        {userRepoList.length > 0 && repos}
      </ul>
    </div>
  );
};

UserRepos.propTypes = propTypes;
UserRepos.defaultProps = defaultProps;
// #endregion

export default UserRepos;
