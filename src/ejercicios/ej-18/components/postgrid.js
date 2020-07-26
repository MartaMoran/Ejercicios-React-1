import React, {useState, useEffect, useContext} from 'react';
import Posts from './posts';

import { PostContext } from '../App';



const PostGrid=()=>{
const getPosts=useContext(PostContext);
console.log(getPosts)


return (
    
    <div>
        <h1>Posts</h1>
{     
        getPosts.posts
        ? getPosts.posts.map((value)=><Posts body={value.body} value={value.id} onClick={getPosts.handleClick}></Posts>)
        : <p>loading</p>

        
    }
      
    </div>
)

}



export { PostGrid}