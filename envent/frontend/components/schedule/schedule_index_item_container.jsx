import { connect } from 'react-redux';
import ScheduleIndexItem from './schedule_index_item';
import {
  destroyScheduleItem,
} from './../../actions/scheduleItem';

const mapStateToProps = state => ({
  scheduleItems: state.scheduleItems,
});

const mapDispatchToProps = dispatch => ({
  destroyScheduleItem: scheduleItemId => dispatch(destroyScheduleItem(scheduleItemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleIndexItem);
