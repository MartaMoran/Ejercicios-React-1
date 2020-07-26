import React, { useState , useEffect} from 'react';
import { PostGrid} from './components/postgrid'
import CommentsGrid from './components/commentsgrid';

const PostContext=React.createContext();
const CommentContext=React.createContext();


const App = () => {
    const [posts, setPosts]=useState();
    const [comments, setComments]=useState();
    const [id, setId]=useState(10);
    console.log(id)
    

    const handleClick=(event)=>{
        const result=event.target.value
        console.log(result)
         setId(parseInt(result))
        }
  
    const postsApi=async()=>{
        const response= await fetch ("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        return data
    }

   
  
   


    

    useEffect(()=>{
        const getPosts=async()=>{
            const result=await postsApi();
            setPosts(result)
        }
        getPosts()
       },[])
    
       useEffect(()=>{
        const commentsApi=async()=>{
        
            let url="https://jsonplaceholder.typicode.com/comments?postId="+id
            const response= await fetch (url);
            const data = await response.json();
            return data
        }


        const getComments=async()=>{
            const result=await commentsApi();
            setComments(result)
        }
        getComments()
       },[id])
     
    return (
        <div>
        <PostContext.Provider value={{posts:posts, 
        handleClick : handleClick
        }}>
        <CommentContext.Provider value={comments}>
            <PostGrid/>
            <CommentsGrid/>
         </CommentContext.Provider>   
        </PostContext.Provider>
        </div>
    );
};

export  {App, PostContext, CommentContext};