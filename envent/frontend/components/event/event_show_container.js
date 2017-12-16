import { connect } from 'react-redux';
import { createEvent } from '../../actions/event.js';
import EventShow from './event_show';
import { fetchEvent } from './../../actions/event';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  currentEvent: state.currentEvent,
});

const mapDispatchToProps = dispatch => ({
  fetchEvent: eventId => dispatch(fetchEvent(eventId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventShow));
