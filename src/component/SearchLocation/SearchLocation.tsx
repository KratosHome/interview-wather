import React, {useState} from 'react';
import {useDispatch} from "react-redux/es/hooks/useDispatch";
import {fetchWeather} from "../../store/reducer/getWeather";
import "./SearchLocation.css"

const SearchLocation = () => {
    const [location, setLocation] = useState("")
    const dispatch = useDispatch<any>()

    const onSubmit = ((e: any) => {
        e.preventDefault()
        dispatch(fetchWeather(location))
    });


    return (
        <form onSubmit={onSubmit} className="containerSearchLocation">
            <input
                className="inputSearchLocation"
                value={location}
                type="text"
                placeholder='Enter Location'
                onChange={(e) => setLocation(e.target.value)}
            />
            <button
                className="buttonSearchLocation"
            >
                Search
            </button>

        </form>
    );
};

export default SearchLocation;