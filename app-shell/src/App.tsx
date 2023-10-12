import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { Spinner } from "./Spinner";

import { Songs } from 'songs/Songs';

// const Songs = lazy(() => import('songs/Songs'));
const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: app-shell</div>
      {/*<Suspense fallback={<Spinner />}>*/}
          <Songs />
      {/*</Suspense>*/}

  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
