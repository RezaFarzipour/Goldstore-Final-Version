const setCookie = (cookieName:string,token:string)=>{
    document.cookie = `${cookieName} =${token}`
}

function getCookie(name: string): string | null {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}

export {setCookie,getCookie}