

const myIp= async()=>{
    const response= await fetch(`https://api.ipify.org/?format=json`)
   
    const {ip}= await response.json()
    console.log(ip)
    return ip
}


export {myIp}