import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { WeatherTypes } from "../../GlobalTypes";

interface intialStateTupe {
    weather: WeatherTypes[]
    loading: boolean,
}

const initialState: intialStateTupe = {
    weather: [],
    loading: false,
}

export const fetchWeather = createAsyncThunk(
    "weather",
    async function (location: string) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c&lang=Ukrainian`);
        const data = await response.json()
        return data
    }
)

export const getWeatherReducer = createSlice({
    name: "getWeather",
    initialState,
    reducers: {
        deleteWeather: (state: intialStateTupe, action: PayloadAction<number>) => {
            state.weather = state.weather.filter((p: any) => p.id !== action.payload)
        },
    },
    extraReducers: (builder: any) => {
        builder.addCase(fetchWeather.fulfilled, (state: intialStateTupe, action: PayloadAction<any>) => {
            const index = state.weather.findIndex((object: any) => object.name === action.payload.name);
            if (index === -1 && typeof action.payload['name'] !== "undefined") {
                state.weather.push(action.payload);
            }
            state.weather.forEach(function (element: any) {
                if (element.name === action.payload.name) {
                    element.main = action.payload.main;
                    element.weather = action.payload.weather;
                }
            });
            state.loading = false
        })

        builder.addCase(fetchWeather.pending, (state: intialStateTupe, action: PayloadAction<boolean>) => {
            state.loading = true
        })
    },
})

export default getWeatherReducer.reducer
export const {deleteWeather} = getWeatherReducer.actions

