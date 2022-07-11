import React from 'react';
import { useParams} from "react-router-dom";
import {useSelector} from "react-redux/es/hooks/useSelector";
import "./WeatherPage.css"
import updateImg from "../../img/update.png";
import {fetchWeather} from "../../store/reducer/getWeather";
import {useDispatch} from "react-redux/es/hooks/useDispatch";
import Loader from "../../component/Loader/Loader";

const WeatherPage = () => {
    const dispatch = useDispatch<any>()
    const getWeatherReducer = useSelector((state: any) => {
        return state.getWeatherReducer
    })

    const pageId = useParams();
    const getProductInProduct = getWeatherReducer.weather.filter(
        (item: any) => item.name === pageId.id
    );

    const updateClick = (e: React.MouseEvent<HTMLDivElement>, id: any) => {
        e.preventDefault();
        dispatch(fetchWeather(id))
    }
    return (
        <div className="containerWeatherPage">
            {getWeatherReducer.loading ? <Loader/> : null}
            {getProductInProduct.map((item: any) =>
                <div key={item.id}>
                    <img
                        onClick={(e) => updateClick(e, item.name)}
                        className="imgWeatherPage"
                        src={updateImg}
                        alt={updateImg}
                    />
                    <div>{item.name}</div>
                    <div>{item.main.temp}K</div>
                    {item.weather.map((it: any) =>
                        <div key={it.id}>
                            <div>{it.main}</div>
                            <img src={`http://openweathermap.org/img/wn/${it.icon}.png`} alt={it.icon}/>
                        </div>
                    )}
                    <div>{item.main.humidity}волгоість</div>
                    <div>{item.clouds.all}%хмарність</div>
                    <div>{item.visibility}видимість</div>
                </div>
            )}
        </div>
    );
};

export default WeatherPage;