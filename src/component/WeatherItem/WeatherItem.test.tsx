import {fireEvent, getByText, render, screen, waitFor} from "@testing-library/react";
import {Provider} from "react-redux";
import store from "../../store/rootReducer";
import {WeatherItem} from "./WeatherItem";
import {SearchLocation} from "../SearchLocation";
import axios from 'axios';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

jest.mock('axios');
describe('WeatherItem test', () => {
    let response: any;
    beforeEach(() => {
        response = {
                    "id": 1,
                    "name": "London",
                }
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    test('WeatherItem', async () => {
        (axios.get as unknown as jest.Mock).mockReturnValue(response)

        const ren =  render(
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<SearchLocation/>}/>
                        <Route path="/" element={<WeatherItem/>}/>
                    </Routes>
                </BrowserRouter>
            </Provider>
        );

        expect(screen.getByTestId('input-link')).toContainHTML('');
        expect(screen.queryByTestId('WeatherItem-test')).toBeNull();
        fireEvent.change(screen.getByTestId('input-link'), {
            target: {value: "London"}
        })
        expect(screen.getByTestId('input-link')).toContainHTML('London');
        fireEvent.click(screen.getByRole('button'))
        expect( await waitFor(() => ren.getByText(('WeatherItem-test')))).toBeInTheDocument();
    });
})




