import { connect } from 'react-redux';
import { createEvent } from '../../actions/event.js';
import Event from './event';
import {
  fetchEvents
} from  './../../actions/event';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Event);
