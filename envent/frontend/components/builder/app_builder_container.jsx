import AppBuilder from './app_builder';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchEvent } from './../../actions/event';

const mapDispatchToProps = (dispatch) => ({
  fetchEvent: eventId => dispatch(fetchEvent(eventId)),
});

const mapStateToProps = (state, ownProps) => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppBuilder));
