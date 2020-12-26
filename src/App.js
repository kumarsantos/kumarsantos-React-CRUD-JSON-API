import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import {Route,Switch} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import Adduser from './components/users/Adduser';   
import Edituser from "./components/users/Edituser"; 
import Userview from "./components/users/Userview";
export const App = () => {
  return (
    <div className="App">

      <Navbar />
      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/users/add" component={Adduser} />
        <Route exact path="/user/edit/:id" component={Edituser} />
        <Route exact path="/user/view/:id" component={Userview} />
        <Route component={NotFound} />

      </Switch>
      
    </div>
  );
};

export default App;
