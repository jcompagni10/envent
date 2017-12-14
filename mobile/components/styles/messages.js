import  {StyleSheet} from 'react-native';

export default StyleSheet.create({
  listItem: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: "#fff",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  listItemWrapper: {
    padding: 5
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

  imageWrapper: {
    padding: 10,
  },

  itemImage:{
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius:5,
    padding: 100,
    borderWidth:2,
    borderColor: '#eee'
  },

  itemTitle: {
    fontWeight: 'bold',
    textAlign: 'left'
  }
});
