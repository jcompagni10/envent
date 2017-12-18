import React from 'react';
// import Chart from 'chartjs';
import { Line, Bar } from 'react-chartjs-2';
import moment from 'moment';


// var ctx = document.getElementById('myChart').getContext('2d');
// var chart = new Chart(ctx, {
//   // The type of chart we want to create
//   type: 'line',

//   // The data for our dataset
//   data: {
//     labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [{
//       label: "My First dataset",
//       backgroundColor: 'rgb(255, 99, 132)',
//       borderColor: 'rgb(255, 99, 132)',
//       data: [0, 10, 5, 2, 20, 30, 45],
//     }]
//   },

//   // Configuration options go here
//   options: {}
// });

export default class LineGraph extends React.Component {
  constructor(props) {
    super(props);
  }


  allZero(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== 0) {
        return false;
      }
    }
    return true;
  }

  render() {
    let textOverlay;
    
    if ( this.allZero(this.props.chartData.datasets[0].data) ) {
      textOverlay = (
        <div className="graph-overlay">
          Requires at least 7 days of data before displaying user data
        </div>
      );
    } 

    return (
      <div className="chart">
        <Line
          data={this.props.chartData}
          options={{
            maitainAspectRatio: false,
            // scaleShowHorizontalLines: false,
            // scaleShowVerticalLines: false,
            scales: {
              yAxes: [{
                gridLines: {
                  display: false
                },
                display: true,
                ticks: {
                  beginAtZero: true
                }
              }],
              xAxes: [{
                gridLines: {
                  display: false
                },
                display: true,
              }]
            }
          }}
        />

        { textOverlay }
      </div>
    );
  }
}
