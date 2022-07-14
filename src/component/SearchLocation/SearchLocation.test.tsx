import {fireEvent, render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {Provider} from "react-redux";
import store from "../../store/rootReducer";
import {SearchLocation} from "./SearchLocation";

describe('SearchLocationr test', () => {
    test('SearchLocation', () => {
        const {getByTestId} = render(
            <Provider store={store}>
                <SearchLocation/>
            </Provider>
        );

        const input = getByTestId('input-link')
        expect(getByTestId('input-link')).toContainHTML('');
        userEvent.type(input, '123123')
        expect(getByTestId('input-link')).toContainHTML('123123');
        expect(input).toMatchSnapshot();
        fireEvent.click(screen.getByTestId('button-search'))
        expect(screen.getByTestId('button-search')).toHaveBeenCalled()
    });
})
