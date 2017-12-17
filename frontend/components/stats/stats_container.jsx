import { connect } from 'react-redux';
import Stats from './stats';

const mapStateToProps = state => ({
  events: state.events
});

const mapDispatchToProps = dispatch => ({
  // fetchEvents: 
});

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
