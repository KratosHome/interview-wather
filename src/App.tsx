import React from 'react';
import {Header} from "./component";
import AppRouter from "./router/AppRouter";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div
                className="App"
                data-testid="learn react"
            >
                <Header/>
                <AppRouter/>
            </div>
        </BrowserRouter>
    );
}

export default App;
