import { connect } from 'react-redux';
import ScheduleForm from './schedule_form';
import {
  createScheduleItem,
} from './../../actions/scheduleItem';

const mapStateToProps = state => ({
  currentEvent: state.currentEvent,
});

const mapDispatchToProps = dispatch => ({
  createScheduleItem: (eventId, schedule_item) => dispatch(createScheduleItem(eventId, schedule_item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleForm);
