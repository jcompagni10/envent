import { connect } from 'react-redux';
import { createEvent } from '../../actions/event.js';
import EventIndex from './event_index';
import {
  fetchEvents
} from './../../actions/event';

const mapStateToProps = state => ({
  events: state.events,
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: userId => dispatch(fetchEvents(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);
