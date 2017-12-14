import {connect} from 'react-redux';
import Map from './map';
import { getMap, createMap, destroyMap } from '../../actions/map';

const mapStateToProps = state => {
  return {
    currentEvent: state.currentEvent
  };
};

const mapDispatchToProps = dispatch => ({
  getMap: (eventId) => dispatch(getMap(eventId)),
  createMap: map => dispatch(createMap(map)),
  destroyMap: mapId => dispatch(destroyMap(mapId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);