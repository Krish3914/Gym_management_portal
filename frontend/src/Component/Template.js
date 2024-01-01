export const Template = ()=>{
    return(
        <div className="absolute text-center right-10 top-14 flex w-1/12 p-4 shadow-md bg-white gap-4 justify-between rounded-sm flex-col">
            <div className="flex justify-center flex-row gap-5 ">
                <img src={require("../images/avatars/6.png")} className="w-8 rounded-full"/>
                <div className="">Shubham</div>
            </div>  
            <div>My Profile</div>  
            <div>Settings</div>  
            <div>Billing</div>  
            <div>Logout</div>            
      </div>
    )
}