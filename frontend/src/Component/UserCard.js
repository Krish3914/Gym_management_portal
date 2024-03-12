import { useDispatch } from "react-redux"
import { makeInvisible } from "./redux/TemplateSlice"

export const UserCard = ()=>{
    const dispatch = useDispatch();
    return(
        <h1 onClick={()=>dispatch(makeInvisible(false))}>Welcome to User Card</h1>
    )
}