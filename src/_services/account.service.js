let saveToken = (token) => {
    localStorage.setItem('token',token)
}

let logout = () => {
    localStorage.removeItem('token')
}

let isLogged = () => {
    let token = localStorage.getItem('token') // mety mreturn null
    return !!token // raha null dia mreturn false
}

export const accountService =  {
    saveToken,logout,isLogged
}