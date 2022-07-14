import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import AppRouter from "../../router/AppRouter";

export const renderTestApp = (component: any, options:any) => {
    const store = options?.initialState;

    return (
        <Provider store={store}>
            <MemoryRouter initialEntries={[options?.route]}>
                <AppRouter />
                {component}
            </MemoryRouter>
        </Provider>
    )
}
