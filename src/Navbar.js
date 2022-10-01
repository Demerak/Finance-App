import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route, 
    Link
  } from "react-router-dom";


export default function Navbar() {
    return (
        <div className="wrapper">
            <div className="sidebar">
                <h1>Personal Finance App</h1>
                <ul>
                    <li><Link to="/"><i class="fas fa-home">Home</i></Link></li>
                    <li><Link to="/salary"><i class="fas fa-home">Salary</i></Link></li>
                    <li><Link to="/gic"><i class="fas fa-home">GIC</i></Link></li>
                </ul>
            </div>
        </div>     
    )
}