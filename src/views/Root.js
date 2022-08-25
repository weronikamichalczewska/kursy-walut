import React from 'react';
import Countries from 'components/molecules/Countries/Countries';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Currency from './Currency';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

const Wrapper = styled.div`
  background-color: #11011e;
  width: 100%;
  height: 100vh;
`;

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Countries />}></Route>
            <Route path="/:id" element={<Currency />}></Route>
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};
export default Root;
