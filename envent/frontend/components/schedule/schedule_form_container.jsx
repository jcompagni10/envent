import { connect } from 'react-redux';
import ScheduleForm from './schedule_form';
import {
  createScheduleItem,
} from './../../actions/scheduleItem';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  createScheduleItem: scheduleItem => dispatch(createScheduleItem(scheduleItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleForm);
