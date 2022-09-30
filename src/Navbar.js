import React from "react";

export default function Navbar() {
    return (
        <div className="wrapper">
            <div className="sidebar">
                <h1>Personal Finance App</h1>
                <ul>
                    <li><a href="#"><i class="fas fa-home">Home</i></a></li>
                    <li><a href="#"><i class="fas fa-home">Salary</i></a></li>
                    <li><a href="#"><i class="fas fa-home">GIC</i></a></li>
                </ul>
            </div>
        </div>
        
    )
}