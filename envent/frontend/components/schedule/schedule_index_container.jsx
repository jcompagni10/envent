import { connect } from 'react-redux';
import ScheduleIndex from './schedule_index';
import { fetchScheduleItems } from './../../actions/scheduleItem';

const mapStateToProps = state => ({
  scheduleItems: state.scheduleItems,
  currentEvent: state.currentEvent,
});

const mapDispatchToProps = dispatch => ({
  fetchScheduleItems: (eventId) => dispatch(fetchScheduleItems(eventId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleIndex);
