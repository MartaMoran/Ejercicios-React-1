import React from 'react';

function Comments (props){
    return (
        <>
        <h6>{props.name}</h6>
        <h6>{props.email}</h6>
        <p>{props.body}</p>
        </>
    )
}
export default Comments;
