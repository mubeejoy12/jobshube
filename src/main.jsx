import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Applyow from "./components/Applyow.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx"; // Ensure this is correctly imported
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />, // Ensure proper syntax here
  },
  {
    path: "/apply",
    element: <Applyow />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

{
  /* <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/apply" element={<Applyow />} />
    </Routes>
  </BrowserRouter> */
}
