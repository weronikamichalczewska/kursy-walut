import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { countries } from 'data/countries';

const Icon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const CurrencyIcon = (props) => {
  const { id } = useParams();
  const isPLN = props.isPLN;
  const element = countries.find((el) => el.code === id);
  if (isPLN) {
    const element = countries.find((el) => el.code === countries[5].code);
    return <Icon src={element.flag} />;
  }
  return element ? <Icon src={element.flag} /> : null;
};

export default CurrencyIcon;
