import {connect} from 'react-redux';
import Map from './map';
import { getMap, createMap, destroyMap } from '../../actions/map';

const mapStateToProps = state => ({
  map: state.maps
});

const mapDispatchToProps = dispatch => ({
  getMap: id => dispatch(getMap(id)),
  createMap: map => dispatch(createMap(map)),
  destroyMap: mapId => dispatch(destroyMap(mapId))
  //fetch create delete
  //figure out map vs maps
  //migration side default img url q
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);