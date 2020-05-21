import React, { Suspense, lazy } from "react";
import ErrorBoundary from "../ErrorBoundary";

const Profile = lazy(() => import("../components/Profile"));
const Figure = lazy(() => import("../components/Figure"));

export default ({ resource }) => {
  return (
    <React.Fragment>
      <ErrorBoundary>
        <Suspense fallback={<p>Wait a moment please...</p>}>
          <Profile resource={resource} />
        </Suspense>
      </ErrorBoundary>
      <Suspense fallback={<p>Wait a moment please...</p>}>
        <Figure resource={resource} />
      </Suspense>
    </React.Fragment>
  );
};
