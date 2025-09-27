import React from "react";

function Navbar(){
    return(
        <nav className="nav-bar">
            <div className="logo">
        <img  className="logo" src="/logos.png" alt="pepsi logo"></img>
        </div>
        <div className="nav-links">
            <ul>
                <li><a href="#"> Products </a></li>
                <li><a href="#"> What's new </a></li>
                <li><a href="#"> Newsletter </a></li>
                <li><a className="rem" href="#"> Contact Us </a></li>
            </ul>
        </div>
        <button className="buy-products">Buy Products</button>
        </nav>
    )
}

export default Navbar;