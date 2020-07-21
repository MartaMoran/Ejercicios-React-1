import React from 'react';
import NavigationBar from './NavigationBar';
import Avatar from './Avatar';

function Page(props) {
 

  return <NavigationBar avatar={props.avatar} />;
}

export default Page;