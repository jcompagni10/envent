import AuthForm from './auth_form';
import React from 'react';

export default (props)=>(
  <AuthForm
    visible={true}
    skip={false}
    close={()=>(props.navigation.navigate("EventLandingPage"))}
    callback={()=>(props.navigation.navigate("EventLandingPage"))}

  />
);
