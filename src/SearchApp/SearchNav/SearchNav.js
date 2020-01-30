import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

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

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Search App</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="https://github.com/krischilds">
          Back to Kris's Profile
        </Nav.Link>
      </Nav>

      <Form inline onSubmit={props.handleSearchNavSubmit}>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          onBlur={props.handleSearchNavChange}
        />
        <Button variant="outline-info" type="submit">
          Search
        </Button>
      </Form>
    </Navbar>
  );
};

SearchNav.propTypes = propTypes;
SearchNav.defaultProps = defaultProps;
// #endregion

export default SearchNav;
