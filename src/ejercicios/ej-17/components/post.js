import React, {useContext, useEffect, useState} from 'react';
import {UsersContext, PostsContext} from '../App';
import { usersApi } from '../api';

function Posts(){
    const userPost=useContext(UsersContext);
    const postPost= useContext(PostsContext);
   
  
   const undefinedState=postPost===undefined;
  return(
    
      <div>
        <h1>Posts Grid</h1>
        <ul>
          {
            undefinedState
            ?<li>loading...</li>
            : postPost.map((value)=>
            <li>{value.userId}</li>
            )
          }
        </ul>
      </div>  
  );
}

export default Posts