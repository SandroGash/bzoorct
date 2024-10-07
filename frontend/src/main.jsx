// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import routes from "~react-pages";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter(routes);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

// New config for react-router-dom v6 and use ErrorBoundary component startTransition and Suspense...
import React, { Suspense, startTransition } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import routes from "~react-pages";
import { BrowserRouter } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import { AuthProvider } from "./context/AuthProvider";

const App = () => {
  const element = useRoutes(routes);
  return <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>;
};

startTransition(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <AuthProvider>
        <ErrorBoundary>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ErrorBoundary>
      </AuthProvider>
    </React.StrictMode>
  );
});
