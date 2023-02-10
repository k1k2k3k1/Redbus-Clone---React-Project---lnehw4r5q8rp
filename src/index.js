import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<App />, document.getElementById("root"));


ReactDOM.render(
   <HashRouter>
    <App />,
   </HashRouter>,
  document.getElementById("root")
);
// import {BrowserRouter}

// ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(<App />, document.getElementById("root"));