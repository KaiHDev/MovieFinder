import React from "react";
import Home from "./pages/Home";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route
        exact
        path="/moviedetails/:title"
        element={<MovieDetails />}
      ></Route>
      <Route path="*" element={<Error404 />}></Route>
    </Routes>
  );
};

export default App;
