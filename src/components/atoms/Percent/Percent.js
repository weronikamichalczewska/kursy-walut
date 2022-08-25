import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Span = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
  letter-spacing: 1.5;

  color: ${({ theme, value }) => {
    if (value > 0) return theme.highFidelityColor.greenPrimary;
    if (value < 0) return theme.fontColor.red;
    if (value === 0) return theme.wireframeColor.grey;
    return theme.wireframeColor.grey;
  }};
`;

const rate = axios.create({
  baseURL: 'https://api.nbp.pl/api/exchangerates/rates/a/',
});

const Percent = () => {
  const [post, setPost] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function getPost() {
      const response = await rate.get(`/${id}/last/2/?format=json`);
      setPost(response.data);
    }
    getPost();
  }, [id]);

  if (!post) return 'No post!';
  return <Change post={post} />;
};

const Change = ({ post }) => {
  const Percentagechange = (
    ((post.rates[1].mid - post.rates[0].mid) / post.rates[1].mid) *
    100
  ).toFixed(2);
  return <Span value={Percentagechange}> {Percentagechange} %</Span>;
};

export default Percent;
