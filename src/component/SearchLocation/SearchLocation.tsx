import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {fetchWeather} from "../../store";
import "./SearchLocation.css"

export const SearchLocation = () => {
    const [location, setLocation] = useState("")
    const dispatch = useDispatch<any>()

    const onSubmit = ((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(fetchWeather(location))
    });


    return (
        <form onSubmit={onSubmit} className="containerSearchLocation">
            <input
                data-testid="input-link"
                className="inputSearchLocation"
                value={location}
                type="text"
                placeholder='Enter Location'
                onChange={(e) => setLocation(e.target.value)}
            />
            <button
                data-testid="button-search"
                className="buttonSearchLocation"
            >
                Search
            </button>

        </form>
    );
};
