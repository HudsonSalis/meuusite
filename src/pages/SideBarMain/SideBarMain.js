import React from "react";
import SideBarMain from "../../components/SideBar/SideBarMain";
import MainContent from "../MainContent/MainContent";
import "./style.css";

const SideBarMainPage = () => {

    return (
        <section className="container-final">
            
             <SideBarMain />
             <MainContent />

        </section>
       
        
    )

}


export default SideBarMainPage;