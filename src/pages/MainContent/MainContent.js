import React from "react";
import "./style.css"
//import ParticlesBackground from "../../components/Particles-Background";
import Particle from "../../components/Particles/particle-config";



const MainContent = () => {


    return (
        <section className="container-main-content">
            <div className="particulas">
               <Particle />
            </div>
          
            <div className="container-myskills">
                <div className="container-aptidoes">
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
                
                    
                </div>
            </div>
          

        </section>
      
        
    )
}

export default MainContent;