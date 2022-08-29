import React from 'react';
import styled from 'styled-components';
import CurrencyTrend from 'components/organisms/CurrencyTrend/CurrencyTrend';
import Chart from 'components/organisms/Chart/Chart';
import CalculatorNew from 'components/organisms/Calculator/CalculatorNew';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Currency = () => {
  return (
    <Wrapper>
      <CurrencyTrend />
      <CalculatorNew />
      <Chart />
    </Wrapper>
  );
};
export default Currency;
