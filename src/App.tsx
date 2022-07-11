import React from 'react';
import Header from "./component/Header/Header";
import AppRouter from "./router/AppRouter";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <AppRouter/>
            </div>
        </BrowserRouter>
    );
}

export default App;
