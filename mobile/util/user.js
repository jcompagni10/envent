import {  AsyncStorage } from 'react-native';

export function persistUser(user){
  let sessionToken = user.session_token;
  let email = user.email;
  AsyncStorage.setItem('sessionToken', sessionToken);
  AsyncStorage.setItem('userEmail', email);
}

export function signOut(){
  AsyncStorage.removeItem('sessionToken');
  AsyncStorage.removeItem('userEmail');
}

export async function currentUser(){
  let user = {};
  user["email"] = await AsyncStorage.getItem('userEmail');
  user["sesssionToken"] = await AsyncStorage.getItem('sessionToken');

  if (user["email"]) return user;
  return null;
}
