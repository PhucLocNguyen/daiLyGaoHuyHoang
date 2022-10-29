import React, {Component} from "react";
import ReactDOM from "react-dom/client"
import "./themify-icons/themify-icons.css"
import "./index.css"
import MainPage from "./app";
import slideEffect from "./slideEffect";
const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);
root.render(<MainPage />);
slideEffect();
