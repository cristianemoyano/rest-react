import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Form from "./Form";


const App = () => (
    <React.Fragment>
        <DataProvider
            endpoint="api/leads/"
        />
        <Form endpoint="api/leads/" />
    </React.Fragment>
);

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
