import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux/es/hooks/useSelector";
import "./WeatherItem.css"
import {useDispatch} from "react-redux/es/hooks/useDispatch";
import {deleteWeather, fetchWeather,} from '../../store/reducer/getWeather';
import updateImg from "../../img/update.png"
import Loader from "../Loader/Loader";

const WeatherItem = () => {

    const getWeatherReducer = useSelector((state: any) => {
        return state.getWeatherReducer
    })
    const dispatch = useDispatch<any>()
    const deleteClick = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
        e.preventDefault();
        dispatch(deleteWeather(id))
    }
    const updateClick = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
        e.preventDefault();
        dispatch(fetchWeather(id))
    }
    return (
        <div className="containerWeathersItem">
            {getWeatherReducer.loading ? <Loader/> : null}
            {getWeatherReducer.weather.map((item: any) =>
                <div key={item.id} className="containerWeatherItem">
                    <Link key={item.id} to={item.name}>
                        <div>{item.name}</div>
                        <div>{item.main.temp}K</div>
                        {item.weather.map((it: any) =>
                            <div key={it.id}>
                                <div>{it.main}</div>
                                <img src={`http://openweathermap.org/img/wn/${it.icon}.png`} alt={it.icon}/>
                            </div>
                        )}
                        <div>{item.main.humidity}волгоість</div>
                        <div>{item.clouds.all}% хмарність</div>
                    </Link>
                    <div
                        className="deleteWeatherItem"
                        onClick={(e) => deleteClick(e, item.id)}>
                        X
                    </div>
                    <img
                        onClick={(e) => updateClick(e, item.name)}
                        className="imgWeatherItem"
                        src={updateImg}
                        alt={updateImg}
                    />
                </div>
            )}
        </div>
    );
};

export default WeatherItem;