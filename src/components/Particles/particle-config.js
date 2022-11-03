import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React from "react";
import particleOptions from "./particle";


const Particle = () => {

    const particlesInit = async (main) => {
        console.log(main);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <Particles 
            id="tsparticles"
            init={particlesInit} 
            loaded={particlesLoaded} 
            options={particleOptions}
        />
    )
};

export default Particle;