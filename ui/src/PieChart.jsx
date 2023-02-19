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
      const response = await fetch('http://localhost:3006/categories/1234');
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
              y: item.y,
            })),
          },
        ],
        plotOptions: {
            pie: {
                point: {
                    events: {
                        click: function () {
                            console.log('You clicked on ' + this.name);
                            // Add your custom click handler code here
                        }
                    }
                }
            }
        }
      };

      // update chart data state
      setChartData(chartData);
    };

    fetchData();
  }, []);

    
    return (
      <div>

        <div style={{top:90, left: 10, position: 'absolute', height: '600px'}}>
        <HighchartsReact highcharts={Highcharts} options={chartData} />
      </div>
      </div>
    );
  };
  
  export default PieChart;