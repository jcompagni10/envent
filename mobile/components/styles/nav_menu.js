import  {StyleSheet} from 'react-native';

export default StyleSheet.create({
  navMenu: {
    flex: 1,
    flexDirection: 'column',
    padding: 20
  },
  navItem: {
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
