import  {StyleSheet} from 'react-native';
import Dimensions from 'Dimensions';
export default StyleSheet.create({

  squaresContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    paddingLeft: 3,
    paddingRight: 3
  },
  square: {
    marginTop: 3,
    height: Dimensions.get('window').width/2 - 4.5,
    width: Dimensions.get('window').width/2 - 4.5,
  },
  squareImage: {
    resizeMode: 'cover',
    height: Dimensions.get('window').width/2- 4.5,
    width: Dimensions.get('window').width/2 - 4.5,
  },
  squareTitle:{
    backgroundColor: 'transparent',
    top: -25,
    marginLeft: 5,
    fontSize: 15,
    color: '#fff',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
    textShadowColor: "rgba(0,0,0,1)"
  }
});
