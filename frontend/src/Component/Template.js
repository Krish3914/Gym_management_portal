export const Template = (props)=>{
    const{user} = props;
    console.log(user);
    return(
        <div className="absolute text-center right-10 top-14 flex w-1/12 p-4  shadow-md bg-white gap-4 justify-between rounded-sm flex-col">
            <div className="flex justify-center flex-row gap-5 ">
                <img src={require("../images/avatars/6.png")} className="w-8 rounded-full "/>
                <div className="">{user?.name}</div>
            </div>  
            <div className="cursor-pointer">My Profile</div>  
            <div className="cursor-pointer">Settings</div> 
            <div className="cursor-pointer">Logout</div>            
      </div>
    )
}