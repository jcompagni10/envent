import  {StyleSheet} from 'react-native';

export default StyleSheet.create({
  landingPageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain'
  },
  entryForm: {
    position: 'absolute',
    justifyContent: 'center'
  },
  tagBar: {
    flexDirection: 'row'
  },
  tagInput: {
    width: 200,
    height: 30,
    padding: 5,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, .8)',
    textAlign: 'center'
  },
  joinButton: {
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    width: 50,
    justifyContent: "center",
    height: 30,
    backgroundColor: '#4abdac'
  },
  joinButtonText: {
    textAlign: 'center',
    color: '#fc4a1a',
    fontWeight: 'bold'
  },
  logoWrapper: {
    position: 'absolute',
    flex: 1,
    left: 0,
    right: 0,
    top: 0,
    height: 100,
    backgroundColor: 'rgba(74, 189, 172, 0)',
    justifyContent: 'flex-end',
  },
  logo: {
    left: 0,
    top: 7,
    height: 25,
    resizeMode: "contain"
  },
  statusText: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#FC4a1a',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 16,
  }
});
