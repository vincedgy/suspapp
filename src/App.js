import React, { Suspense, lazy } from "react";

import ErrorBoundary from "./ErrorBoundary";
import "./App.css";
import { createResource } from "./ProfileApi";

const Profile = lazy(() => import("./Profile"));
const Figure = lazy(() => import("./Figure"));

const resource = createResource();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Suspense !</h1>
      </header>

      <ErrorBoundary>
        <Suspense fallback={<p>Wait a moment please...</p>}>
          <Profile resource={resource} />
        </Suspense>
      </ErrorBoundary>
      <Suspense fallback={<p>Wait a moment please...</p>}>
        <Figure resource={resource} />
      </Suspense>
    </div>
  );
}

export default App;
