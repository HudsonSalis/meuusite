import React from "react";
import "./style.css"
//import ParticlesBackground from "../../components/Particles-Background";
import Particle from "../Particles/particle-config";
import { useState } from "react";
import ProjetoModal from "../Modal/Modal";


const MainContent = () => {

    const [projetoId, setProjetoId] = useState(false);
    const [active, setActive] = useState(true);

    return (
        <section className="container-main-content">
            <div className="particulas">
               <Particle />
            </div>
          
            <div className="container-myskills">

                <div className="main-bloco">
                    <div className="main-bloco-option">
                        <h1>Search - MiniLoja</h1>

                        <div>
                            <h2>Desc</h2>
                        </div>

                        <button
                            className="tecnology" 
                            onClick={() => setProjetoId(true)}
                            >
                            <h2>
                                Tecnologias utilizadas
                            </h2>
                        </button>
                    </div>
                    <div div className="main-bloco-option">
                        <h1>Search - MiniLoja</h1>
                        <div>
                            <h2>Desc</h2>
                        </div>

                        <div className="tecnology">
                            <h2>
                                Tecnologias utilizadas
                            </h2>
                        </div>
                    </div>
                    <div div className="main-bloco-option">
                        <h1>Search - MiniLoja</h1>
                        <div>
                            <h2>Desc</h2>
                        </div>

                        <div className="tecnology">
                            <h2>
                                Tecnologias utilizadas
                            </h2>
                        </div>
                    </div>
                    <div div className="main-bloco-option">
                        <h1>Search - MiniLoja</h1>
                        <div>
                            <h2>Desc</h2>
                        </div>

                        <div  className="tecnology">
                            <h2>
                                Tecnologias utilizadas
                            </h2>
                        </div>
                    </div>
                    <div div className="main-bloco-option">
                        <h1>Search - MiniLoja</h1>
                        <div>
                            <h2>Desc</h2>
                        </div>

                        <div className="tecnology">
                            <h2>
                                Tecnologias utilizadas
                            </h2>
                        </div>
                    </div>
                </div>

                {/* <div className="container-aptidoes">
                    <div className="title-mainSkills">
                        <h1>Main Skills</h1>
                    </div>
                    <div className="container-skills">
                        <div className="skills-react">React</div>
                        <div className="skills-react">JavaScript / TypeScript</div>
                        <div className="skills-react">HTML / CSS / SQL</div>
                    </div>

                    <div className="container-competencias">
                        <div className="competencias">Inglês Intermediario</div>
                        <div className="competencias">Inglês</div>
                        <div className="competencias">Inglês</div>
                    </div>
                
                    
                </div> */}

                {
                    projetoId && (
                        <ProjetoModal 
                            key={projetoId}
                            projetoId={projetoId}
                            onClickClose={() => setProjetoId(false)}
                        />
                    )
                }
            </div>
          

        </section>
      
        
    )
}

export default MainContent;