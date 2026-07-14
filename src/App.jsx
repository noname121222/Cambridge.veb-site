import "./App.css";
import { useState } from "react";
import {
  Home,
  Certificate,
  Branches,
  Courses,
  Teacher,
  Register,
} from "./components";
import Layout from "./Layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/register" element={<Register />} />
      </Route>
    )
  );

  return (
    <>
      <div className="app-container ">
         <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
