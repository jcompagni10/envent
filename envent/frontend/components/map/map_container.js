import {connect} from 'react-redux';
import Map from './map';

const mapStateToProps = state => ({
  map: state.maps
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Map);