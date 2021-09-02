import React from 'react';
import { Line } from 'react-chartjs-2';
import "./lineChart.css";
const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 15, 2, 7],
      fill: false,
      backgroundColor: '#ffb600',
      borderColor: '#0a2c4e',
    },
  ],
};



const LineChart = () => (

    <div className='linChart_div'>
     
    <Line data={data}  />
      
    </div>
  
);

export default LineChart;