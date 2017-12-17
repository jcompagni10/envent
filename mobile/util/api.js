import {Alert} from 'react-native';

const END_POINT = "http://192.168.3.21:3000";

export function fetchModuleData(eventId, module, offset){
  return fetch(`${END_POINT}/api/events/${eventId}/${module}?offset=${offset}`)
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
  return fetch(`${END_POINT}/api/events/${eventId}/news`,{
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
  return fetch(`${END_POINT}/api/events/${eventId}/messages`,{
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
