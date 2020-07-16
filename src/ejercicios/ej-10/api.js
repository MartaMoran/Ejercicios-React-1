
const myIpError=async()=>{
    
    const response=await fetch (`https://api.ipify.org/pepe/?format=json`)
    if (response===null){
      return console.log('null')
    }else{ 
      const {ip}=await response.json()
    console.log(ip)
    return ip}
  
}

export {myIpError}