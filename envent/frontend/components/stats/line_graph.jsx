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

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="chart">
        <Line
          data={this.props.chartData}
          options={{
            maitainAspectRatio: false,
            scales: {
              yAxes: [{
                display: true,
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }}
        />
      </div>
    );
  }
}
