import React from "react";
import InterfaceProjetoModal from "../Projeto/Modal/Modal";


const ProjetoModal = ({projetoId, onClickClose}) => {


    return(
        <InterfaceProjetoModal isOpen onClickClose={onClickClose}>
            <div>
                <h1>
                    TESTE
                </h1>

                <div>
                    <h2>Testando</h2>
                    <h2>Testando</h2>
                </div>
            </div>
            
        </InterfaceProjetoModal>
      
    );


}


export default ProjetoModal;

