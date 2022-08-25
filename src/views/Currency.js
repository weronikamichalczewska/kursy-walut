import React from 'react';
import styled from 'styled-components';
import CurrencyTrend from 'components/organisms/CurrencyTrend/CurrencyTrend';
import Calculator from 'components/organisms/Calculator/Calculator';
import Chart from 'components/organisms/Chart/Chart';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Currency = () => {
  return (
    <Wrapper>
      <CurrencyTrend />
      <Calculator />
      <Chart />
    </Wrapper>
  );
};
export default Currency;
