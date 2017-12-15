import { connect } from 'react-redux';
import ProgressBar from './progress_bar';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  currentEvent: state.currentEvent
});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProgressBar));
