import React from "react";
import "./style.css"
import ParticlesBackground from "../../components/Particles-Background";



const MainContent = () => {


    return (
        <section className="container-main-content">
            <div className="particles-container">
                <ParticlesBackground />
            </div>
            <div className="title-skills">
                <h1>Main Skills</h1>
            </div>

        </section>
      
        
    )
}

export default MainContent;