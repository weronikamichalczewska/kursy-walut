import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Code = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 6px;
  gap: 10px;
  margin: 20px;
  text-transform: uppercase;
  background: #b6b6b6;
  border-radius: 4px;
`;

const CodeItem = () => {
  const { id } = useParams();
  return <Code>{id}</Code>;
};

export default CodeItem;
