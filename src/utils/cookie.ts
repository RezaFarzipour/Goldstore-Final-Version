const setCookie = (cookieName:string,token:string)=>{
    document.cookie = `${cookieName} =${token}`
}


export {setCookie}