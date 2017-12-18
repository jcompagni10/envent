import React from 'react';
import LineGraphContainer from './line_graph_container';
import dashboard from '../dashboard/dashboard';
import moment from 'moment';
import {Glyphicon} from 'react-bootstrap';

export default class Stats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData:{}
    };
  }


  boxStats(){
    const events = this.props.events;
    return [
      {label: "All Events", icon: "tasks", value: events.all_ids.length, color: "#796AEE"},
      {label: "Current Events", icon: "calendar", value: events.current_events, color: "#ff7676"},
      {label: "Total Views", icon: "eye-open", value: events.views.length, color: "#54e69d"},
      {label: "Avg. Views", icon: "filter", value: events.avg_views, color: "#ffc36d"},
    ];
  }
  componentWillReceiveProps(newProps) {
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
    if (this.props.events.views){
      return(
        <div>
          <div className ="box-stats-container">
            {this.boxStats().map((item,idx)=>(
              <div
                key = {idx}
                className="box-stats-item">
                <div className="icon" style={{backgroundColor: item.color}}>
                  <Glyphicon glyph = {item.icon}/>
                </div>
                <div className="box-stats-label">
                  {item.label}
                </div>
                <div className="box-stats-value">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
          <div className="stats-container">
            <LineGraphContainer chartData={this.state.chartData} />
        </div>
      </div>
      );
    }
    return null;
  }
}
