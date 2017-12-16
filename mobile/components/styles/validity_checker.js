import  {StyleSheet} from 'react-native';

export default StyleSheet.create({

  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,.85)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  validityDisplay: {
    resizeMode: 'contain'
  },
  statusCode: {
    position: 'absolute',
    top: 30,
    color: '#fff',
    fontSize: 80,
    fontWeight: 'bold'
  },
  closeContainer:{
    position: 'absolute',
    top: 20,
    right: 20
  },

  close:{
    color: '#ccc',
    fontSize: 20
  }
  });
