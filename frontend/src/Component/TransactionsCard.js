import { useDispatch } from "react-redux"
import { makeInvisible } from "./redux/TemplateSlice";

export const TransactionsCard = ()=>{
    const dispatch = useDispatch();
    return(
        <h1 onClick={()=>dispatch(makeInvisible(false))}>Welcome to Transaction Card</h1>
    )
}