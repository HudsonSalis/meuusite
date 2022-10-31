import  React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import SideBarMainPage from "./pages/SideBarMain/SideBarMain";

const Root = () => {


    return (

        <Router>
            <Routes>

                <Route path="/" element={ <SideBarMainPage /> } />
            </Routes>
        </Router>

    );

}

export default Root;