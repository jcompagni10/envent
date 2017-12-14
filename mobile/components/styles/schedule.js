import  {StyleSheet} from 'react-native';

export default StyleSheet.create({
  listItem: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: "#fff",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  sectionHeader:{
    backgroundColor: "#eee",
    padding: 10,
  },
  sectionHeaderText: {
    fontWeight: 'bold',
    fontSize: 15
  },
  listWrapper: {
    top: 0,
    bottom: 0,
    height: '90%',
  },
  eventList:{
    flex:1,
    backgroundColor: 'red'
  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: "space-around",
    paddingBottom: 5
  },
  dayButtonText:{
    fontWeight: 'bold',
    textAlign: 'center'
  },
  itemImage:{
    height: 50,
    width: 50,
    borderRadius:5,
    paddingRight: 10
  },
  itemInfo: {
    paddingLeft: 10,
    flexDirection: 'column'
  },
  itemTitle: {
    fontWeight: 'bold',
    textAlign: 'left'
  }
});
