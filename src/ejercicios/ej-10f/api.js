const myErrorIp=async()=>{
    try{
        const response= await fetch ("https://api.ipify.org/pepe/?format=json")
        const {ip}=await response.json();
        return ip
    }catch{
        return 'Error'
    }
}

export default myErrorIp