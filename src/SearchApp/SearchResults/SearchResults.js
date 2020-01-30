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
  return (
    <section>
      <div>Search Results</div>
      <div>Username: {props.userName}</div>
    </section>
  );
};

SearchResults.propTypes = propTypes;
SearchResults.defaultProps = defaultProps;
// #endregion

export default SearchResults;
