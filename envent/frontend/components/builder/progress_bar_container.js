import { connect } from 'react-redux';
import ProgressBar from './progress_bar';

const mapStateToProps = state => ({
  currentEvent: state.currentEvent
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar);
