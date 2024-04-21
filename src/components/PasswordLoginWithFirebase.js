import React, {useState} from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import RegisterAndLogin from "./RegisterAndLogin";
import ForgotPassword from "./ForgotPassword";
import Landing from "./Landing";
import Navbar from './Navbar';
import News from './News';
import LoadingBar from 'react-top-loading-bar'


function PasswordLoginWithFirebase(){

    const pageSize = 8;
    const apiKey = process.env.REACT_APP_NEWS_API
    const [progress, setProgress] = useState(0)

    const location = useLocation();

    // Function to determine whether to show the Navbar based on the current route
    const shouldShowNavbar = () => {
        const { pathname } = location;
        return !["/", "/login", "/reset"].includes(pathname);
    };

    return(
            <div>      
            <LoadingBar color='#f11946' progress={progress}/>
                {shouldShowNavbar() && <Navbar />}
                <Routes>
                    <Route path="/" element={<Landing/>}/>
                    <Route path="/login" element={<RegisterAndLogin/>} />
                    <Route path="/reset" element={<ForgotPassword/>} />
                    <Route exact path='/general' element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
                    <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"  />} />
                    <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"  />} />
                    <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"  />} />
                    <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"  />} />
                    <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"  />} />
                    <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"  />} />
                </Routes>
            </div>


    )
}

export default PasswordLoginWithFirebase;