import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Indonesia, Global, Provinsi, ErrorPage, About } from "./pages";
import { Provider } from "react-redux";
import { persistor, store } from "./utils/redux/store";
import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Global />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/indonesia",
    element: <Indonesia />,
  },
  {
    path: "/provinsi",
    element: <Provinsi />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
