import React from 'react';
import NavigationBar from './NavigationBar';
import Avatar from './Avatar';

function Page(props) {
  
  const avatarIoC= (<Avatar userName={props.userName} totalOrders={props.totalOrders}/>)

  return <NavigationBar avatar={avatarIoC} />;
}

export default Page;