import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar  from "./components/navbar";
import ContactsList from "./components/contacts-list";
import Contact from "./components/edit-contact";

class App extends Component {
  render() {
    return (
      <div>
<Navbar/>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/contacts"]} component={ContactsList} />
            <Route path="/contacts/:id" component={Contact} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
