const postsApi= async()=>{
    const response= await fetch ('https://jsonplaceholder.typicode.com/posts');
    const data= await response.json();
    return data
}

const usersApi= async()=>{
    const response = await fetch ('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data
}
export  {postsApi, usersApi};