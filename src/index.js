import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Order from "./pages/order";
import Login from "./pages/login";
import reportWebVitals from "./reportWebVitals";
import { AuthContextProvider } from "./context/AuthContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./pages/order/product";
import EditProduct from "./pages/order/product/edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/order/:id",
    element: <Product />,
  },
  {
    path: "/order/:id/edit",
    element: <EditProduct />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
