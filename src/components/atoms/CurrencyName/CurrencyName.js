import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { countries } from 'data/countries';

const Name = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #ecf1f0;
`;

const CurrencyName = () => {
  const { id } = useParams();
  const element = countries.find((el) => el.code === id);
  return element ? <Name>{element.currency}</Name> : null;
};

export default CurrencyName;
