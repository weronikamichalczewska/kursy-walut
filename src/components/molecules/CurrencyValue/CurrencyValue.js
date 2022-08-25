import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Percent from 'components/atoms/Percent/Percent';
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;

  width: 252px;
  height: 66px;
`;

const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  margin-top: auto;
`;

const Rate = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  padding: 0 45px;
  line-height: 28px;
  color: #ecf1f0;
`;

const rate = axios.create({
  baseURL: 'https://api.nbp.pl/api/exchangerates/rates/a/',
});

const CurrencyValue = () => {
  const [post, setPost] = useState();

  const { id } = useParams();

  useEffect(() => {
    async function getPost() {
      const response = await rate.get(`/${id}/?format=json`);
      setPost(response.data);
    }
    getPost();
  }, [id]);

  if (!post) return 'No post!';

  return (
    <Wrapper>
      <Frame>
        <Rate>{post.rates[0].mid}</Rate>
        <Percent />
      </Frame>
    </Wrapper>
  );
};
export default CurrencyValue;
