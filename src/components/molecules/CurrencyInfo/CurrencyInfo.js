import React from 'react';
import styled from 'styled-components';
import CurrencyIcon from 'components/atoms/CurrencyIcon/CurrencyIcon';
import Divider from 'components/atoms/Divider/Divider';
import CurrencyName from 'components/atoms/CurrencyName/CurrencyName';
import CodeItem from 'components/atoms/CodeItem/CodeItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 254px;
  height: 50px;
  flex-wrap: wrap;
`;

const Frame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 14px;
`;

const CurrencyInfo = () => {
  return (
    <Wrapper>
      <Frame>
        <CurrencyIcon />
        <CurrencyName />
        <CodeItem />
      </Frame>
      <Divider />
    </Wrapper>
  );
};
export default CurrencyInfo;
