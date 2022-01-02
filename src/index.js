import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Axios from "axios";

Axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
ReactDOM.render(<App />, document.getElementById("root"));
