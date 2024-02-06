const isLoggedIn = ()=>{
    const token = localStorage.getItem("token");
    console.log("this is token",token);
    return token;
}

export {isLoggedIn};