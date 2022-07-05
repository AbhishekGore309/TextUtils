import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);
  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#e69900";
      showAlert("Dark Mode has been Enabled ", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff7e6";
      showAlert("Light Mode has been Enabled ", "success");
    }
  };

  return (
    <>
      <Router>
        <div className="container-flude">
          <Navbar mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />

          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>

            <Route
              exact
              path="/"
              element={
                <Home
                  showAlert={showAlert}
                  heading="Enter the text for analysing below :"
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
