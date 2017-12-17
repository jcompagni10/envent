import  {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mapContainer: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '70%',
    borderWidth: 0,
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: 'rgba(0,0,0,.5)',
    shadowOpacity: .5,
  }
});
