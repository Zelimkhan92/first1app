import React from 'react';
import Flogo from "./Flogo";
import Fmenu from "./Fmenu";
import Copyright from "./Copyright";

function Footer(props) {
    return (
        <div className="main">
            <div className="container">
                <div className="block2">
                  <Flogo/>
                  <Fmenu/>
                  <Copyright/>
                </div>
           </div>
        </div>
    );
}

export default Footer;