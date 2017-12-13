import { connect } from 'react-redux';
import InfoForm from './info_form';
import {
  fetchInfo,
  createInfo,
} from './../../actions/event';

const mapStateToProps = state => ({
  currentEvent: state.currentEvent
});

const mapDispatchToProps = dispatch => ({
  fetchInfo: eventId => dispatch(fetchInfo(eventId)),
  createInfo: (eventId, info) => dispatch(createInfo(eventId, info)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoForm);
