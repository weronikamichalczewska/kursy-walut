import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  margin: 100px 25px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Flag = styled.span`
  display: inline-block;
  vertical-align: middle;
  line-height: 0;
  position: relative;
`;

export const Image = styled.img`
  margin: 4px 4px 16px;
  overflow: hidden;
  width: 50px;
  height: 50px;
  margin: 4px;
  border-radius: 50%;
`;

export const Code = styled.span`
  display: block;
  color: #fff;
  padding-top: 5px;
  text-align: center;
  text-transform: uppercase;
`;
