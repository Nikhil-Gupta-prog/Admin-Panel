import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./Chart.css";
import LineChart from "./LineChart";
import StackedBar from "./Stackbar";
import MultiType from "./doubleSideChart";

const data = {
  datasets: [
    {
      label: "# of Votes",
      data: [12, 9, 8 ,4],
      backgroundColor: ["#0a2c4e", "#ffb600", "#0a2c4e","#ffb600"],
      borderColor: [
        "#0a2c4e",
        "#0a2c4e",
        "#0a2c4e",
      ],
      borderWidth: 1,
    },
  ],
};

const DoughnutChart = () => (
 
    
      <div className="child_chart">
            <div className="child_chart1">
              <Doughnut data={data} />
            </div>
            <div className="chart_part2">
              <LineChart />
            </div>
            <div className="chart_part2">
              <StackedBar />
            </div>
          <div className="chart_part2">
              <MultiType />
          </div>
      </div>
   
  
);

export default DoughnutChart;
