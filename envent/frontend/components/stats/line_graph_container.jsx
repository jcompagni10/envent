import { connect } from 'react-redux';
import LineGraph from './line_graph';

const mapStateToProps = state => ({
  events: state.events
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(LineGraph);
