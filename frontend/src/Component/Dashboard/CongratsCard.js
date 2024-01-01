export const CongratsCard = ()=>{
    return(
        <div className="flex bg-white rounded">
        <div className="flex flex-col justify-center gap-6 p-4">
          <span className="text-purple-500 font-semibold text-lg">Congratulations John! 🎉</span>
          <span className="text-base opacity-65">You have done<span className="font-semibold"> 72% </span> more sales today. Check your new badge in your profile.</span>
          <span className="border-2 border-purple-300 text-purple-400  hover:bg-purple-600 hover:text-white rounded-md duration-500 w-1/4 py-1 px-2 text-center text-xs"> View Badges</span>
        </div>
        <img src={require("../../images/illustrations/man-with-laptop-light.png")} className="self-center w-3/12 h-1/2 "/>
      </div>
    )
}