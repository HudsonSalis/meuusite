import React from "react";
import myphoto from "../../assets/images/ph.jpeg"
import "./style.css";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import fontawesome from '@fortawesome/fontawesome';

//fontawesome.library.add()


const SideBarMain = () => {

    return (
        <>
            <div className="container-sidebar">
                <div className="aboutme-sidebar">
                    <div className="myphoto-sidebar">
                        <img src={myphoto} alt="Minha Foto" width={100} height={100}></img>
                    </div>

                    <div className="mydesc">
                        <p className="myname">Hudson Salis Evangelista</p>
                        <p className="mycourse">Análise e Desenvolvimento de Sistemas</p>
                        <div className="extra">
                            <div className="line"></div>
                            <div className="ball"><i className="fa-solid fa-circle"></i></div>
                            <div className="line"> </div>
                        </div>
                    </div>
                    

                </div>

                <nav>
                    <ul className="ul-container-sidebar">
                
                        <li className="opcoes-sidebar">
                            <i className="fa-brands fa-github"></i>
                            <span className="links-opcoes-sidebar">
                                <a href="https://www.google.com.br/" target="_blank">Linkedin</a>
                            </span>
                        </li>
                        <li className="opcoes-sidebar">
                            <i className="fa-brands fa-linkedin"></i>
                            <span className="links-opcoes-sidebar">GitHub</span>
                        </li>
                        <li className="opcoes-sidebar">
                            <i className="fa-brands fa-square-instagram"></i>
                            <span  className="links-opcoes-sidebar">Instagram</span>
                        </li>
                        <li className="opcoes-sidebar">
                            <i className="fa-solid fa-comment"></i>
                            <span  className="links-opcoes-sidebar">About Me</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )

}


export default SideBarMain;