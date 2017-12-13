import { connect } from 'react-redux';
import ScheduleIndex from './schedule_index';
import { fetchScheduleItems } from './../../actions/scheduleItem';

const mapStateToProps = state => ({
  scheduleItems: state.scheduleItems,
  currentEvent: state.currentEvent,
});

const mapDispatchToProps = dispatch => ({
  fetchScheduleItems: () => dispatch(fetchScheduleItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleIndex);
