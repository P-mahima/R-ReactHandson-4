import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from "./Routes/Home";
import Student from "./Routes/Student";
import Contact from "./Routes/Contact";

const RouteNav = () => {
    return(
        <div>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Student' element={<Student/>}/>
                <Route path='/Contact' element={<Contact/>} />

            </Routes>

        </div>
    )
}
export default RouteNav;