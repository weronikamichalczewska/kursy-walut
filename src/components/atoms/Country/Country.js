import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Flag, Image, Code, StyledLink } from './Country.styles';

const Country = ({ countryData: { flag, code } }) => (
  <Wrapper>
    <StyledLink to={`${code}`} key={code}>
      <Flag>
        <Image src={flag} alt="" />
      </Flag>
      <Code>{code}</Code>
    </StyledLink>
  </Wrapper>
);

Country.protoTypes = {
  countryData: PropTypes.shape({
    flag: PropTypes.string,
    code: PropTypes.string,
  }),
};

export default Country;
