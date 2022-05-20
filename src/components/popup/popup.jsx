import React from "react";
import './popup.css';

const Popup = (props) => {
    const {trigger, handleTrigger, title, children, buttonTxt} = props;

    return (trigger) ? (
        <div className="modal">
            <div className="overlay"></div>   
            <div className="modal-content">
                <h1>{title}</h1>
                <p>{children}</p>
                <button onClick={handleTrigger} className="modal-button">{buttonTxt}</button>
            </div>
        </div>
    ):"";
}

export default Popup