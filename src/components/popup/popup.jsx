import React from "react";
import './popup.css';

const Popup = (props) => {
    const {trigger,setTrigger, title, children, buttonTxt} = props;

    return (trigger) ? (
        <div className="modal">
            <div className="overlay"></div>   
            <div className="modal-content">
                <h1>{title}</h1>
                <p>{children}</p>
                <button onClick={()=>window.location.reload(false)} className="modal-button">{buttonTxt}</button>
            </div>
        </div>
    ):"";
}

export default Popup