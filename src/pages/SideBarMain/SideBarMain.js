import React from "react";
import SideBarMain from "../../components/SideBar/SideBarMain";
import MainContent from "../MainContent/MainContent";
import "./style.css";
import ParticlesBackground from "../../components/Particles-Background";

const SideBarMainPage = () => {

    return (
        <section className="container-main-content">
            
             <SideBarMain />
             <MainContent />

        </section>
       
        
    )

}


export default SideBarMainPage;