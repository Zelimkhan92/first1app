import React from 'react';
import Logo from "./Logo";
import Menu from "./Menu";

function Header(props) {
    return (
        <div className="main">
            <div className="container">
                <div className="block">
                   <Logo/>
                   <Menu/>
                </div>
            </div>
        </div>
    );
}
export default Header;