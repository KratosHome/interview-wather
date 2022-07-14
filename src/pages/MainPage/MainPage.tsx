import React from 'react';
import { WeatherItem } from '../../component';
import {SearchLocation} from "../../component";

export const MainPage = () => {
    return (
        <div
            data-testid="main-page"
        >
            <SearchLocation/>
            <WeatherItem/>
        </div>
    );
};

