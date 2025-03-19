import React, { useState, useEffect } from "react";
import "./SeminarsList.css";
import AttentionModal from "./ModalWindows/AttentionModal";
import ChangeModal from "./ModalWindows/ChangeModal";











function SeminarsList() {


    useEffect(() => { getSeminars() })

    const [seminars, setSeminars] = useState([])

    const [attentionActiv, setAttentionActiv] = useState("AttentionModal")

    const [changeActiv, setChangeActiv] = useState("ChangeModal")

    const [currentTitle, setCurrentTitle] = useState("")



    async function getSeminars() {

        const url = "http://localhost:3001/seminars";

        const request = await fetch(url);

        const response = await request.json();

        setSeminars(response)

    }


    
    function changeModalOpen(e){

        setChangeActiv("ChangeModalActiv")
       
       setCurrentTitle( seminars.find(i=>i.title===e.currentTarget.previousSibling.textContent))
    }


    function attentionModalOpen(e) {

        setAttentionActiv("AttentionModalActiv")

        setCurrentTitle(e.currentTarget.parentElement.firstChild.textContent)

    }





    return (
        <div className="SeminarsList">

            <ul >

                <ChangeModal

                    changeActiv={changeActiv} setChangeActiv={setChangeActiv}

                    currentTitle={currentTitle}
                />

                <AttentionModal

                    attentionActiv={attentionActiv} setAttentionActiv={setAttentionActiv}

                    currentTitle={currentTitle}
                />
                {
                    seminars.map((item, key) =>

                        <li key={item.id} className="Seminar" >

                            <p>{item.title}</p>

                            <button className="ChangeSeminar" onClick={(e => changeModalOpen(e))}>change</button>

                            <button className="DeliteButton" onClick={(e => attentionModalOpen(e))}>delete</button>

                        </li>
                    )}
            </ul>

        </div>
    )
};



export default SeminarsList;