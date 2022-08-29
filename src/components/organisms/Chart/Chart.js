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

  const label = {
    date: [
      { name: '10 days', value: 10 },
      { name: '6months', value: 181 },
      { '1year': 365 },
    ],
  };

  useEffect(() => {
    async function getPost() {
      const response = await rate.get(`/${id}/last/10/?format=json`);
      setPost(response.data);
    }
    getPost();
  }, [id]);

  const options = {
    responsive: true,
    scale: {
      ticks: {
        //precision: 1,
      },
    },
    scales: {
      y: {
        grid: {
          color: '#2B2B2B',
        },
      },
      x: {
        grid: {
          display: 'false',
        },
      },
    },
    plugins: {
      legend: {
        align: 'end',
      },
    },
  };

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
        label: label.date[0].name,
        data: post?.rates?.map((y) => y.mid.toFixed(4)),
        lineTension: 0.1,
        backgroundColor: 'rgba(15, 174, 150)',
        borderColor: 'rgba(15, 174, 150)',
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
        label: label.date[1].name,
        data: post?.rates?.map((y) => y.mid),
        lineTension: 0.1,
        backgroundColor: '#fff',
        borderColor: 'rgba(15, 174, 150)',
        borderCapStyle: 'butt',
        borderDash: [],
        hidden: 'true',
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
  };

  return (
    <div
      style={{
        width: '800px',
        height: '800px',
        margin: '0px auto',
        paddingTop: '470px',
      }}
    >
      <h3 style={{ color: '#ecf1f0' }}>Wykres kursu średniego</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
