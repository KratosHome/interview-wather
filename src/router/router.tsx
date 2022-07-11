import MainPage from "../pages/MainPage/MainPage";
import WeatherPage from "../pages/WeatherPage/WeatherPage";


export const ProviderRouter: any[] = [
    {path: "/", component: <MainPage/>},
    {path: "/:id", component: <WeatherPage/>}
]