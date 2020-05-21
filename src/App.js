import React, { lazy, Suspense } from "react";

import "./App.css";
import { createResource } from "./ProfileApi";
const Home = lazy(() => import("./pages/Home"));

const resource = createResource();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Suspense !</h1>
      </header>
      <Suspense fallback={<p>Wait a moment please...</p>}>
        <Home resource={resource} />
      </Suspense>
    </div>
  );
}

export default App;
