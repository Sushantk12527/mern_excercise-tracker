import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import ExcercisesList from "./components/ExcercisesList";
import EditExcercises from "./components/EditExcercises";
import CreateExcercise from "./components/CreateExcercise";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ExcercisesList} />
        <Route path="/edit/:id" component={EditExcercises} />
        <Route path="/create" component={CreateExcercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
