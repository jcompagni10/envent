import React from 'react';
import LineGraphContainer from './line_graph_container';
import dashboard from '../dashboard/dashboard';
import moment from 'moment';

export default class Stats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData:{}
    };
  }

  componentWillReceiveProps(newProps) {
    // debugger;
    // if (this.props.events.all_ids.length !== newProps.events.all_ids.length) {
      this.getChartData(newProps);
    // }
  }
  
  getChartData(newProps) {
    let labels = [];
    
    for (let i = 0; i < 7; i++) {
      labels.unshift(moment().subtract(i, 'd').format("M/D"));
    }
    
    let data = newProps.events.views;

    this.setState({
      chartData: {
        labels: labels,
        datasets: [
          {
            label: 'Users',
            data: data,
            backgroundColor: 'rgba(74,189,172,0.6)',
          }
        ]
      }
    });
  }

  render() {
    return(
      <div className="stats-container">
      {/* Julian - top box with stats */}
        <LineGraphContainer chartData={this.state.chartData} />
      </div>
    );
  }
}