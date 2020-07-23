import React, {useContext, createContext, useState, useEffect} from 'react';
import {postsApi, usersApi} from './api';
import Posts from './components/post';
const UsersContext= React.createContext()
const PostsContext= React.createContext()


  

const App = () => {
    const [users, setUsers]=useState();
    const [posts, setPosts]= useState();
    useEffect(()=>{
        const getUsers=async()=>{
            const result= await usersApi();
            setUsers(result);
        }
        getUsers()
    },[])
    useEffect(()=>{
        const getPosts=async()=>{
            const result=await postsApi();
            setPosts(result)
        }
        getPosts()
        
    },[])
    
    return (
        <div>
            <UsersContext.Provider value={users}>
             <PostsContext.Provider value={posts}>
                <Posts/>
             </PostsContext.Provider>
            </UsersContext.Provider>
        </div>
    );
};

export {App,  UsersContext, PostsContext};