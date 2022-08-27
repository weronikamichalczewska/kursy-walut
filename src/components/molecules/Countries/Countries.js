import React from 'react';
import { countries } from 'data/countries';
import styled from 'styled-components';
import Country from 'components/atoms/Country/Country';

const Wrapper = styled.div`
  //justify-content: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  color: #fff;
  text-align: center;
  margin: 0px auto;
  padding-top: 50px;
  font-weight: normal;
`;

const Countries = () => (
  <Wrapper>
    <Title>Wybierz walutę</Title>
    <Container>
      {countries.map((countryData) => (
        <Country countryData={countryData} />
      ))}
    </Container>
  </Wrapper>
);

export default Countries;
