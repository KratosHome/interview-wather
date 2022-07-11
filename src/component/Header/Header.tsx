import React from 'react';
import "./Header.css"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="containerHeader">
            <Link to={"/"}>Go To Main</Link>
        </div>
    );
};

export default Header;