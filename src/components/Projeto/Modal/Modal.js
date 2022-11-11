import React from "react";
import "./style.css";
import  ReactDOM  from "react-dom";



const portalRoot = document.getElementById('portal-root');

const InterfaceProjetoModal = ({children, isOpen, onClickClose}) => {

    if(!isOpen) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className="iModal-container">
            <div className="iModal">
                <button className="button-modal-close" type="button" onClick={onClickClose} >X</button>
                {children}
            </div>
        </div>,
        portalRoot
    );

};

export default InterfaceProjetoModal;