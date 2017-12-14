import  {StyleSheet} from 'react-native';

export default StyleSheet.create({
  navMenuWrapper: {
    flex: 1,
    top: 20,
    bottom: 0,
    height: '100%',
  },
  navMenu: {
    flexDirection: 'column',
    padding: 15
  },
  navItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  accountBtn : {
    top: 25,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  navTitle: {
    fontSize: 25,
    marginLeft: 10,
    color: "#4abdac"
  },
  homeBtn: {
    position: 'absolute',
    bottom:25,
    left:15,
  },
  button: {
    marginRight: 200
  }
});
