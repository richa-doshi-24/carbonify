import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";

const PieChart = () => {

    const [chartData, setChartData] = useState({
        chart: {
          type: 'pie',
        },
        title: {
          text: 'My Pie Chart',
        },
      });
    
    
    useEffect(() => {
    // fetch data from API
    const fetchData = async () => {
      const response = await fetch('http://localhost:3006/items');
      const data = await response.json();
        console.log(data);
      // transform data to match chart format
      const chartData = {
        chart: {
          type: 'pie',
        },
        title: {
          text: 'My Pie Chart',
        },
        series: [
          {
            name: 'Sales',
            data: data.map((item) => ({
              name: item.name,
              y: item.price,
            })),
          },
        ],
      };

      // update chart data state
      setChartData(chartData);
    };

    fetchData();
  }, []);

    
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={chartData} />
      </div>
    );
  };
  
  export default PieChart;