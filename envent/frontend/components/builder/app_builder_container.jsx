import AppBuilder from './app_builder';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchEvent } from './../../actions/event';

const mapStateToProps = (state, ownProps) => ({
  currentEvent: state.currentEvent,
  ownProps: ownProps,
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvent: eventId => dispatch(fetchEvent(eventId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppBuilder));
