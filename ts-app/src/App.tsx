import "./App.css";
import { Exercise1 } from "./ts-react/1-prop-types-to-interfaces";
import { Exercise2 } from "./ts-react/2-handlers";
import React from "react";

const App = () => {
    return (
        <div className="App">
            <h1>TS React</h1>
            <h3>Exercice 1 : </h3>
            <Exercise1 />
            <h3>Exercice 2 : </h3>
            <Exercise2 />
        </div>
    );
};

export default App;
