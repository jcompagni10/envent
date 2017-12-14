import { connect } from 'react-redux';
import { createEvent } from '../../actions/event.js';
import EventIndexItem from './event_index_item';

const mapStateToProps = state => ({
  events: state.events,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(EventIndexItem);
