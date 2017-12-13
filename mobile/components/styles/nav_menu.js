import  {StyleSheet} from 'react-native';

export default StyleSheet.create({
  navMenuWrapper: {
    flex: 1,
    top: 0,
    bottom: 0,
    height: '100%',
  },
  navMenu: {
    flexDirection: 'column',
    padding: 20
  },
  navItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  accountBtn : {
    top: 30,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  navTitle: {
    fontSize: 25,
    color: "#4abdac"
  },
  homeBtn: {
    position: 'absolute',
    bottom:10,
    left:20,
  }
});
