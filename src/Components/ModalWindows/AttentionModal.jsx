import React from "react";
import "./AttentionModal.css";
import delSeminar from "../../ServerRequests/delSeminar";



export default function AttentionModal({currentTitle, attentionActiv,setAttentionActiv}){

     
    const className=attentionActiv
    

    return(
        <div    className= {className}>
           
           <div className="Modal">

            <p>Вы действительно хотите удалить зту запись?</p>
            <div>
            <button onClick={(e=>{delSeminar(currentTitle); setAttentionActiv("AttentionModal")})} > delete</button> <button onClick={()=>setAttentionActiv("AttentionModal")}>cancel</button>

            </div>
           </div>


        </div>
    )
}