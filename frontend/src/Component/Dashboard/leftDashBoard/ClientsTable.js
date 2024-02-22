import { useSelector } from "react-redux"
import { Table } from "./Tables"
import { Showtable } from "./Showtable";

export const ClientsTable = ()=>{
    const searchClients = useSelector((store)=>store.client.clientSearch);
    // console.log("printing searchClients",searchClients);
    return(
        (searchClients?.length == 0 ?<Table/>:<Showtable/>)
    )
}