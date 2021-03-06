import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { graphql } from 'react-apollo';

import {
  ExampleRoot,
  ExampleTitle,
  CountryList,
  CountryItem,
  BackButton,
} from './Example.styled';
import allFilmsQueryConfig from './graphql/config';
import { allFilmsQuery } from './graphql/queries';


export class Example extends Component {
  render() {
    const { countries } = this.props;

    return (
      <ExampleRoot>
        <ExampleTitle>
          Data fetching example
        </ExampleTitle>
        <CountryList>
          {countries.map(({ id, name }) => (
            <CountryItem key={id}>
              {name}
            </CountryItem>
          ))}
        </CountryList>
        <BackButton to='/'>
          Back
        </BackButton>
      </ExampleRoot>
    );
  }
}

Example.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
};

export default compose(
  graphql(allFilmsQuery, allFilmsQueryConfig),
)(Example);
