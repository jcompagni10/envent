import  {StyleSheet} from 'react-native';

export default StyleSheet.create({
  landingPageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    flexDirection: 'column',
    alignItems: 'center'
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
    height: 50,
    padding: 5,
    fontSize: 20,
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
    height: 50,
    backgroundColor: '#4abdac'
  },
  joinButtonText: {
    textAlign: 'center',
    color: 'rgb(247,183,51)',
    fontWeight: 'bold'
  },
  logoWrapper: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

    backgroundColor: 'rgba(74, 189, 172, 1)',
  },
  logo: {
    position: 'absolute',
    top: 20,
    left: 20,
    height: 50,
    width: 150,
    resizeMode: "contain"
  },
  statusText: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#F77',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
