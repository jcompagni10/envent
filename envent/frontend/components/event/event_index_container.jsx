import { connect } from 'react-redux';
import { createEvent } from '../../actions/event.js';
import EventIndex from './event_index';
import {
  fetchEvents
} from './../../actions/event';

const mapStateToProps = state => ({
  events: state.events,
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);
