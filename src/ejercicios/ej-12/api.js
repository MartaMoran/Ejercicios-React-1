const apiChuck=async()=>{
    const response=await fetch('https://api.chucknorris.io/jokes/random')
    const {value}=await response.json()
    console.log (value)
    return (value)
}

export {apiChuck}