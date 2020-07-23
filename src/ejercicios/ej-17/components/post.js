import React, {useContext, useEffect, useState} from 'react';
import {UsersContext, PostsContext} from '../App';
import { usersApi } from '../api';

function Posts(){
    const userPost=useContext(UsersContext);
    const postPost= useContext(PostsContext);
   
  
   const undefinedState=postPost===undefined;
  return(
    
      <div>
        <ul>
          {
            undefinedState
            ?<li>loading...</li>
            : postPost.map((value)=>
            <li>{value.title}</li>
            )
          }
        </ul>
      </div>  
  );
}

export default Posts