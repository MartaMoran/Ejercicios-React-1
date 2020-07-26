import React, {useContext, useEffect, useState} from 'react';
import {UsersContext, PostsContext} from '../App';
import { usersApi } from '../api';


function Posts(props){
    const userPost=useContext(UsersContext);
    const postPost= useContext(PostsContext);
   
  
   const undefinedState=postPost===undefined;
  return(
    
      <div>
        <h1>Posts Grid</h1>
       
          {
            undefinedState
           
            ?<p>loading...</p>
            : postPost.map((post)=>
            <p>{userPost.find((value)=>value.id===post.userId).email}
            {post.body}</p>) 
            
            
          }
       
      </div>  
  );
}

export default Posts