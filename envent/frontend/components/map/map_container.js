import {connect} from 'react-redux';
import Map from './map';
import { getMap, createMap, destroyMap } from '../../actions/map';
import {withRouter} from 'react-router-dom';

const mapStateToProps = state => {
  return {
    maps: Object.values(state.currentEvent.maps)
  };
};

const mapDispatchToProps = dispatch => ({
  getMap: (eventId) => dispatch(getMap(eventId)),
  createMap: (eventId, map) => dispatch(createMap(eventId, map)),
  destroyMap: mapId => dispatch(destroyMap(mapId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Map));