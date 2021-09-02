import React from 'react';
import { Bar } from 'react-chartjs-2';

const rand = () => Math.round(Math.random() * 20 - 10);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      type: 'line',
      label: 'Dataset 1',
      borderColor: '#0b0731',
      borderWidth: 2,
      fill: false,
      data: [rand(), rand(), rand(), rand(), rand(), rand()],
    },
    {
      type: 'bar',
      label: 'Dataset 2',
      backgroundColor: '#ffb600',
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'bar',
      label: 'Dataset 3',
      backgroundColor: '#0a2c4e',
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
    },
  ],
};

const MultiType = () => (
 
  <>
     
    <Bar data={data} />
    </> 
  
);

export default MultiType;