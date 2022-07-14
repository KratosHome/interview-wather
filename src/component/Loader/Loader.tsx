import React from 'react';
import "./Loader.css"

export const Loader = () => {
    return (
        <div
            data-testid="Loader-test"
            className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};
