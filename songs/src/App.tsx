import React from "react";

import ReactDOM from 'react-dom/client';

import "./index.scss";
import { Songs } from "./Songs";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: songs</div>
    <Songs />
  </div>
);



const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);