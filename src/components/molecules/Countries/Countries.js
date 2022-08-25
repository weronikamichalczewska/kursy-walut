import React from 'react';
import { countries } from 'data/countries';
import styled from 'styled-components';
import Country from 'components/atoms/Country/Country';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Countries = () => (
  <Wrapper>
    {countries.map((countryData) => (
      <Country countryData={countryData} />
    ))}
  </Wrapper>
);

export default Countries;
