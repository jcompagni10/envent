import {Alert} from 'react-native';

export function fetchModuleData(eventId, module, offset){
  return fetch(`http://192.168.3.37:3000/api/events/${eventId}/${module}?offset=${offset}`)
  .then(response => {
    if (response.status === 200){
      return response.json();
    } else{
      Alert.alert("Cannot Connect To Server. Try Again Later");
      throw new Error(response.statusText);
    }}
  );
}

export function postNewsMessage(eventId, message){
  return fetch(`http://192.168.3.37:3000/api/events/${eventId}/news`,{
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',

    },
    body: JSON.stringify({
      news: message
    })
  })
  .then(response => {
    if (response.status === 200){
      return response.json();
    } else{
      Alert.alert("Cannot Post Message");
      throw new Error(response.statusText);
    }}
  );
}

export function postMessage(eventId, message){
  return fetch(`http://192.168.3.37:3000/api/events/${eventId}/messages`,{
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message
    })
  })
  .then(response => {
    if (response.status === 200){
      return response.json();
    } else{
      Alert.alert("Cannot Post Message");
      throw new Error(response.statusText);
    }}
  );
}
