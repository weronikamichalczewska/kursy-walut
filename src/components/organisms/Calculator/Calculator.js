import React from 'react';
import CurrencyIcon from 'components/atoms/CurrencyIcon/CurrencyIcon';
import { useParams } from 'react-router-dom';
import { ReactComponent as Vector } from 'assets/vector.svg';
import { countries } from 'data/countries';
import { useState } from 'react';
import {
  Wrapper,
  Input,
  Filter,
  Code,
  Dropdown,
  ListItem,
  Flag,
  Image,
  Button,
} from './Calculator.styles';

const Calculator = () => {
  const { id } = useParams();
  const [isShown, setIsShown] = useState(false);
  const [selected, setSelected] = useState('');

  return (
    <Wrapper>
      <Input />
      <Filter onClick={(e) => setIsShown(!isShown)}>
        <CurrencyIcon isPLN={true} />
        <Code>pln</Code>
        <Vector />
        {isShown && (
          <Dropdown>
            {countries.map((countryData) => (
              <ListItem
                onClick={(e) => {
                  setSelected(countryData);
                  setIsShown(false);
                }}
              >
                <Flag>
                  <Image src={countryData.flag} alt="" />
                </Flag>
                <Code>{countryData.code}</Code>
              </ListItem>
            ))}
          </Dropdown>
        )}
      </Filter>
      <Input />
      <Filter onClick={(e) => setIsShown(!isShown)}>
        <CurrencyIcon />
        <Code>{id}</Code>
        <Vector />
        {isShown && (
          <Dropdown>
            {countries.map((countryData) => (
              <ListItem>
                <Flag>
                  <Image src={countryData.flag} alt="" />
                </Flag>
                <Code>{countryData.code}</Code>
              </ListItem>
            ))}
          </Dropdown>
        )}
      </Filter>
      <Button>Sprawdź kurs</Button>
    </Wrapper>
  );
};
export default Calculator;
