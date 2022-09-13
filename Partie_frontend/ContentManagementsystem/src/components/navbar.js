import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";


export default class Navbar extends Component {
    render() {
        return (
   
            <nav className="navbar navbar-expand navbar-light bg-dark">
           <a
href="https://www.komutel.com/en/"
target='_blank'
className='textt'
>                Komutel 
              </a>
              <div className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/contacts"} className="nav-link">
                    Contacts
                  </Link>
                </li>               
              </div>
            </nav>
        );
      }
}