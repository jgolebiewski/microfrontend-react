import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { Songs } from "./Songs";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: songs</div>
    <Songs />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
