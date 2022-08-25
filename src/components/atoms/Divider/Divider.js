import React from 'react';
import styled from 'styled-components';

const Line = styled.div`
  width: 258px;
  height: 1px;
  background: #ecf1f0;
  opacity: 0.05;
`;

const Divider = () => {
  return <Line />;
};
export default Divider;
