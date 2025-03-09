import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const HealthChart = ({ data }) => {
  const chartData = {
    labels: data.map((metric) => new Date(metric.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: 'Heart Rate',
        data: data.map((metric) => metric.heart_rate),
        borderColor: 'rgb(255, 99, 132)',
        fill: false,
      },
      {
        label: 'Systolic',
        data: data.map((metric) => metric.systolic),
        borderColor: 'rgb(54, 162, 235)',
        fill: false,
      },
      {
        label: 'Diastolic',
        data: data.map((metric) => metric.diastolic),
        borderColor: 'rgb(75, 192, 192)',
        fill: false,
      },
      {
        label: 'Temperature',
        data: data.map((metric) => metric.temperature),
        borderColor: 'rgb(153, 102, 255)',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Health Metrics Over Time',
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default HealthChart;