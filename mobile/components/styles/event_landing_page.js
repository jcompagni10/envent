import  {StyleSheet} from 'react-native';
import Dimensions from 'Dimensions';

export default StyleSheet.create({
  landingPageContainer : {
    top: -70,
    zIndex: -1,
    height: Dimensions.get('window').height + 70,
    bottom: 0,
  },
  eventTitle:{
    color: '#4abdac',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
    textShadowColor: "rgba(0,0,0,.5)"
  },
  eventMessage:{
    color: '#fff',
    textAlign: 'center',
    marginTop: 45,
    fontSize: 15,
    fontWeight: 'bold',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
    textShadowColor: "rgba(0,0,0,.5)"
  },
  scrollHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollHeaderContainer: {
    top: 70,
    padding: 20
  },
  eventDateText: {
    marginTop: 10,
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
    textShadowColor: "rgba(0,0,0,.5)"

  },
  eventLocationText: {
    marginTop: 5,
    fontSize: 17,
    color: '#fff',
    textAlign: 'center',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
    textShadowColor: "rgba(0,0,0,.5)"
  }

});
