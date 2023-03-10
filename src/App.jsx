import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.scss";

import Home from "./components/Home";
import AddCategory from "./components/AddCategory";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/add" element={<AddCategory />} />
      </Routes>
    </BrowserRouter>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
