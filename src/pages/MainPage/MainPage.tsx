import React from 'react';
import WeatherItem from "../../component/WeatherItem/WeatherItem";
import SearchLocation from "../../component/SearchLocation/SearchLocation";

const MainPage = () => {
    return (
        <>
            <SearchLocation/>
            <WeatherItem/>
        </>
    );
};

export default MainPage;