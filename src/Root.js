import  React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import SideBarMain from "./pages/SideBarMain/SideBarMain";

const Root = () => {


    return (

        <Router>
            <Routes>

                <Route path="/" element={ <SideBarMain /> } />
            </Routes>
        </Router>

    );

}

export default Root;