import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App.jsx";
import Applyow from "./components/ApplyNow.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import "./index.css";
import Layouy from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Layout from "./pages/Layout.jsx";
import ApplyNow from "./components/ApplyNow.jsx";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="apply" element={<ApplyNow />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

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


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layouy />,
//     errorElement: <NotFoundPage />,
//   },
//   {
//     path: "/apply",
//     element: <Applyow />,
//   },
// ]);
