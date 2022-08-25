import React from 'react';
import styled from 'styled-components';
import CurrencyInfo from 'components/molecules/CurrencyInfo/CurrencyInfo';
import CurrencyValue from 'components/molecules/CurrencyValue/CurrencyValue';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 18px 20px 18px 19px;
  gap: 17px;
  position: absolute;
  left: 112px;
  top: 132px;
  width: 297px;
  height: 187px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 18px;
`;

const CurrencyTrend = () => {
  return (
    <Wrapper>
      <CurrencyInfo />
      <CurrencyValue />
    </Wrapper>
  );
};
export default CurrencyTrend;
