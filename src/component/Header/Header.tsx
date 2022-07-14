import React from 'react';
import "./Header.css"
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <div className="containerHeader">
            <Link
                data-testid="main-link"
                to={"/"}
            >
                Go To Main
            </Link>
        </div>
    );
};
