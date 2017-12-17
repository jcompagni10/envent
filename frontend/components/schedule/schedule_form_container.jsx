import { connect } from 'react-redux';
import ScheduleForm from './schedule_form';
import {
  createScheduleItem,
} from './../../actions/scheduleItem';
import { withRouter } from 'react-router-dom';
import { fetchEvent } from './../../actions/event';

const mapStateToProps = state => ({
  currentEvent: state.currentEvent,
});

const mapDispatchToProps = dispatch => ({
  createScheduleItem: (eventId, schedule_item) => dispatch(createScheduleItem(eventId, schedule_item)),
  fetchEvent: eventId => dispatch(fetchEvent(eventId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ScheduleForm));
