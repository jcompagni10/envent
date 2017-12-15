import {connect} from 'react-redux';
import {createEvent} from '../../actions/event.js';
import EventForm from './event_form';

const mapStateToProps = state => ({
  errors: state.errors.eventErrors,
  currentEvent: state.currentEvent,
});

const mapDispatchToProps = dispatch => ({
  createEvent: (event)=>dispatch(createEvent(event))
});

export default connect(mapStateToProps,mapDispatchToProps)(EventForm);
