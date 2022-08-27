import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const rate = axios.create({
  baseURL: 'http://api.nbp.pl/api/exchangerates/rates/a/',
});

const Chart = () => {
  const [post, setPost] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function getPost() {
      const response = await rate.get(`/${id}/last/10/?format=json`);
      setPost(response.data);
    }
    getPost();
  }, [id]);

  const label = ['10 days', '6 months', '1 year'];

  const data = {
    type: 'line',
    labels: post?.rates?.map((x) => {
      const date = new Date(x.effectiveDate);
      return new Intl.DateTimeFormat('pl', {
        month: 'short',
        day: 'numeric',
      }).format(date);
    }),
    datasets: [
      {
        label: label[0],
        data: post?.rates?.map((y) => y.mid),
        lineTension: 0.1,
        backgroundColor: 'rgba(15, 174, 150)',
        borderColor: 'rgba(15, 174, 150)',
        gridLines: 'false',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(15, 174, 150)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(15, 174, 150)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      },
      {
        label: label[1],
        data: post?.rates?.map((y) => y.mid),
        lineTension: 0.1,
        backgroundColor: 'rgba(15, 174, 150)',
        borderColor: 'rgba(15, 174, 150)',
        gridLines: 'false',
        borderCapStyle: 'butt',
        hidden: 'true',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(15, 174, 150)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(15, 174, 150)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      },
    ],
    options: {
      responsive: true,
    },
  };

  return (
    <div
      style={{
        width: '800px',
        height: '800px',
        margin: '0px auto',
        paddingTop: '500px',
      }}
    >
      <Line data={data} />
    </div>
  );
};

export default Chart;
