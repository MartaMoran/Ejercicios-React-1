import React, {useState, useEffect, useContext} from 'react';
import Comments from './comments';
import {CommentContext} from '../App'

function CommentsGrid(){
    const comments=useContext(CommentContext);
    console.log(comments)
   
    
  
    return (
        <div>
            <h2>Comentarios</h2>
            {
                comments
                ?comments.map((value)=><Comments name={value.name} email={value.email} body={value.body}></Comments>)
                :<p>cargando comentarios...</p>
            }
        </div>
    )
}

export default CommentsGrid