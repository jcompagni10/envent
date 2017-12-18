import {connect} from 'react-redux';
import Map from './map';
import { getMap, createMap, updateMap } from '../../actions/map';
import {withRouter} from 'react-router-dom';

const mapStateToProps = state => {
  return {
    maps: Object.values(state.currentEvent.maps)
  };
};

const mapDispatchToProps = dispatch => ({
  getMap: (eventId) => dispatch(getMap(eventId)),
  createMap: (eventId, map) => dispatch(createMap(eventId, map)),
  // destroyMap: mapId => dispatch(destroyMap(mapId)),
  updateMap: (eventId, map) => dispatch(updateMap(eventId, map))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Map));