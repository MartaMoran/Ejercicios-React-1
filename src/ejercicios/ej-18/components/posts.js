import React from 'react'

function Posts(props){
    return (
        <div>
            <p>{props.body}</p>
            <button onClick={props.onClick} value={props.value}>comentarios</button>
        </div>
    )
}
export default Posts