import React from "react";
import myphoto from "../../assets/images/person-icon.png"
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideBarMain = () => {

    return (
        <div>
            <div className="container-sidebar">
                <div className="titulo-sidebar">
                    <div className="myphoto-sidebar">
                        <img src={myphoto} alt="Minha Foto" width={100} height={100}></img>
                        
                    </div>

                    <h3 className="mydesc">
                        Hudson Salis Evangelista
                    </h3>
                    

                </div>
                <nav>
                    <ul className="ul-container-sidebar">
                        
                        <li className="opcoes-sidebar">
                            Linkedin
                          
                            <FontAwesomeIcon icon="fa-brands fa-github" size="2x" />  
                        
                        </li>
                        <li className="opcoes-sidebar">GitHub</li>
                        <li className="opcoes-sidebar">Contato</li>
                        <li className="opcoes-sidebar">Sobre mim</li>
                    </ul>
                </nav>
            </div>
        </div>
    )

}


export default SideBarMain;