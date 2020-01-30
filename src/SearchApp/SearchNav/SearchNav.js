import React from "react";
//import styled from 'styled-components';
//import PropTypes from 'prop-types';

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
const SearchNav = props => {
  return (
    // handleSearchNavChange={this.handleSearchNavChange} handleSearchNavSubmit={this.handleSearchNavSubmit}
    <div>
      <form onSubmit={props.handleSearchNavSubmit}>
        <label>
          Name:
          <input type="text" name="name" onBlur={props.handleSearchNavChange} />
        </label>
        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
      <div>SearchNav: {props.userName}</div>
    </div>
  );
};

SearchNav.propTypes = propTypes;
SearchNav.defaultProps = defaultProps;
// #endregion

export default SearchNav;
