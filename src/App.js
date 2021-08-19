import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";

function App() {
  return (
    <div className="App">
      <h3>Build Sign Up & Login UI Template in React</h3>
    </div>
  );
}

export default App;