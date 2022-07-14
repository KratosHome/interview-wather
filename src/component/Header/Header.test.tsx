import {render, screen} from '@testing-library/react';
import {MemoryRouter} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import React from "react";
import {Header} from "./Header";
import {MainPage} from "../../pages";
import {Provider} from "react-redux";
import store from "../../store/rootReducer";

describe('Header Test', () => {
    test('Test header Link', () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <Provider store={store}>
                    <Header/>
                    <MainPage/>
                </Provider>
            </MemoryRouter>
        );
        const headerLink = screen.getByTestId('main-link')
        userEvent.click(headerLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument()
    });
})

