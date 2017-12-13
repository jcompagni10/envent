import  {StyleSheet} from 'react-native';

export default StyleSheet.create({
  errors: {
    paddingBottom: 4,
    paddingLeft: 10
  },
  authBG: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,.85)',
    justifyContent: 'center',
    padding: 40
  },

  closeButton: {
    textAlign: "right",
    fontWeight: "bold",
    paddingRight: 10
  },

  errorText: {
    top: 5,
    color: 'red',
  },
  authForm:{
    backgroundColor: 'rgba(255,255,255,.85)',
    top: -100,
    borderRadius: 3,
    padding: 5,
    paddingTop: 10,
    paddingBottom: 15
  },
  authText:{
    color: '#4abdac',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  AuthInputWrapper: {
    top: 5,
    padding: 5,
  },
  authInput: {
    backgroundColor: '#FFF',
    fontSize: 15,
    height: 30,
    padding: 5,
    color: '#999',
    top: 5,
  },
  bottomButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 20,
    paddingBottom: 20,
  },
  authButton: {
    top: 10,
    height: 25,
    padding:5,
    borderRadius: 5,
    backgroundColor: '#33a3f7'
  },
  authButtonText: {
    color: '#fff',
    top: 0
  },
  skipContainer: {
    top: 10,
    paddingBottom: 25,
    paddingLeft: 100,
    paddingRight: 100,
  },
  skipButton: {
    borderTopWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    height: 20,
    top: 10
  },
  skipButtonText: {
    textAlign: 'center',
    color: '#aaa'
  },
  or: {
    textAlign: 'center',
    top: 10
  }
  });
