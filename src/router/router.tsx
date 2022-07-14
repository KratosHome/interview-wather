import {MainPage} from "../pages";
import {WeatherPage} from "../pages";


export const ProviderRouter: any[] = [
    {path: "/", component: <MainPage/>},
    {path: "/:id", component: <WeatherPage/>}
]