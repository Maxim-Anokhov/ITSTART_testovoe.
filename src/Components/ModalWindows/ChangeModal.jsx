import React, {useState} from "react";
import "./ChangeModal.css";
import  patchSeminar from "../../ServerRequests/patchSeminar"
export default function ChangeModal({changeActiv,setChangeActiv,currentTitle}){

const clasName=changeActiv


const[inputValue, setInputValue]=useState()
    return(

        <div className={clasName}>
           
           <div className="Modal">
<form action="">

           <input type="window"  onChange={(e)=>{setInputValue(e.target.value); console.log(e.target.value)}} defaultValue ={currentTitle.description}/>
             
            <button onClick={((e)=>{patchSeminar(inputValue,currentTitle.title); setChangeActiv("ChangeModal"); e.currentTarget.previousSibling.defaultValue=("");})}>ok</button>
            <button onClick={(()=>setChangeActiv("ChangeModal"))}>cancel</button>
</form>
           </div>
        </div>
    )
}